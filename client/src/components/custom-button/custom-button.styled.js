import styled from 'styled-components';

export const StyledButton = styled.button`
  background: ${props => (props.noBackground ? '#fff' : '#50b0f1')} !important;
  border-radius: 36px !important;
  border: none;
  width: ${props => (props.authBtn ? '100%' : 'auto')};
  color: ${props => (props.noBackground ? '#50b0f1' : '#fff')} !important;
  padding: 0.4rem 1.5rem;
  height: 2.5rem;
  text-transform: capitalize !important;
  cursor: pointer;
  transition: all 1s;

  /* &:hover {
    background: #fff !important;
    border-radius: 36px !important;
    color: #50b0f1 !important;
    border: ${props =>
      props.noBackground ? 'unset' : '1px solid #50b0f1'} !important;
  } */

  &:focus {
    outline: none;
  }
`;
