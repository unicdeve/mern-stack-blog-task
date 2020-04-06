import validator from 'validator';
import isEmpty from './isEmpty';

export default function validateChangePasswordInput(data) {
  let { password, newPassword, confirmPassword } = data;
  const errors = {};

  password = !isEmpty(password) ? password : '';
  newPassword = !isEmpty(newPassword) ? newPassword : '';
  confirmPassword = !isEmpty(confirmPassword) ? confirmPassword : '';

  if (validator.isEmpty(password)) {
    errors.password = 'Please enter your current password';
  }

  if (!validator.isLength(newPassword, { min: 6, max: 30 }))
    errors.newPassword = 'New password must be at least 6 characters';

  if (validator.isEmpty(confirmPassword))
    errors.confirmPassword = 'Confirm Password field is required';

  if (!validator.equals(newPassword, confirmPassword))
    errors.confirmPassword = 'Both passwords must match';

  return {
    errors,
    isValid: isEmpty(errors)
  };
}
