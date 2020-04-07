import bcrypt from 'bcryptjs';
import User from './user.model';
import { SALT } from '../../constants';
import validateRegisterInput from '../../validations/register';
import { generateToken } from '../../constants/utils';
import validateLoginInput from '../../validations/login';
import validateChangePasswordInput from '../../validations/changePassword';

// Register User
export const register = (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  // check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({
    email: req.body.email
  }).then(user => {
    errors.email = 'Email already exist.';

    if (user) return res.status(400).json(errors);
    else {
      const newUser = new User({
        email: req.body.email,
        password: req.body.password
      });

      bcrypt.genSalt(parseInt(SALT), (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw new Error(err);
          newUser.password = hash;

          newUser
            .save()
            .then(user => {
              const token = generateToken(user);
              const { _id, email } = user;
              const data = {
                token,
                user: { _id, email }
              };

              return res.status(201).json({ success: true, data });
            })
            .catch(err => console.log(err));
        });
      });
    }
  });
};

export const login = (req, res) => {
  const { isValid, errors } = validateLoginInput(req.body);

  if (!isValid) return res.status(400).json(errors);

  const { email, password: inputPassword } = req.body;

  User.findOne({ email }).then(user => {
    if (!user) {
      // user not found
      errors.general = 'Wrong email/password';
      return res.status(400).json(errors);
    }

    const { _id, email, password } = user;

    bcrypt.compare(inputPassword, password).then(isMatch => {
      if (isMatch) {
        const token = generateToken(user);
        const data = {
          token,
          user: {
            _id,
            email
          }
        };

        return res.json({ success: true, data });
      } else {
        // wrong password
        errors.general = 'Wrong email/password';
        return res.status(400).json(errors);
      }
    });
  });
};

export const currentUser = (req, res) => {
  return res.json({
    id: req.user.id,
    email: req.user.email,
    createdAt: req.user.createdAt,
    updatedAt: req.user.updatedAt,
    role: req.user.role
  });
};

export const changePassword = (req, res) => {
  const { errors, isValid } = validateChangePasswordInput(req.body);

  if (!isValid) return res.status(400).json(errors);

  const { password, newPassword } = req.body;

  User.findById(req.user.id).then(user => {
    bcrypt.compare(password, user.password).then(async isMatch => {
      if (!isMatch) {
        errors.general = 'Wrong password, please try again.';
        return res.status(400).json(errors);
      }

      user.password = await bcrypt.hash(newPassword, parseInt(SALT));

      user
        .save()
        .then(() =>
          res.status(201).json({ success: 'Password successfully changed.' })
        )
        .catch(() => {
          errors.general =
            'An error occured while trying to change your password, please try again';
          return res.status(500).json(errors);
        });
    });
  });
};
