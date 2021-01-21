import React from 'react';
import styled from 'styled-components';

const HomeGalleryHeroImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 8px 0 0 8px;
`
const HomeGalleryVertImage = styled.img`
  max-width: 50%;
  max-height: 50%;
  /* padding: 4px 0; */
  border-radius: 0 8px 8px 0;
`


const HomeGalleryImage = (props) => {
  if (props.hero) {
    return (
      <HomeGalleryHeroImage src={`${props.photo.link}`}></HomeGalleryHeroImage>
    );
  } else {
    return (
      <HomeGalleryVertImage src={`${props.photo.link}`}></HomeGalleryVertImage>
    );
  }
};


export default HomeGalleryImage;
