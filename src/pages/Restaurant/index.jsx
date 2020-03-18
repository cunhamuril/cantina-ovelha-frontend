import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Container, Spinner } from 'reactstrap';
import { Accordion } from 'react-accessible-accordion';

import BackButton from '../../components/BackButton';
import SearchField from '../../components/SearchField';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import CategoryAccordionItem from './components/CategoryAccordionItem';

import api from '../../services/api';

import { Main } from './styles';
import { lightGray } from '../../theme/colors';
import 'react-accessible-accordion/dist/fancy-example.css';

import RestaurantMock from '../../temp/restaurantMock'; // TEMP

const Restaurant = ({ match }) => {
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [restaurant, setRestaurant] = useState({});

  const { id } = match.params;

  useEffect(() => {
    async function loadData() {
      try {
        const res = await api.get(`/restaurants/${id}`);

        if (!res.data) {
          return setNotFound(true);
        }

        setRestaurant(res.data);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    }

    loadData();
  }, [id]);

  /**
   * Scroll to top of page
   */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function handleSearch() {}

  return notFound ? (
    <Redirect to="/" />
  ) : (
    <Container fluid className="mt-4">
      <Container fluid>
        <BackButton />
      </Container>
      {loading ? (
        <center>
          <Spinner size="lg" color="info" />
        </center>
      ) : (
        <div className="mx-md-5">
          <Header restaurant={restaurant} />

          <Main className="mt-5">
            <div className="content mr-md-5">
              <SearchField
                backgroundColor={lightGray}
                textLabel="Buscar no cardápio"
                onChange={handleSearch}
                onSubmit={handleSearch}
              />

              <Accordion
                className="mt-5"
                allowMultipleExpanded={true}
                allowZeroExpanded={true}
              >
                {RestaurantMock.categories.map(category => (
                  <CategoryAccordionItem key={category.key} category={category}>
                    {category.products.map(product => (
                      <ProductCard
                        category={category}
                        product={product}
                        key={product.key}
                      />
                    ))}
                  </CategoryAccordionItem>
                ))}
              </Accordion>
            </div>
            <div className="menu" />
          </Main>
        </div>
      )}
    </Container>
  );
};

Restaurant.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
};

export default Restaurant;
