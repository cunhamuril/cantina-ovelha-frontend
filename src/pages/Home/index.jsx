import React, { useState, useEffect } from 'react';
import { Container, Spinner } from 'reactstrap';

import SearchField from '../../components/SearchField';
import RestaurantCard from './components/RestaurantCard';

import { HomeContainer, CardsContainer } from './styles';

import api from '../../services/api';
const Home = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  /**
   * Render all restaurants data
   */
  useEffect(() => {
    async function renderData() {
      setRestaurants(await loadData());
      setLoading(false);
    }

    renderData();
  }, []);

  /**
   * Interval: every 15 minutes a new request is made
   */
  useEffect(() => {
    const interval = setInterval(async () => {
      setRestaurants(await loadData());
    }, 1000 * 60 * 15);

    return () => clearInterval(interval);
  }, []);

  /**
   * every time search is empty updates to show all restaurants
   */
  useEffect(() => {
    (async function() {
      if (search === '') {
        setRestaurants(await loadData());
      }
    })();
  }, [search]);

  /**
   * Load all restaurants data
   */
  async function loadData() {
    try {
      const res = await api.get('/restaurants');
      return res.data;
    } catch (error) {
      return console.error(error);
    }
  }

  /**
   * Load filtered restaurants data
   * @param {Event} e form event
   */
  async function handleSearch(e) {
    setSearch(e.target.value);
    e.preventDefault();

    const data = await loadData();

    if (search === '') {
      setRestaurants(data);
    } else {
      const filteredRestaurants = data.filter(restaurant => {
        return restaurant.name.indexOf(search) !== -1;
      });

      setRestaurants(filteredRestaurants);
    }
  }

  return (
    <HomeContainer>
      <a className="mt-5 d-flex justify-content-center text-center" href="/">
        <h2>Bem-vindo ao Lista Rango</h2>
      </a>
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
            Nenhum item corresponde a pesquisa
          </h4>
        )}
      </CardsContainer>
    </HomeContainer>
  );
};

export default Home;
