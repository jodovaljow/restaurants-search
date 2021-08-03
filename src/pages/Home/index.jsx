import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import Slider from 'react-slick';

import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Wrapper, Container, Search, Logo, Map, CarouselTitle } from './styles';

export default () => {
  const [inputValue, setInputValue] = useState('');

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="Logo do restaurante" />
          <TextField
            label="Pesquisar Restaurantes"
            outlined
            trailingIcon={<MaterialIcon role="button" icon="search" />}>
            <Input value={inputValue} onChange={(e) => setInputValue(e.currentTarget.value)} />
          </TextField>
          <CarouselTitle>Na sua Área</CarouselTitle>
          <Slider {...settings}>
            <div>
              <img src={restaurante} alt="" />
            </div>
            <div>
              <img src={restaurante} alt="" />
            </div>
            <div>
              <img src={restaurante} alt="" />
            </div>
            <div>
              <img src={restaurante} alt="" />
            </div>
          </Slider>
        </Search>
        Hello World
      </Container>
      <Map />
    </Wrapper>
  );
};
