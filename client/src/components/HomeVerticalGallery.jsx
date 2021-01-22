import React from 'react';
import HomeGalleryImage from './HomeGalleryImage.jsx';
import styled from 'styled-components';

const VerticalGalleryDiv = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0 8px 8px 0;
  overflow: hidden;
  height: 100%;
`

const HomeGalleryVertical = (props) => (
  <VerticalGalleryDiv>
    {props.photos.map(photo =>
      <HomeGalleryImage photo={photo}/>
    )}
  </VerticalGalleryDiv>
);


export default HomeGalleryVertical;