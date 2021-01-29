import React from 'react';
import styled from 'styled-components';
import { Close } from 'styled-icons/ionicons-outline/';

// Build as modal
// Property details at top:
// Address | Cost | # beds # baths

const MultiGalleryContainer = styled.div`
  border-radius: 8px;
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
  margin: 0;
  max-width: 1042px;
  height: calc(100% - 96px);
  will-change: transform;
`;

const BackgroundDiv = styled.div`
  z-index: 3;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0,0,0,0.7);
  /* backdrop-filter: blur(10px); */
`;

const MultiGalleryDiv = styled.div`
  height: 100%;
  width: auto;
  border-radius: 8px;
  overflow-x: hidden;
  overflow-y: auto;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 8px;
`;

const Row1Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* flex: 1 1 0; */
  height: auto;
  width: 100%;
  object-fit: contain;
  padding: 0 8px 8px 8px;
  &:last-child {
    padding-bottom: 0px;
    margin-bottom: 0px;
  }
`;

const Row2Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  object-fit: contain;
  height: 50%;
  width: 50%;
  padding: 0 8px 8px 8px;
  &:last-child {
    padding-bottom: 0px;
    margin-bottom: 0px;
  }
`;

const Row3Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  object-fit: contain;
  height: calc(100% / 3);
  width: calc(100% / 3);
  padding: 0 8px 8px 8px;
  &:last-child {
    padding-bottom: 0px;
    margin-bottom: 0px;
  }
`;

const HomeDetailsRow = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  font-size: 14px;
  font-weight: bold;
  color: rgb(59, 65 , 68);
  font-family: 'Cabin', Roboto, Arial, sans-serif;
  margin-top: 4px;
  margin-left: 4px;
  margin-right: 4px;
  border-bottom: 1px solid rgb(205, 209, 212);
`;

const DetailsText = styled.p`
  margin: 8px 8px;
`;

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
`;

const CloseButton = styled(Close)`
  color: rgb(59, 65, 68);
  outline: none;
  box-sizing: border-box;
  border: none;
  background: none;
  text-decoration: none;
  position: absolute;
  top: 0px;
  right: 0px;
  height: 40px;
  &:hover {
    color: rgb(0, 120, 130);
  }
`;

const rowDivs = [
  Row1Div,
  Row2Div,
  Row3Div,
];

const MultiImage = styled.img`
  width: 100%;
  height: auto;
  margin-left: ${(props) => {
    if (props.total > 0) {
      return '8px';
    }
    return '0px';
  }
};
`;

const MultiGallery = ({
  closeFunction, multiGalleryOpen, photos, address, cost, beds, baths,
}) => (
  multiGalleryOpen === true
    ? (
      <BackgroundDiv>
        <MultiGalleryContainer>
          <HomeDetailsRow>
            <DetailsText>{address}</DetailsText>
            <CostText>
              {' '}
              {cost}
              {' '}
            </CostText>
            <DetailsText>{`${beds} Beds  ${baths} Baths`}</DetailsText>
          </HomeDetailsRow>
          <MultiGalleryDiv>
            {
              threeGroups(photos).map((row) => buildRow(row))
            }
          </MultiGalleryDiv>
          <CloseButton onClick={closeFunction}>X</CloseButton>
        </MultiGalleryContainer>
      </BackgroundDiv>
    )
    : null
);

const threeGroups = (photos) => {
  const grouped = [];
  let count;
  let lastCount;
  for (let i = 0; i < photos.length; i += count) {
    count = Math.floor(Math.random() * 3) + 1;
    if (count === lastCount) {
      count = (count % 3) + 1;
    }
    const group = photos.slice(i, i + count);
    grouped.push(group);
    lastCount = count;
  }
  return grouped;
};

const buildRow = (photos) => {
  const rowTotal = photos.length - 1;
  const Element = rowDivs[rowTotal];
  return (
    <Element>
      {photos.map((photo, pos) => <MultiImage src={photo.link} pos={pos} total={rowTotal} />)}
    </Element>
  );
};

export default MultiGallery;
