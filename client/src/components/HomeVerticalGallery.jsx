import React from 'react';
import styled from 'styled-components';

const VerticalGalleryDiv = styled.div`
  display: flex;
  flex-direction: column;
  /* border-radius: 0 8px 8px 0; */
  overflow: hidden;
  height: 100%;
  margin-left: 8px;
`;

const VertImageUpper = styled.img`
  height: 50%;
  object-fit: cover;
  padding-bottom: 4px;
  /* margin: 8px; */
`;

const VertImageLower = styled.img`
  height: 50%;
  object-fit: cover;
  padding-top: 4px;
  /* margin: 8px; */
`;

const HomeGalleryVertical = ({photos}) => (
  <VerticalGalleryDiv>
    <VertImageUpper key={photos[0].id} src={`${photos[0].link}`} />
    <VertImageLower key={photos[1].id} src={`${photos[1].link}`} />
  </VerticalGalleryDiv>
);

export default HomeGalleryVertical;
