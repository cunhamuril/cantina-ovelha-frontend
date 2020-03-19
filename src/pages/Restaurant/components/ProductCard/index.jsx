import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaAward } from 'react-icons/fa';

import ProductModal from '../ProductModal';

import { Container, Thumbnail, Promo } from './styles';

const ProductCard = ({ product, category }) => {
  const [modal, setModal] = useState(false);
  const [formattedPrice, setFormattedPrice] = useState({});

  useEffect(() => {
    /**
     * Format price and promotional price
     */
    function formatPrice() {
      if (product.promotional_price) {
        setFormattedPrice({
          price: product.price
            .toFixed(2)
            .toString()
            .replace('.', ','),
          promotionalPrice: product.promotional_price
            .toFixed(2)
            .toString()
            .replace('.', ','),
        });
      } else {
        setFormattedPrice({
          price: product.price
            .toFixed(2)
            .toString()
            .replace('.', ','),
        });
      }
    }

    formatPrice();
  }, [product.price, product.promotional_price]);

  const toggleModal = () => setModal(!modal);

  return (
    <Container
      key={product.key}
      className="d-flex align-items-center"
      onClick={toggleModal}
    >
      <Thumbnail style={{ backgroundImage: `url(${product.thumbnail})` }} />
      <div className="p-3">
        <div className="d-flex justify-content-between">
          <h6 style={{ maxWidth: product.promotional_price ? 124 : 200 }}>
            {product.name}
          </h6>
          {product.promotional_price && (
            <Promo className="d-flex align-items-center justify-content-center">
              <FaAward size="13" className="icon" />
              <p className="m-0">{'Promo ' + category.name}</p>
            </Promo>
          )}
        </div>
        <p className="description">{product.description}</p>
        <div className="prices">
          <span className="price">
            {product.promotional_price
              ? formattedPrice.promotionalPrice
              : formattedPrice.price}
          </span>
          {product.promotional_price && (
            <small className="promotional-price ml-2 text-muted">
              <del>{formattedPrice.price}</del>
            </small>
          )}
        </div>
      </div>

      <ProductModal
        isOpen={modal}
        toggle={toggleModal}
        product={product}
        price={
          product.promotional_price ? product.promotional_price : product.price
        }
      />
    </Container>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  category: PropTypes.object.isRequired,
};

export default ProductCard;
