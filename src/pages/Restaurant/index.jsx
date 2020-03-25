import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Container, Spinner } from 'reactstrap';
import { Accordion } from 'react-accessible-accordion';

import BackButton from '../../components/BackButton';
import SearchField from '../../components/SearchField';
import RestaurantHeader from './components/RestaurantHeader';
import ProductCard from './components/ProductCard';
import CategoryAccordionItem from './components/CategoryAccordionItem';

import api from '../../services/api';

import { Main } from './styles';
import { lightGray } from '../../theme/colors';
import 'react-accessible-accordion/dist/fancy-example.css';

// TEMP
// import RestaurantMock from '../../temp/restaurantMock';

const Restaurant = ({ match }) => {
  const [pageNotFound, setPageNotFound] = useState(false);
  const [restaurant, setRestaurant] = useState({});
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchValue, setSearchValue] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const { id } = match.params;

  useEffect(() => {
    async function loadRestaurantData() {
      try {
        const res = await api.get(`/restaurants/${id}`);

        if (!res.data) {
          return setPageNotFound(true);
        }

        setRestaurant(res.data);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    }

    loadRestaurantData();
  }, [id]);

  useEffect(() => {
    async function loadCategoriesData() {
      try {
        const res = await api.get('/categories');
        if (res.data) setCategories(res.data);
      } catch (error) {
        console.error(error);
      }
    }

    loadCategoriesData();
  }, []);

  /**
   * Scroll to top of page when load this component
   */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  async function handleSearch(e) {
    setSearchValue(e.target.value);
    e.preventDefault();

    const res = await api.get('/products');

    if (searchValue && searchValue.length > 0) {
      const filtered = res.data.filter(product => {
        return product.name.indexOf(searchValue) !== -1;
      });

      setIsSearching(true);
      setFilteredProducts(filtered);
    } else {
      setIsSearching(false);
      setFilteredProducts([]);
    }
  }

  return pageNotFound ? (
    <Redirect to="/" />
  ) : (
    <Container fluid className="mt-4">
      <Container fluid>
        <BackButton />
      </Container>
      {loading ? (
        <center>
          <Spinner className="mt-5" size="lg" color="info" />
        </center>
      ) : (
        <div className="mx-md-5">
          <RestaurantHeader restaurant={restaurant} />

          <Main className="mt-5">
            <div className="content mr-md-5">
              <SearchField
                backgroundColor={lightGray}
                textLabel="Buscar no cardápio"
                onSearch={handleSearch}
              />

              {isSearching ? (
                filteredProducts && filteredProducts.length > 0 ? (
                  <div className="d-flex align-items-center justify-content-center flex-wrap mt-5">
                    {filteredProducts.map(product => (
                      <ProductCard
                        key={product.id_product}
                        category={product.category}
                        product={product}
                      />
                    ))}
                  </div>
                ) : (
                  <h4 className="text-muted mt-5 text-center">
                    Nenhum item corresponde a pesquisa
                  </h4>
                )
              ) : (
                <Accordion
                  className="mt-5"
                  allowMultipleExpanded={true}
                  allowZeroExpanded={true}
                >
                  {categories.map(category => (
                    <CategoryAccordionItem
                      key={category.id_category}
                      category={category}
                    >
                      {category.product.map(product => (
                        <ProductCard
                          key={product.id_product}
                          category={category}
                          product={product}
                        />
                      ))}
                    </CategoryAccordionItem>
                  ))}
                </Accordion>
              )}
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
