import React from 'react';
import PropertyGalleryImage from './PropertyGalleryImage.jsx'
import PropertyVerticalGallery from './PropertyVerticalGallery.jsx'
import styled from 'styled-components';

const GalleryDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  /* position: relative; */
  margin: auto;
  overflow: hidden;
`


const PropertyGallery = (props) => (
  <GalleryDiv className="PropertyGallery">
    {props.photos.slice(0,1).map(photo =>
      <PropertyGalleryImage photo={photo} hero={true}/>
    )}
    <PropertyVerticalGallery photos={props.photos.slice(1,3)}/>
  </GalleryDiv>
);

export default PropertyGallery;