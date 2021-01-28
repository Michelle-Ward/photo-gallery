import React from 'react';
import styled from 'styled-components';

const HomeGalleryHeroImage = styled.img`
  display: inline-block;
  max-width: 100%;
  max-height: 100%;
`;

const HomeGalleryImage = ({photo}) => (
  <HomeGalleryHeroImage key={photo.id} src={`${photo.link}`} />
);

export default HomeGalleryImage;
