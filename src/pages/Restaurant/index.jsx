import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
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

const Restaurant = ({ match }) => {
  const [restaurant, setRestaurant] = useState({});
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const { id } = match.params;

  const history = useHistory();

  /**
   * Scroll to top when load page
   */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    loadRestaurantData();

    // eslint-disable-next-line
  }, []);

  /**
   * Interval: every 5 minutes a new request is made
   */
  useEffect(() => {
    const interval = setInterval(async () => {
      loadRestaurantData();
    }, 1000 * 60 * 5);

    return () => clearInterval(interval);

    // eslint-disable-next-line
  }, []);

  /**
   * every time search is empty, updates to show all products
   */
  useEffect(() => {
    (async function() {
      if (searchValue === '') {
        onFilter('remove');
      }
    })();
  }, [searchValue]);

  /**
   * Load restaurant data
   */
  async function loadRestaurantData() {
    setLoading(true);

    try {
      const res = await api.get(`/restaurants/${id}`);

      if (!res.data) {
        history.push('/');
      }

      const { products } = res.data;

      const arr = products.map(item => item.product.category.description);
      const categories = arr.filter(
        (item, index) => arr.indexOf(item) === index
      );

      setRestaurant(res.data);
      setCategories(categories);
      setProducts(products);
    } catch (error) {
      return console.error(error);
    } finally {
      setLoading(false);
    }
  }

  /**
   * Load filtered products data
   * @param {Event} e form event
   */
  async function handleSearch(e) {
    setSearchValue(e.target.value);
    e.preventDefault();

    if (searchValue && searchValue.length > 0) {
      const filtered = products.filter(item => {
        return item.product.name.indexOf(searchValue) !== -1;
      });

      onFilter('add', filtered);
    } else {
      onFilter('remove');
    }
  }

  /**
   * Behavior during the filter
   * @param {String} type type of function
   * @param {Array} filteredData filtered data on search
   */
  function onFilter(type, filteredData) {
    if (type !== 'add' && type !== 'remove') {
      return console.error('Type should be equal "add" or "remove"');
    }

    if (type === 'add') {
      setIsSearching(true);
      setFilteredProducts(filteredData);
    }

    if (type === 'remove') {
      setIsSearching(false);
      setFilteredProducts([]);
    }
  }

  return (
    <Container fluid className="mt-4">
      <BackButton />
      {loading ? (
        <center>
          <Spinner className="mt-5" size="lg" color="info" />
        </center>
      ) : (
        <div className="mx-md-5">
          <RestaurantHeader restaurant={restaurant} />

          <Main className="mt-5">
            <div className="content">
              {categories.length > 0 && (
                <SearchField
                  backgroundColor={lightGray}
                  textLabel="Buscar no cardápio"
                  onSearch={handleSearch}
                />
              )}

              {isSearching ? (
                filteredProducts && filteredProducts.length > 0 ? (
                  <div className="d-flex align-items-center justify-content-center flex-wrap mt-5">
                    {filteredProducts.map(item => (
                      <ProductCard
                        key={item.id_restaurant_product}
                        category={item.product.category.description}
                        restaurantProduct={item}
                      />
                    ))}
                  </div>
                ) : (
                  <h4 className="text-muted mt-5 text-center">
                    Nenhum produto corresponde a pesquisa
                  </h4>
                )
              ) : (
                <Accordion
                  className="mt-5"
                  allowMultipleExpanded={true}
                  allowZeroExpanded={true}
                >
                  {categories.length > 0 ? (
                    categories.map((category, index) => (
                      <CategoryAccordionItem key={index} category={category}>
                        {products
                          .filter(
                            menu =>
                              menu.product.category.description === category
                          )
                          .map((item, index) => (
                            <ProductCard
                              key={index}
                              restaurantProduct={item}
                              category={category}
                            />
                          ))}
                      </CategoryAccordionItem>
                    ))
                  ) : (
                    <h4 className="text-muted mt-5 text-center">
                      Nenhum produto cadastrado
                    </h4>
                  )}
                </Accordion>
              )}
            </div>
            <div className="ads" />
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
