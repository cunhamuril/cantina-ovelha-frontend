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
    <div className="restaurants">
      <Container fluid className='mx-5 mt-4'>
        <Header restaurant={restaurant} />
      </Container>
    </div>
  )
};

export default Restaurant;
