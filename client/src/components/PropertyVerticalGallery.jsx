import React from 'react';
import PropertyGalleryImage from './PropertyGalleryImage.jsx'
import styled from 'styled-components';

const VerticalGalleryDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  margin: 8px;
  padding: 8px;
`

const PropertyVerticalGallery = (props) => (
  <VerticalGalleryDiv className="PropertyVerticalGallery">
    {props.photos.map(photo =>
      <PropertyGalleryImage photo={photo}/>
    )}
  </VerticalGalleryDiv>
);


export default PropertyVerticalGallery;