import React from 'react';
import styled from 'styled-components';

const HomeGalleryHeroImage = styled.img`
  display: inline-block;
  max-width: 100%;
  max-height: 100%;
`


const HomeGalleryImage = (props) => (
  <HomeGalleryHeroImage src={`${props.photo.link}`}></HomeGalleryHeroImage>
);


export default HomeGalleryImage;
