import React from 'react';

import { ImageLinkWrapper, Image } from './user-image.styled';

export default function UserImage({ image, userId }) {
  return (
    <ImageLinkWrapper to={`/user/${userId}`}>
      <Image src={image} />
    </ImageLinkWrapper>
  );
}
