import React from 'react';
import PropertyGalleryImage from './PropertyGalleryImage.jsx'
import PropertyVerticalGallery from './PropertyVerticalGallery.jsx'
import styled from 'styled-components';

const GalleryDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 8px;
  overflow: hidden;
  transition: 0.45s;
  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-delay: 0s;
  &:hover {
    transform-origin: center;
    transform: scale(1.025);
    /* transition: transform 0.45s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
    transition-property: transform;
    transition-duration: 0.45s;
    transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
    transition-delay: 0s; */
  }
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