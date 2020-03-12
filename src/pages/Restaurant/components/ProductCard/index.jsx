import React from 'react';
import PropTypes from 'prop-types';
import { FaAward } from 'react-icons/fa';

import { Container, Promo } from './styles';

const ProductCard = ({ product, category }) => (
  <Container
    key={product.key}
    className="d-flex align-items-center justify-content-center m-3"
  >
    <div style={{ maxWidth: 115, maxHeight: 115 }}>
      <img src={product.thumbnail} alt="Logo" />
    </div>
    <div className="p-3">
      <div className="d-flex justify-content-between">
        <h6>{product.name}</h6>
        {product.promotional_price && (
          <Promo className="d-flex align-items-center justify-content-center">
            <span>
              <FaAward size="13" className="icon" />
              {'Promo ' + category.name}
            </span>
          </Promo>
        )}
      </div>
      <p className="description">{product.description}</p>
      <div className="prices">
        <span className="price">{`R$ ${
          product.promotional_price
            ? product.promotional_price.toFixed(2)
            : product.price.toFixed(2)
        }`}</span>
        {product.promotional_price && (
          <small className="promotional-price ml-2 text-muted">
            {`R$ ${product.price.toFixed(2)}`}
          </small>
        )}
      </div>
    </div>
  </Container>
);

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  category: PropTypes.object.isRequired,
};

export default ProductCard;
