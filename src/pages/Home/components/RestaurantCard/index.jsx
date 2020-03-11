import React from 'react';
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

import { Card, OpenInfo } from './styles';

const RestaurantCard = ({ restaurant }) => {
  return (
    <Link to='/restaurants' style={{ textDecoration: 'none' }}>
      <Card className='d-flex mb-5 mx-4'>
        <OpenInfo
          className='d-flex align-items-center justify-content-center'
          style={{ backgroundColor: restaurant.isOpen ? '#2B0D61' : '#B5ABD4' }}
        >
          <small>{restaurant.isOpen ? 'Aberto agora' : 'Fechado'}</small>
        </OpenInfo>
        <div style={{ maxWidth: 100, maxHeight: 100 }}>
          <img src={restaurant.thumbnail} alt='logo' />
        </div>
        <div className='d-flex flex-column justify-content-center mx-4 w-100'>
          <h5 className='m-0'>{restaurant.name}</h5>
          <small className="text-muted">{restaurant.address}</small>
        </div>
      </Card>
    </Link>
  )
};

RestaurantCard.propTypes = {
  restaurant: PropTypes.object.isRequired,
}

export default RestaurantCard;
