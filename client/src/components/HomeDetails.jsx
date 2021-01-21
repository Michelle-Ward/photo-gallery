import React from 'react';
import styled from 'styled-components';

const HomeDetailsFields = [
  'address',
  'cost',
  'address2',
  'neighborhood',
  'beds',
  'baths',
  'sqft'
]

const HomeDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
`

const DetailsText = styled.p`
  font-family: 'Cabin', Roboto, Arial, sans-serif;
  font-size: 16px;
  color: rgb( 59, 65 , 68);
`

const DetailsBigText = styled.p`
  font-family: 'Cabin', Roboto, Arial, sans-serif;
  font-size: 20px;
`

const HomeDetails = ({details}) => {
  return (<HomeDetailsContainer>
    {HomeDetailsFields.map(field => {
      console.log(details[field]);
      if (details[field] !== null) {
        return ['address', 'cost'].includes(field)
          ? <DetailsBigText>{details[field]}</DetailsBigText>
          : <DetailsText>{details[field]}</DetailsText> ;
      }
    })}
  </HomeDetailsContainer>);
};

export default HomeDetails;
