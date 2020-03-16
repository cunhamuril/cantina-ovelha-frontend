import React from 'react';
import { Container } from 'reactstrap';

import SearchField from '../../components/SearchField';
import RestaurantCard from './components/RestaurantCard';

import RestaurantLogo from '../../assets/images/restaurant-logo.png'; // TEMP

const Home = () => {
  /**
   * TEMP
   */
  const restaurants = [
    {
      key: 1,
      name: 'Nome do restaurante Nome do restaurante',
      address:
        'Endereço do restaurante Endereço do restaurante Endereço do restaurante Endereço do restaurante',
      isOpen: true,
      logo: RestaurantLogo,
    },
    {
      key: 2,
      name: 'Nome do restaurante',
      address: 'Endereço do restaurante',
      isOpen: true,
      logo: RestaurantLogo,
    },
    {
      key: 3,
      name: 'Nome do restaurante',
      address: 'Endereço do restaurante',
      isOpen: true,
      logo: RestaurantLogo,
    },
    {
      key: 4,
      name: 'Nome do restaurante',
      address: 'Endereço do restaurante',
      isOpen: false,
      logo: RestaurantLogo,
    },
    {
      key: 5,
      name: 'Nome do restaurante',
      address: 'Endereço do restaurante',
      isOpen: false,
      logo: RestaurantLogo,
    },
    {
      key: 6,
      name: 'Nome do restaurante',
      address: 'Endereço do restaurante',
      isOpen: true,
      logo: RestaurantLogo,
    },
    {
      key: 7,
      name: 'Nome do restaurante',
      address: 'Endereço do restaurante',
      isOpen: false,
      logo: RestaurantLogo,
    },
    {
      key: 8,
      name: 'Nome do restaurante',
      address: 'Endereço do restaurante',
      isOpen: false,
      logo: RestaurantLogo,
    },
    {
      key: 9,
      name: 'Nome do restaurante',
      address: 'Endereço do restaurante',
      isOpen: true,
      logo: RestaurantLogo,
    },
  ];

  return (
    <div className="home">
      <h2 className="mt-5 d-flex justify-content-center text-center">
        Bem-vindo ao Lista Rango
      </h2>
      <Container className="d-flex align-items-center justify-content-center mt-4">
        <div className="w-100 px-md-5 mx-md-5">
          <SearchField
            textLabel="Buscar estabelecimento"
            backgroundColor="#FBFBFB"
          />
        </div>
      </Container>
      <Container
        fluid
        className="d-flex align-items-center justify-content-center flex-wrap mt-5"
      >
        {restaurants.map(restaurant => (
          <RestaurantCard restaurant={restaurant} key={restaurant.key} />
        ))}
      </Container>
    </div>
  );
};

export default Home;
