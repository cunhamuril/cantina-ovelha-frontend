import React from 'react';
import { Container } from "reactstrap";

import Header from './components/Header'

import RestaurantLogo from '../../assets/images/restaurant-logo-md.png' // TEMP

const Restaurant = () => {
  /**
   * TEMP
   */
  const restaurant = {
    key: 1,
    name: 'Nome do Restaurante',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    weekday: '11:30 às 15:00',
    weekend: '11:30 às 22:00',
    holiday: '11:30 às 15:00',
    thumbnail: RestaurantLogo
  }

  return (
    <Container fluid className='mx-lg-5 mt-4 mb-3'>
      <Header restaurant={restaurant} />
    </Container>
  )
};

export default Restaurant;
