import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  CustomLabel,
  CustomInput,
  CustomIcon,
  InputWrapper,
  CustomTextArea
} from './form-field.styled';

const FormField = ({
  name,
  placeholder,
  value,
  info,
  error,
  type,
  label,
  onChange,
  disabled,
  passwordIcon
}) => {
  const [iconName, setIconName] = useState('');
  const [typeName, setTypeName] = useState(type);

  useEffect(() => {
    if (passwordIcon) {
      setIconName('fas fa-eye-slash');
    }
  }, [passwordIcon]);

  const renderItem = () => {
    let formTemplate = null;

    switch (type) {
      case 'text':
      case 'email':
      case 'password':
        formTemplate = (
          <>
            {label && <CustomLabel>{label}</CustomLabel>}

            <CustomInput
              type={typeName}
              className={`${error ? 'invalid-input' : ''}`}
              placeholder={placeholder}
              name={name}
              onChange={onChange}
              value={value}
              disabled={disabled}
            />
            {info && <small className='form-text'>{info}</small>}
            {error && <div className='error-feedback'>{error}</div>}
          </>
        );
        break;

      case 'textarea':
        formTemplate = (
          <>
            {label && <CustomLabel>{label}</CustomLabel>}

            <CustomTextArea
              className={`${error ? 'invalid-input' : ''}`}
              placeholder={placeholder}
              name={name}
              onChange={onChange}
              value={value}
            />
            {info && <small className='form-text'>{info}</small>}
            {error && <div className='error-feedback'>{error}</div>}
          </>
        );
        break;

      default:
        formTemplate = null;
    }
    return formTemplate;
  };

  function passwordIconClicked() {
    if (iconName === 'fas fa-eye-slash') {
      setIconName('fas fa-eye');
      setTypeName('text');
    } else {
      setIconName('fas fa-eye-slash');
      setTypeName('password');
    }
  }

  return (
    <InputWrapper>
      {renderItem()}
      {passwordIcon && (
        <CustomIcon
          className={`${iconName}`}
          onClick={passwordIcon ? passwordIconClicked : null}
        />
      )}
    </InputWrapper>
  );
};

FormField.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.string,
  info: PropTypes.string
};

FormField.defaultProps = {
  type: 'text'
};

export default FormField;
