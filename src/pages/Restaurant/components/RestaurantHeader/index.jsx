import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import defaultImage from '../../../../assets/images/default.jpg';

import { Container, Thumbnail } from './styles';

const RestaurantHeader = ({ restaurant }) => {
  const [formattedTime, setFormattedTime] = useState('');
  const [formattedAddress, setFormattedAddress] = useState('Sem endereço');
  const [logo, setLogo] = useState(defaultImage);

  const { name, picture, address, schedule } = restaurant;

  useEffect(() => {
    /**
     * Format picture, address and schedule data
     */
    function formatData() {
      if (picture) {
        setLogo(picture.url);
      }

      if (address[0]) {
        const { number, street, district, city, state } = address[0];
        setFormattedAddress(
          `${street}, ${number || 'S/N'}, ${district}, ${city}-${state}`
        );
      }

      if (schedule[0]) {
        const { from, to } = schedule[0];

        setFormattedTime(`${from} às ${to}`);
      }
    }

    formatData();
  }, [address, picture, schedule]);

  return (
    <Container className="d-flex align-items-center">
      <div style={{ maxWidth: 145, maxHeight: 145 }}>
        <Thumbnail style={{ backgroundImage: `url(${logo})` }} />
      </div>
      <div className="m-3">
        <h3>{name}</h3>
        <p className="mb-2">{formattedAddress}</p>
        <small>
          Segunda à Sexta: <strong>{formattedTime}</strong> <br />
          Sábados: <strong>{formattedTime}</strong> <br />
          Domingo e Feriados: <strong>{formattedTime}</strong>
        </small>
      </div>
    </Container>
  );
};

RestaurantHeader.propTypes = {
  restaurant: PropTypes.object.isRequired,
};

export default RestaurantHeader;
