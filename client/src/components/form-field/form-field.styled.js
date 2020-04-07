import styled from 'styled-components';

export const InputWrapper = styled.div`
  margin-bottom: 1.5rem;
  width: 100%;
  position: relative;

  .invalid-input {
    border: 1px solid #dc3545;
  }

  .error-feedback {
    color: #dc3545;
    font-size: 10px;
  }

  .form-text {
    color: #ccc;
    font-size: 10px;
  }
`;

export const CustomInput = styled.input`
  max-width: 100%;
  border-radius: 31px;
  padding: 10px 20px;
  font-size: 18px;
  background: #f5f8fb;
  border: none;

  &:focus {
    outline: none;
  }

  &::placeholder {
    letter-spacing: 0;
    color: #e1e0dd;
    text-transform: capitalize;
  }
`;

export const CustomTextArea = styled.textarea`
  width: 100%;
  border-radius: 31px;
  padding: 10px 20px;
  font-size: 18px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    letter-spacing: 0;
    color: #e1e0dd;
    text-transform: capitalize;
  }
`;

export const CustomLabel = styled.label`
  font-size: 16px;
  color: #087ece;
`;

export const CustomIcon = styled.i`
  position: absolute;
  right: 14px;
  top: 28%;
  cursor: pointer;
  opacity: 0.5;
`;
