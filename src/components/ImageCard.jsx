import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 6px;
  background-image: url(${(props) => props.photo});
  background-size: cover;
  padding: 5px;
`;

const Title = styled.span`
  font-family: ${(props) => props.theme.fonts.regular};
  color: #ffffff;
  font-size: 16px;
`;

export default ({ photo, title }) => (
  <Card photo={photo}>
    <Title>{title}</Title>
  </Card>
);
