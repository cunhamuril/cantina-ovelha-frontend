import React from 'react';
import PropTypes from 'prop-types';

import { Container, Thumbnail } from './styles';

const Header = ({ restaurant }) => (
  <Container className="d-flex align-items-center">
    <div style={{ maxWidth: 145, maxHeight: 145 }}>
      <Thumbnail style={{ backgroundImage: `url(${restaurant.logo})` }} />
    </div>
    <div className="m-3">
      <h3>{restaurant.name}</h3>
      <p className="mb-2">{restaurant.description}</p>
      <small>
        Segunda à Sexta: <strong>{restaurant.weekday}</strong> <br />
        Sábados: <strong>{restaurant.weekend}</strong> <br />
        Domingo e Feriados: <strong>{restaurant.holiday}</strong>
      </small>
    </div>
  </Container>
);

Header.propTypes = {
  restaurant: PropTypes.object.isRequired,
};

export default Header;
