import React from 'react';
import styled from 'styled-components';
import { HotelBed } from '@styled-icons/remix-fill/'
import { Bath } from '@styled-icons/boxicons-solid/'
import { RulerCombined } from '@styled-icons/fa-solid/'

const Bed = styled(HotelBed)`
  color:rgb(134, 144, 153);
  height: 16px;
  align-self: center;
  margin-left: 8px;
`

const Bathtub = styled(Bath)`
  color:rgb(134, 144, 153);
  height: 16px;
  align-self: center;
  margin-left: 8px;
  transform: scaleX(-1);
`

const Ruler = styled(RulerCombined)`
  color:rgb(134, 144, 153);
  height: 16px;
  align-self: center;
  margin-left: 8px;
`

const HomeDetailsFields = [
  'address',
  'cost',
  'address2',
  'neighborhood',
  'beds',
  'baths',
  'sqft'
]

const largeFields = ['address', 'cost'];

const HomeDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 70%;
  margin: auto;
  font-size: 16px;
  color: rgb(59, 65 , 68);
  font-family: 'Cabin', Roboto, Arial, sans-serif;
`

const HomeDetailsRow = styled.div`
  display: flex;
  justify-content: flex-start;
`

const DetailsText = styled.p`
  margin: 8px 8px 8px 8px;
`

const DetailsBigText = styled.p`
  font-size: 28px;
  font-weight: bold;
  margin: 8px;
`

const HomeDetails = ({details}) => {
  return (
    <HomeDetailsContainer>
      <HomeDetailsRow>
        {largeFields.map(field => {
          return <DetailsBigText>{details[field]}</DetailsBigText>
        })}
      </HomeDetailsRow>
      <HomeDetailsRow>
        <DetailsText>{details['address2']}</DetailsText>
        <DetailsText>{details['neighborhood']}</DetailsText>
      </HomeDetailsRow>
      <HomeDetailsRow>
        <Bed /><DetailsText>{`${details['beds']} beds`}</DetailsText>
        <Bathtub /><DetailsText>{`${details['baths']} baths`}</DetailsText>
        <Ruler /><DetailsText>{`${details['sqft']} sqft`}</DetailsText>
      </HomeDetailsRow>
    </HomeDetailsContainer>
  );
};

// const HomeDetails = ({details}) => {
//   return (<HomeDetailsContainer>
//     {HomeDetailsFields.map(field => {
//       if (details[field] !== null) {
//         return largeFields.includes(field)
//           ? <DetailsBigText>{details[field]}</DetailsBigText>
//           : <DetailsText>{details[field]}</DetailsText> ;
//       }
//     })}
//   </HomeDetailsContainer>);
// };

export default HomeDetails;
