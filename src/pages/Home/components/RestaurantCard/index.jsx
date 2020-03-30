/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import DefaultImage from '../../../../assets/images/default.jpg';

// import { primary, primaryLight } from '../../../../theme/colors';
import { Card, Thumbnail, OpenInfo } from './styles';

const RestaurantCard = ({ restaurant }) => {
  const [formattedAddress, setFormattedAddress] = useState('');
  const [isRestaurantOpen, setIsRestaurantOpen] = useState(false);

  const { id_restaurant, name, addresses, picture, schedules } = restaurant;

  useEffect(() => {
    /**
     * Format address and isOpen data
     */
    function formatData() {
      if (addresses && addresses[0]) {
        const [{ number, street, district, city, state }] = addresses;
        setFormattedAddress(
          `${street}, ${number || 'S/N'}, ${district}, ${city}-${state}`
        );
      }

      if (schedules) {
        const result = schedules.map(item => item.isOpen).includes(true);

        setIsRestaurantOpen(result);
      }
    }

    formatData();
  }, [addresses, schedules]);

  return (
    <Link
      to={`/restaurants/${id_restaurant}`}
      style={{ textDecoration: 'none' }}
    >
      <Card className="d-flex mb-5 mx-4">
        <OpenInfo
          className="d-flex align-items-center justify-content-center"
          isOpen={isRestaurantOpen}
        >
          <small>{isRestaurantOpen ? 'Aberto agora' : 'Fechado'}</small>
        </OpenInfo>
        <Thumbnail url={picture ? picture.url : DefaultImage} />
        <div className="d-flex flex-column justify-content-center mx-4">
          <h5 className="m-0">{name}</h5>
          <small
            className="restaurant-address text-muted"
            title={formattedAddress}
          >
            {formattedAddress}
          </small>
        </div>
      </Card>
    </Link>
  );
};

RestaurantCard.propTypes = {
  restaurant: PropTypes.object.isRequired,
};

export default RestaurantCard;
