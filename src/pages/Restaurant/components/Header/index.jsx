import React from 'react';
import PropTypes from 'prop-types'

import { Container } from './styles';

const Header = ({ restaurant }) => (
  <Container className='d-flex align-items-center'>
    <div style={{ maxWidth: 145, maxHeight: 145 }}>
      <img src={restaurant.thumbnail} alt="Logo" />
    </div>
    <div className='m-3'>
      <h3>{restaurant.name}</h3>
      <p>{restaurant.description}</p>
      <small>
        Segunda à Sexta: <strong>{restaurant.weekday}</strong> <br />
        Sábados: <strong>{restaurant.weekend}</strong> <br />
        Domingo e Feriados: <strong>{restaurant.holiday}</strong>
      </small>
    </div>
  </Container>
);

Header.propTypes = {
  restaurant: PropTypes.object.isRequired
}

export default Header;