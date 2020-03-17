import React, { useState, useEffect } from 'react';
import { Container, Spinner } from 'reactstrap';

import SearchField from '../../components/SearchField';
import RestaurantCard from './components/RestaurantCard';

import api from '../../services/api';
const Home = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    setLoading(true);

    try {
      const req = await api.get('/restaurants');
      setRestaurants(req.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="home">
      <h2 className="mt-5 d-flex justify-content-center text-center">
        Bem-vindo ao Lista Rango
      </h2>
      <Container className="d-flex align-items-center justify-content-center mt-4">
        <div className="w-100 px-md-5 mx-md-5">
          <SearchField
            textLabel="Buscar estabelecimento"
            backgroundColor="#FBFBFB"
          />
        </div>
      </Container>
      <Container
        fluid
        className="d-flex align-items-center justify-content-center flex-wrap mt-5"
      >
        {loading ? (
          <Spinner size="lg" color="info" />
        ) : (
          restaurants.map(restaurant => (
            <RestaurantCard
              restaurant={restaurant}
              key={restaurant.id_restaurant}
            />
          ))
        )}
      </Container>
    </div>
  );
};

export default Home;
