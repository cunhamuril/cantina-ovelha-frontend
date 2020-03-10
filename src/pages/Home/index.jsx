import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import arrayChunk from "lodash.chunk";

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
      isOpen: true,
      thumbnail: RestaurantLogo
    },
    {
      key: 3,
      name: 'Nome do restaurante',
      address: 'Endereço do restaurante',
      isOpen: true,
      thumbnail: RestaurantLogo
    },
    {
      key: 4,
      name: 'Nome do restaurante',
      address: 'Endereço do restaurante',
      isOpen: false,
      thumbnail: RestaurantLogo
    },
    {
      key: 5,
      name: 'Nome do restaurante',
      address: 'Endereço do restaurante',
      isOpen: false,
      thumbnail: RestaurantLogo
    },
    {
      key: 6,
      name: 'Nome do restaurante',
      address: 'Endereço do restaurante',
      isOpen: true,
      thumbnail: RestaurantLogo
    },
    {
      key: 7,
      name: 'Nome do restaurante',
      address: 'Endereço do restaurante',
      isOpen: false,
      thumbnail: RestaurantLogo
    },
    {
      key: 8,
      name: 'Nome do restaurante',
      address: 'Endereço do restaurante',
      isOpen: false,
      thumbnail: RestaurantLogo
    },
    {
      key: 9,
      name: 'Nome do restaurante',
      address: 'Endereço do restaurante',
      isOpen: true,
      thumbnail: RestaurantLogo
    },
  ]

  const chukedData = arrayChunk(restaurants, 3)

  return (
    <div className='home'>
      <h2 className='mt-5 d-flex justify-content-center'>Bem-vindo ao Lista Rango</h2>
      <SearchField backgroundColor='#FBFBFB' textLabel='Buscar estabelecimento' />
      <Container fluid className='d-flex flex-column align-items-center mt-5'>
        {chukedData.map((row, rowIndex) => (
          <Row key={rowIndex}>
            {row.map(restaurant => (
              <Col sm='12' md='6' lg='4' key={restaurant.key}>
                <RestaurantCard restaurant={restaurant} />
              </Col>
            ))}
          </Row>
        ))}
      </Container>
    </div>
  )
};

export default Home;
