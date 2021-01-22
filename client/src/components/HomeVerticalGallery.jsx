import React from 'react';
import HomeGalleryImage from './HomeGalleryImage.jsx';
import styled from 'styled-components';

const VerticalGalleryDiv = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0 8px 8px 0;
  overflow: hidden;
  height: 100%;
  margin-left: 8px;
`

const VertImageUpper = styled.img`
  display: inline-block;
  max-width: auto;
  max-height: 50%;
  object-fit: cover;
  padding-bottom: 4px;
  /* margin: 8px; */
`

const VertImageLower = styled.img`
  display: inline-block;
  max-width: auto;
  max-height: 50%;
  object-fit: cover;
  padding-top: 4px;
  /* margin: 8px; */
`


const HomeGalleryVertical = (props) => (
  <VerticalGalleryDiv>
    <VertImageUpper src={`${props.photos[0].link}`}/>
    <VertImageLower src={`${props.photos[1].link}`}/>
  </VerticalGalleryDiv>
);


export default HomeGalleryVertical;