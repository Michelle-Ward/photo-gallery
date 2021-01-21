import React from 'react';
import styled from 'styled-components';

const HomeGalleryHeroImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 8px 0 0 8px;
`
const HomeGalleryVertImage = styled.img`
  max-width: 33%;
  max-height: 33%;
  border-radius: 0 8px 8px 0;
`


const HomeGalleryImage = (props) => {
  if (props.hero) {
    return (
      <div>
        <HomeGalleryHeroImage src={`${props.photo.link}`}></HomeGalleryHeroImage>
      </div>
    );
  } else {
    return (
      <div>
        <HomeGalleryVertImage src={`${props.photo.link}`}></HomeGalleryVertImage>
      </div>
    );
  }

};


export default HomeGalleryImage;
