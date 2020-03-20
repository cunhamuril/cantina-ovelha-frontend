import React, { useState, useEffect } from 'react';
import { Container, Spinner } from 'reactstrap';

import SearchField from '../../components/SearchField';
import RestaurantCard from './components/RestaurantCard';

import { darken } from '../../theme/colors';

import api from '../../services/api';
const Home = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    /**
     * Render all restaurants data
     */
    async function renderData() {
      setRestaurants(await loadData());
      setLoading(false);
    }

    renderData();
  }, []);

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
    <div className="home">
      <h2 className="mt-5 d-flex justify-content-center text-center">
        <a href="/" style={{ textDecoration: 'none', color: darken }}>
          Bem-vindo ao Lista Rango
        </a>
      </h2>
      <Container className="d-flex align-items-center justify-content-center mt-4">
        <div className="w-100 px-md-5 mx-md-5">
          <SearchField
            textLabel="Buscar estabelecimento"
            backgroundColor="#FBFBFB"
            onChange={handleSearch}
            onSubmit={handleSearch}
          />
        </div>
      </Container>
      <Container
        fluid
        className="d-flex align-items-center justify-content-center flex-wrap mt-5"
      >
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
      </Container>
    </div>
  );
};

export default Home;
