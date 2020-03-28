import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaAward } from 'react-icons/fa';

import ProductModal from '../ProductModal';
import defaultImage from '../../../../assets/images/default.jpg';

import { Container, Thumbnail, Promo } from './styles';

const ProductCard = ({ product, category }) => {
  const [modal, setModal] = useState(false);
  const [formattedPrice, setFormattedPrice] = useState({});

  useEffect(() => {
    /**
     * Format price and promotional price
     */
    function formatPrice() {
      if (product.price && product.promotional_price) {
        setFormattedPrice({
          price:
            'R$ ' +
            product.price
              .toFixed(2)
              .toString()
              .replace('.', ','),
          promotionalPrice:
            'R$ ' +
            product.promotional_price
              .toFixed(2)
              .toString()
              .replace('.', ','),
        });
      } else if (product.price) {
        setFormattedPrice({
          price:
            'R$ ' +
            product.price
              .toFixed(2)
              .toString()
              .replace('.', ','),
        });
      }
      // TEMP
      else {
        setFormattedPrice({
          price:
            'R$ ' +
            (9.99)
              .toFixed(2)
              .toString()
              .replace('.', ','),
          promotionalPrice:
            'R$ ' +
            (5.99)
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
      onClick={toggleModal}
      className="d-flex align-items-center"
      hasPromotionalPrice={formattedPrice.promotionalPrice}
    >
      <Thumbnail img={product.picture ? product.picture.url : defaultImage} />
      <div className="p-3">
        <div className="d-flex justify-content-between">
          <h6>{product.name}</h6>
          {formattedPrice.promotionalPrice && (
            <Promo
              className="d-flex align-items-center justify-content-center"
              title={category.description}
            >
              <FaAward size="13" />
              <p>{'Promo ' + category.description}</p>
            </Promo>
          )}
        </div>
        <p className="description">{product.description}</p>
        <div className="prices">
          <span className="price">
            {formattedPrice.promotionalPrice
              ? formattedPrice.promotionalPrice
              : formattedPrice.price}
          </span>
          {formattedPrice.promotionalPrice && (
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
          product.price
            ? formattedPrice.promotionalPrice
              ? formattedPrice.promotionalPrice
              : product.price
            : 5.99 // TEMP
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
