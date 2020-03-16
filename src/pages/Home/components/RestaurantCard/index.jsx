import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import DefaultImage from '../../../../assets/images/default.jpg';

import { primary, primaryLight } from '../../../../theme/colors';
import { Card, Thumbnail, OpenInfo } from './styles';

const RestaurantCard = ({ restaurant }) => {
  return (
    <Link to="/restaurants" style={{ textDecoration: 'none' }}>
      <Card className="d-flex mb-5 mx-4">
        <OpenInfo
          className="d-flex align-items-center justify-content-center"
          style={{
            backgroundColor: restaurant.schedule[0].isOpen
              ? primary
              : primaryLight,
          }}
        >
          <small>
            {restaurant.schedule[0].isOpen ? 'Aberto agora' : 'Fechado'}
          </small>
        </OpenInfo>
        <div style={{ maxWidth: 100, maxHeight: 100 }}>
          <Thumbnail
            style={{
              backgroundImage: `url(${
                restaurant.logo ? restaurant.logo : DefaultImage
              })`,
            }}
          />
        </div>
        <div className="d-flex flex-column justify-content-center mx-4 w-100">
          <h5 className="m-0" style={{ maxHeight: 50 }}>
            {restaurant.name}
          </h5>
          <small
            className="restaurant-address text-muted"
            style={{ maxHeight: 20, whiteSpace: 'nowrap' }}
          >
            {restaurant.address}
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
