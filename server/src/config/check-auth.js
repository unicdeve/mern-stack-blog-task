import { Strategy, ExtractJwt } from 'passport-jwt';

import { SECRET_OR_KEY } from '../constants/index';
import User from '../modules/user/user.model';

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = SECRET_OR_KEY;

export default passport => {
  passport.use(
    new Strategy(opts, (jwt_payload, done) => {
      User.findById(jwt_payload.id)
        .then(user => {
          if (user) return done(null, user);

          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
};
