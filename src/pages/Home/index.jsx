import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Wrapper, Container, Search, Logo, Carousel, CarouselTitle } from './styles';
import { Card, Restaurant, Modal, Map } from '../../components';

export default () => {
  const [inputValue, setInputValue] = useState('');
  const [modalOpened, setModalOpened] = useState(false);

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
          <Carousel {...settings}>
            <Card photo={restaurante} title="nome sei lá" />
            <Card photo={restaurante} title="nome sei lá" />
            <Card photo={restaurante} title="nome sei lá" />
            <Card photo={restaurante} title="nome sei lá" />
            <Card photo={restaurante} title="nome sei lá" />
            <Card photo={restaurante} title="nome sei lá" />
            <Card photo={restaurante} title="nome sei lá" />
            <Card photo={restaurante} title="nome sei lá" />
          </Carousel>
        </Search>
        <Restaurant />
      </Container>
      <Map />
      <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)} />
    </Wrapper>
  );
};
