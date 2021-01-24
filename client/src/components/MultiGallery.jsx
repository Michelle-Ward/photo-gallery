import React from 'react';
import styled from 'styled-components';
import { Close } from '@styled-icons/ionicons-outline/'

// Build as modal
// Property details at top:
// Address | Cost | # beds # baths

const MultiGalleryContainer = styled.div`
  /* border-radius: 8px; */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 75%;
  background: white;
  object-fit: cover;
  margin: 0px;
  height: calc(100% - 96px);
  width: calc(100% - 96px);
`

const MultiGalleryDiv = styled.div`
  height: calc(100% - 36px);
  width: 75%;
  border-radius: 8px;
  overflow-x: hidden;
  overflow-y: auto;
  align-items: center;
  display: flex;
  flex-direction: column;
`

const Row1Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex: 1 1 0;
  object-fit: contain;
`

const Row2Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  object-fit: contain;
  height: 50%;
  width: 50%;
`

const Row3Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  object-fit: contain;
  height: calc(100% / 3);
  width: calc(100% / 3);
`

const HomeDetailsRow = styled.div`
  display: flex;
  justify-content: flex-start;
  font-size: 14px;
  font-weight: bold;
  color: rgb(59, 65 , 68);
  font-family: 'Cabin', Roboto, Arial, sans-serif;
  width: 33%;
`

const DetailsText = styled.p`
  margin: 8px 8px;
`

const CostText = styled.p`
  margin: 8px;
  &:before {
    content: "|";
    margin-right: 12px;
  }
  &:after {
    content: "|";
    margin-left: 12px;
  }
`

const CloseButton = styled(Close)`
  color: rgb(59, 65, 68);
  outline: none;
  box-sizing: border-box;
  border: none;
  background: none;
  text-decoration: none;
  position: absolute;
  top: 3px;
  right: 3px;
  height: 40px;
  &:hover {
    color: rgb(0, 120, 130);
  }
`

const rowDivs = [
  Row1Div,
  Row2Div,
  Row3Div
]

const MultiImage = styled.img`
  width: 100%;
  height: 100%;
  /* margin: 8px; */
`

const MultiGallery = ({closeFunction, multiGalleryOpen, photos, address, cost, beds, baths}) => {
  return (
    multiGalleryOpen === true
    ? <MultiGalleryContainer>
        <HomeDetailsRow>
          <DetailsText>{address}</DetailsText>
          <CostText> {cost} </CostText>
          <DetailsText>{`${beds} Beds  ${baths} Baths`}</DetailsText>
        </HomeDetailsRow>
        <MultiGalleryDiv>
          {
            threeGroups(photos).map(row =>
              buildRow(row)
            )
          }
        </MultiGalleryDiv>
        <CloseButton onClick={closeFunction}>X</CloseButton>
      </MultiGalleryContainer>
    : null
  );
};

const threeGroups = (photos) => {
  let grouped = [];
  let count;
  let lastCount;
  for (let i = 0; i < photos.length; i += count) {
    count = Math.floor(Math.random() * 3) + 1;
    if (count === lastCount) {
      count = (count % 3) + 1;
    }
    let group = photos.slice(i, i + count);
    grouped.push(group);
    lastCount = count;
  }
  return grouped;
};

const buildRow = (photos) => {
  const Element = rowDivs[photos.length - 1];
  return (
    <Element>
      {photos.map(photo =>
        <MultiImage src={photo.link}></MultiImage>
      )}
    </Element>
  );
};


export default MultiGallery;
