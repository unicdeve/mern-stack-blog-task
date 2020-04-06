import validator from 'validator';
import isEmpty from './isEmpty';

export default function validateArticleInput(data) {
  let { title, description } = data;

  let errors = {};

  title = !isEmpty(title) ? title : '';
  description = !isEmpty(description) ? description : '';

  if (validator.isEmpty(title)) {
    errors.title = 'title is required';
  }

  if (validator.isEmpty(description)) {
    errors.description = 'Description is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}
