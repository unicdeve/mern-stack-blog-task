import validator from 'validator';
import isEmpty from './isEmpty';

export default function validateRegisterInput(data) {
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  data.password2 = !isEmpty(data.password2) ? data.password2 : '';

  if (validator.isEmpty(data.email)) errors.email = 'Email field is required';

  if (!validator.isEmail(data.email))
    errors.email = 'Please enter a valid email';

  if (validator.isEmpty(data.password))
    errors.password = 'Password field is required';

  if (!validator.isLength(data.password, { min: 6, max: 30 }))
    errors.password = 'Password must be at least 6 characters';

  if (validator.isEmpty(data.password2))
    errors.password2 = 'Confirm Password field is required';

  if (!validator.equals(data.password, data.password2))
    errors.password2 = 'Both passwords must match';

  return {
    errors,
    isValid: isEmpty(errors)
  };
}
