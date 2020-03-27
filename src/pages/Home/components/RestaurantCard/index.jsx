/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import DefaultImage from '../../../../assets/images/default.jpg';

import { primary, primaryLight } from '../../../../theme/colors';
import { Card, Thumbnail, OpenInfo } from './styles';

const RestaurantCard = ({ restaurant }) => {
  const [formattedAddress, setFormattedAddress] = useState('');
  const [isRestaurantOpen, setIsRestaurantOpen] = useState(false);

  const { id_restaurant, name, address, picture, schedule } = restaurant;

  useEffect(() => {
    /**
     * Format address and isOpen data
     */
    function formatData() {
      if (address && address[0]) {
        const [{ number, street, district, city, state }] = address;
        setFormattedAddress(
          `${street}, ${number || 'S/N'}, ${district}, ${city}-${state}`
        );
      }

      if (schedule) {
        const result = schedule.map(item => item.isOpen).includes(true);

        setIsRestaurantOpen(result);
      }
    }

    formatData();
  }, [address, schedule]);

  return (
    <Link
      to={`/restaurants/${id_restaurant}`}
      style={{ textDecoration: 'none' }}
    >
      <Card className="d-flex mb-5 mx-4">
        <OpenInfo
          className="d-flex align-items-center justify-content-center"
          style={{
            backgroundColor: isRestaurantOpen ? primary : primaryLight,
          }}
        >
          <small>{isRestaurantOpen ? 'Aberto agora' : 'Fechado'}</small>
        </OpenInfo>
        <div style={{ maxWidth: 100, maxHeight: 100 }}>
          <Thumbnail
            style={{
              backgroundImage: `url(${picture ? picture.url : DefaultImage})`,
            }}
          />
        </div>
        <div className="d-flex flex-column justify-content-center mx-4 w-100">
          <h5 className="m-0" style={{ maxHeight: 50 }}>
            {name}
          </h5>
          <small
            className="restaurant-address text-muted"
            style={{ maxHeight: 20, whiteSpace: 'nowrap' }}
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
