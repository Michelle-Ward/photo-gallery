import React from 'react';
import styled from 'styled-components';

const PropertyHeroImage = styled.img`
  max-width: 100%;
  max-height: auto;
  object-fit: cover;
  border-radius: 8px 0 0 8px;
`
const PropertyImage = styled.img`
  max-width: 250px;
  max-height: 250px;
  object-fit: cover;
  border-radius: 0 8px 8px 0;
`


const PropertyGalleryImage = (props) => {
  if (props.hero) {
    return (
      <div>
        <PropertyHeroImage src={`${props.photo.link}`}></PropertyHeroImage>
      </div>
    );
  } else {
    return (
      <div>
        <PropertyImage src={`${props.photo.link}`}></PropertyImage>
      </div>
    );
  }

};


export default PropertyGalleryImage;
