import React from 'react';
import styled from 'styled-components';

// Build as modal
// Property details at top:
// Address | Cost | # beds # baths

const MultiGalleryContainer = styled.div`
  /* border-radius: 8px; */
  align-items: center;
  margin: 0;
  z-index: ${props => props.zIndex};
`

const MultiGalleryDiv = styled.div`
  height: 500px;
  border-radius: 8px;
  /* overflow: hidden; */
  border: 5px solid black;
  align-items: center;
  display: flex;
  flex-direction: column;
`

const Row1Div = styled.div`
  display: flex;
  flex-direction: row;
  border: 2px solid red;
`

const Row2Div = styled.div`
  display: flex;
  flex-direction: row;
  border: 2px solid green;
`

const Row3Div = styled.div`
  display: flex;
  flex-direction: row;
  border: 2px solid blue;
`

const rowDivs = [
  Row1Div,
  Row2Div,
  Row3Div
]

const MultiGallery = ({photos, address, cost, beds, baths}) => {
  return (
    <MultiGalleryContainer>
      <MultiGalleryDiv>
        {
          threeGroups(photos).map(row =>
            buildRow(row)
          )
        }
      </MultiGalleryDiv>
    </MultiGalleryContainer>
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
        <img src={photo.link}></img>
      )}
    </Element>
  );
};


export default MultiGallery;
