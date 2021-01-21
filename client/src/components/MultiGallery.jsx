import React from 'react';
import styled from 'styled-components';

// Build as modal
// Property details at top:
// Address | Cost | # beds # baths

const MultiGalleryDiv = styled.div`
  z-index: -1;
`

const Row1Div = styled.div`

`

const Row2Div = styled.div`

`

const Row3Div = styled.div`

`

const rowDivs = [
  Row1Div,
  Row2Div,
  Row3Div
]

const MultiGallery = ({photos, address, cost, beds, baths}) => {
  return (
  <MultiGalleryDiv>
    {/*
    Divide photos into groups 3
    Randomly divide some groups of 3 into 1, 2 or 2, 1
    Build a row from each group using buildRow
     */}
  </MultiGalleryDiv>
)};

const buildRow = (photos) => {
  const element = rowDivs[photos.length - 1];
  return (
    <element>
      {photos.map(photo =>
        <img>{photo.link}</img>
      )}
    </element>
)};


export default MultiGallery;
