/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaAward } from 'react-icons/fa';

import ProductModal from '../ProductModal';
import defaultImage from '../../../../assets/images/default.jpg';

import { formatCurrency } from '../../../../utils/global';
import { Container, Thumbnail, Promo } from './styles';

const ProductCard = ({ restaurantProduct, category }) => {
  const [modal, setModal] = useState(false);
  const [formattedPrice, setFormattedPrice] = useState({});

  const { id_restaurant_product, price, product, offers } = restaurantProduct;

  /**
   * Format price and promotional price
   */
  useEffect(() => {
    function formatPrice() {
      if (price && offers.length > 0) {
        const [{ promotional_price }] = offers;

        setFormattedPrice({
          price: formatCurrency(price),
          promotionalPrice: formatCurrency(promotional_price),
        });
      } else if (price) {
        setFormattedPrice({
          price: formatCurrency(price),
        });
      } else {
        setFormattedPrice({
          price: formatCurrency(0),
        });
      }
    }

    formatPrice();
  }, [price, offers]);

  const toggleModal = () => setModal(!modal);

  return (
    <Container
      key={id_restaurant_product}
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
              title={category}
            >
              <FaAward size="13" />
              <p>{'Promo ' + category}</p>
            </Promo>
          )}
        </div>
        <p className="description">
          {formattedPrice.promotionalPrice
            ? offers[0].description
            : product.description}
        </p>
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
        description={
          formattedPrice.promotionalPrice
            ? offers[0].description
            : product.description
        }
        price={
          formattedPrice.promotionalPrice ? offers[0].promotional_price : price
        }
      />
    </Container>
  );
};

ProductCard.propTypes = {
  restaurantProduct: PropTypes.object.isRequired,
  category: PropTypes.string.isRequired,
};

export default ProductCard;
