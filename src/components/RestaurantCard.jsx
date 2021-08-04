import React from 'react';
import styled from 'styled-components';
import ReactStars from 'react-rating-stars-component';

import restaurante from '../assets/restaurante-fake.png';

const RestaurantCard = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-top: 5px;
  padding: 16px;
  background-color: #ffffff;
  border-left: 5px solid transparent;
  :hover {
    background-color: ${(props) => props.theme.colors.background};
    border-left-color: ${(props) => props.theme.colors.primary};
  }
`;

const RestaurantInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 24px;
  font-weight: bold;
  line-height: 29px;
  margin-bottom: 10px;
`;

const Address = styled.span`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 10px;
  margin-top: 10px;
`;

const RestaurantPhoto = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 6px;
`;

export const Restaurant = () => (
  <RestaurantCard>
    <RestaurantInfo>
      <Title>Nome do Restaurante</Title>
      <ReactStars isHalf activeColor="#e7711c" edit={false} value={4} />
      <Address>Rua Rio de Janeiro, 120</Address>
    </RestaurantInfo>
    <RestaurantPhoto src={restaurante} alt="Foto do Restaurante" />
  </RestaurantCard>
);
