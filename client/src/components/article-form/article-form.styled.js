import styled from 'styled-components';

export const FormWrapper = styled.div`
  display: flex;
  padding: 10px;
`;

export const UserImageWrapper = styled.div`
  margin-right: 10px;
`;

export const ImagePreview = styled.img`
  width: 100%;
  height: 10rem;
  object-fit: cover;
  border-radius: 20px;
`;

export const FormFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UploadIcon = styled.i`
  font-size: 1.5rem;
  cursor: pointer;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.hoverColor};
  padding: 10px;
  transition: all 0.4s;

  &:hover {
    background: ${({ theme }) => theme.colors.hoverBg};
  }
`;
