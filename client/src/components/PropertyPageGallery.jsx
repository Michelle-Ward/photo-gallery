import React from 'react';
import PropertyPageGalleryImage from './PropertyPageGalleryImage.jsx'
import styled from 'styled-components';

const GalleryDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: right;
  padding: 8px;
`


const PropertyPageGallery = (props) => (
  <GalleryDiv className="PropertyPageGallery">
    {props.photos.slice(0,3).map(photo =>
      <PropertyPageGalleryImage photo={photo}/>
    )}
  </GalleryDiv>
);

export default PropertyPageGallery;