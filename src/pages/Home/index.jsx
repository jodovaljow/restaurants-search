import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import {
  Wrapper,
  Container,
  Search,
  Logo,
  Carousel,
  CarouselTitle,
  ModalTitle,
  ModalContent,
} from './styles';
import { Card, Restaurant, Modal, Map, Loader } from '../../components';

export default () => {
  const [inputValue, setInputValue] = useState('');
  const [modalOpened, setModalOpened] = useState(false);
  const [query, setQuery] = useState('');
  const [placeId, setPlaceId] = useState(null);
  const { restaurants, restaurantSelected } = useSelector((state) => state.restaurants);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      setQuery(inputValue);
    }
  }

  function handleOpenModal(placeId) {
    setPlaceId(placeId);
    setModalOpened(true);
  }

  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="Logo do restaurante" />
          <TextField
            label="Pesquisar Restaurantes"
            outlined
            trailingIcon={<MaterialIcon role="button" icon="search" />}>
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.currentTarget.value)}
              onKeyPress={handleKeyPress}
            />
          </TextField>
          {restaurants.length > 0 ? (
            <>
              <CarouselTitle>Na sua Área</CarouselTitle>
              <Carousel {...settings}>
                {restaurants.map((restaurant) => (
                  <Card
                    key={restaurant.place_id}
                    photo={restaurant.photos ? restaurant.photos[0].getUrl() : null}
                    title={restaurant.name}
                  />
                ))}
              </Carousel>
            </>
          ) : (
            <Loader />
          )}
        </Search>
        {restaurants.map((restaurant) => (
          <Restaurant
            key={restaurant.place_id}
            restaurant={restaurant}
            onClick={() => handleOpenModal(restaurant.place_id)}
          />
        ))}
      </Container>
      <Map query={query} placeId={placeId} />
      <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}>
        {restaurantSelected ? (
          <>
            <ModalTitle>{restaurantSelected.name}</ModalTitle>
            <ModalContent>{restaurantSelected.formatted_phone_number}</ModalContent>
            <ModalContent>{restaurantSelected.formatted_address}</ModalContent>
            <ModalContent>
              {restaurantSelected.opening_hours?.isOpen()
                ? 'Aberto agora :-)'
                : 'Fechado neste momento :-('}
            </ModalContent>
          </>
        ) : null}
      </Modal>
    </Wrapper>
  );
};
