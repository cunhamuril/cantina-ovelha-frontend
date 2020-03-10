import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import SearchField from '../../components/SearchField'
import RestaurantCard from './components/RestaurantCard'

import RestaurantLogo from '../../assets/images/restaurant-logo.png' // TEMP

const Home = () => {
  /**
   * TEMP
   */
  const restaurants = [
    {
      key: 1,
      name: 'Nome do restaurante',
      address: 'Endereço do restaurante',
      isOpen: true,
      thumbnail: RestaurantLogo
    },
    {
      key: 2,
      name: 'Nome do restaurante',
      address: 'Endereço do restaurante',
      isOpen: false,
      thumbnail: RestaurantLogo
    },
    {
      key: 3,
      name: 'Nome do restaurante',
      address: 'Endereço do restaurante',
      isOpen: true,
      thumbnail: RestaurantLogo
    }
  ]

  return (
    <div className='home'>
      <h2 className='mt-5 d-flex justify-content-center'>Bem-vindo ao Lista Rango</h2>
      <SearchField backgroundColor='#FBFBFB' textLabel='Buscar estabelecimento' />
      <Container fluid className='d-flex align-items-center justify-content-center mt-5'>
        <Row>
          {restaurants.map(item => (
            <Col sm='12' md='6' lg='4' key={item.key}>
              <RestaurantCard restaurant={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
};

export default Home;
