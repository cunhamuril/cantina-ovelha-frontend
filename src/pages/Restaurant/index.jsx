import React from 'react';
import { Container } from 'reactstrap';

import SearchField from '../../components/SearchField'
import Header from './components/Header'

import RestaurantLogo from '../../assets/images/restaurant-logo-md.png' // TEMP

import { lightGray } from "../../theme/colors";
import { Content } from './styles';

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
    <Container fluid className='mt-4'>
      <div className='mx-lg-5'>
        <Header restaurant={restaurant} />
        <Content className='mt-5'>
          <div className='content mr-md-3'>
            <SearchField backgroundColor={lightGray} textLabel='Buscar no cardápio' />
          </div>
          <div className='menu' />
        </Content>
      </div>
    </Container>
  )
};

export default Restaurant;
