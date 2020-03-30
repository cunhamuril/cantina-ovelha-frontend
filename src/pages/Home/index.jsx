import React, { useState, useEffect } from 'react';
import { Container, Spinner } from 'reactstrap';

import SearchField from '../../components/SearchField';
import RestaurantCard from './components/RestaurantCard';

import { HomeContainer, CardsContainer } from './styles';

import api from '../../services/api';
const Home = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  /**
   * Render all restaurants data
   */
  useEffect(() => {
    async function renderData() {
      setRestaurants(await loadData());
    }

    renderData();
  }, []);

  /**
   * Interval: every 5 minutes a new request is made
   */
  useEffect(() => {
    const interval = setInterval(async () => {
      setRestaurants(await loadData());
    }, 1000 * 60 * 5);

    return () => clearInterval(interval);
  }, []);

  /**
   * every time search is empty, updates to show all restaurants
   */
  useEffect(() => {
    (async function() {
      if (searchValue === '') {
        setRestaurants(await loadData());
      }
    })();
  }, [searchValue]);

  /**
   * Load all restaurants data
   */
  async function loadData() {
    setLoading(true);

    try {
      const res = await api.get('/restaurants');
      return res.data;
    } catch (error) {
      return console.error(error);
    } finally {
      setLoading(false);
    }
  }

  /**
   * Load filtered restaurants data
   * @param {Event} e form event
   */
  async function handleSearch(e) {
    setSearchValue(e.target.value);
    e.preventDefault();

    const data = await loadData();

    if (searchValue === '') {
      setRestaurants(data);
    } else {
      const filteredRestaurants = data.filter(restaurant => {
        return restaurant.name.indexOf(searchValue) !== -1;
      });

      setRestaurants(filteredRestaurants);
    }
  }

  return (
    <HomeContainer>
      <h2 className="mt-5 d-flex justify-content-center text-center">
        <a href="/">Bem-vindo ao Lista Rango</a>
      </h2>
      <Container className="d-flex align-items-center justify-content-center mt-4 px-md-5">
        <div className="w-100 mx-md-5">
          <SearchField
            textLabel="Buscar estabelecimento"
            backgroundColor="#FBFBFB"
            onSearch={handleSearch}
          />
        </div>
      </Container>
      <CardsContainer className="d-flex align-items-center justify-content-center flex-wrap mt-5">
        {loading ? (
          <Spinner size="lg" color="info" />
        ) : restaurants && restaurants.length > 0 ? (
          restaurants.map(restaurant => (
            <RestaurantCard
              restaurant={restaurant}
              key={restaurant.id_restaurant}
            />
          ))
        ) : (
          <h4 className="text-muted mt-5">
            {searchValue.length > 0
              ? 'Nenhum item corresponde a pesquisa'
              : 'Não há restaurantes cadastrados'}
          </h4>
        )}
      </CardsContainer>
    </HomeContainer>
  );
};

export default Home;
