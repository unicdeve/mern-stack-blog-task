import { useState } from 'react';

export const useForm = (callback, onChangeCallback, initialState = {}) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = e => {
    onChangeCallback();
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = e => {
    e.preventDefault();
    callback();
  };

  return {
    values,
    setValues,
    handleChange,
    errors,
    setErrors,
    handleSubmit
  };
};
