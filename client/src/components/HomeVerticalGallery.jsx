import React from 'react';
import HomeGalleryImage from './HomeGalleryImage.jsx';
import styled from 'styled-components';

const VerticalGalleryDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
`

const HomeGalleryVertical = (props) => (
  <VerticalGalleryDiv className="HomeGalleryVerticalGallery">
    {props.photos.map(photo =>
      <HomeGalleryImage photo={photo}/>
    )}
  </VerticalGalleryDiv>
);


export default HomeGalleryVertical;