import React from 'react';
import { Container } from 'reactstrap';
import { Accordion } from 'react-accessible-accordion';

import Header from './components/Header';
import ProductCard from './components/ProductCard';
import SearchField from '../../components/SearchField';
import CategoryAccordionItem from './components/CategoryAccordionItem';

/**
 * TEMP
 */
import DishThumbnail from '../../assets/images/dish.png';
import RestaurantLogo from '../../assets/images/restaurant-logo-md.png';

import { Main } from './styles';
import { lightGray } from '../../theme/colors';
import 'react-accessible-accordion/dist/fancy-example.css';

const Restaurant = () => {
  /**
   * TEMP
   */
  const restaurant = {
    name: 'Nome do Restaurante',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    weekday: '11:30 às 15:00',
    weekend: '11:30 às 22:00',
    holiday: '11:30 às 15:00',
    logo: RestaurantLogo,
    categories: [
      {
        key: 1,
        name: 'Almoço',
        products: [
          {
            key: 1,
            name: 'Nome do Prato',
            thumbnail: DishThumbnail,
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
            price: 19.9,
            promotional_price: 10,
          },
          {
            key: 2,
            name: 'Nome do Prato',
            thumbnail: DishThumbnail,
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
            price: 19.9,
            promotional_price: null,
          },
          {
            key: 3,
            name: 'Nome do Prato',
            thumbnail: DishThumbnail,
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
            price: 19.9,
            promotional_price: null,
          },
          {
            key: 4,
            name: 'Nome do Prato',
            thumbnail: DishThumbnail,
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
            price: 25.99,
            promotional_price: 19.9,
          },
        ],
      },
      {
        key: 2,
        name: 'Bebidas',
        products: [
          {
            key: 1,
            name: 'Nome do Prato',
            thumbnail: DishThumbnail,
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
            price: 19.9,
            promotional_price: null,
          },
          {
            key: 2,
            name: 'Nome do Prato',
            thumbnail: DishThumbnail,
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
            price: 19.9,
            promotional_price: 11.22,
          },
          {
            key: 3,
            name: 'Nome do Prato',
            thumbnail: DishThumbnail,
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
            price: 19.9,
            promotional_price: null,
          },
          {
            key: 4,
            name: 'Nome do Prato',
            thumbnail: DishThumbnail,
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
            price: 19.9,
            promotional_price: 19.9,
          },
        ],
      },
      {
        key: 3,
        name: 'Sobremesas',
        products: [
          {
            key: 1,
            name: 'Nome do Prato',
            thumbnail: DishThumbnail,
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
            price: 19.9,
            promotional_price: null,
          },
          {
            key: 2,
            name: 'Nome do Prato',
            thumbnail: DishThumbnail,
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
            price: 19.9,
            promotional_price: null,
          },
          {
            key: 3,
            name: 'Nome do Prato',
            thumbnail: DishThumbnail,
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
            price: 19.9,
            promotional_price: null,
          },
          {
            key: 4,
            name: 'Nome do Prato',
            thumbnail: DishThumbnail,
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
            price: 19.9,
            promotional_price: 19.9,
          },
        ],
      },
      {
        key: 4,
        name: 'Acompanhamentos',
        products: [
          {
            key: 1,
            name: 'Nome do Prato',
            thumbnail: DishThumbnail,
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
            price: 19.9,
            promotional_price: null,
          },
          {
            key: 2,
            name: 'Nome do Prato',
            thumbnail: DishThumbnail,
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
            price: 19.9,
            promotional_price: null,
          },
          {
            key: 3,
            name: 'Nome do Prato',
            thumbnail: DishThumbnail,
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
            price: 19.9,
            promotional_price: null,
          },
          {
            key: 4,
            name: 'Nome do Prato',
            thumbnail: DishThumbnail,
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
            price: 19.9,
            promotional_price: 19.9,
          },
        ],
      },
    ],
  };

  return (
    <Container fluid className="mt-4">
      <div className="mx-md-5">
        <Header restaurant={restaurant} />

        <Main className="mt-5">
          <div className="content mr-md-5">
            <SearchField
              backgroundColor={lightGray}
              textLabel="Buscar no cardápio"
            />

            <Accordion
              className="mt-5"
              allowMultipleExpanded={true}
              allowZeroExpanded={true}
            >
              {restaurant.categories.map(category => (
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
    </Container>
  );
};

export default Restaurant;
