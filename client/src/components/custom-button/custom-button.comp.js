import React from 'react';

import './custom-button.styles.css';
import { StyledButton } from './custom-button.styled';

const CustomButton = ({
  children,
  noBackground,
  border,
  authBtn,
  loading,
  ...prop
}) => {
  return (
    <StyledButton authBtn={authBtn} noBackground={noBackground} {...prop}>
      {loading ? (
        <>
          <i className='fas fa-spinner fa-pulse mr-2' /> {children}
        </>
      ) : (
        children
      )}
    </StyledButton>
  );
};

export default CustomButton;
