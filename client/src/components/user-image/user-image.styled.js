import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ImageLinkWrapper = styled(Link)`
  width: 3rem;
  height: 3rem;
  display: block;

  @media only screen and (max-width: 800px) {
    width: 2rem;
    height: 2rem;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;
