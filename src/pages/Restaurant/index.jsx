import React from 'react';
import { Container } from 'reactstrap';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import Header from './components/Header';
import SearchField from '../../components/SearchField';

import RestaurantLogo from '../../assets/images/restaurant-logo-md.png'; // TEMP

import { Main } from './styles';
import { lightGray, darken } from '../../theme/colors';
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
    thumbnail: RestaurantLogo,
    categories: [
      {
        key: 1,
        name: 'Almoço',
        products: [
          {
            key: 1,
            name: 'Nome do Prato',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
            price: 19.9,
            promotional_price: null,
          },
          {
            key: 2,
            name: 'Nome do Prato',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
            price: 19.9,
            promotional_price: null,
          },
          {
            key: 3,
            name: 'Nome do Prato',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
            price: 19.9,
            promotional_price: null,
          },
          {
            key: 4,
            name: 'Nome do Prato',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
            price: 19.9,
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
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
            price: 19.9,
            promotional_price: null,
          },
          {
            key: 2,
            name: 'Nome do Prato',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
            price: 19.9,
            promotional_price: null,
          },
          {
            key: 3,
            name: 'Nome do Prato',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
            price: 19.9,
            promotional_price: null,
          },
          {
            key: 4,
            name: 'Nome do Prato',
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
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
            price: 19.9,
            promotional_price: null,
          },
          {
            key: 2,
            name: 'Nome do Prato',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
            price: 19.9,
            promotional_price: null,
          },
          {
            key: 3,
            name: 'Nome do Prato',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
            price: 19.9,
            promotional_price: null,
          },
          {
            key: 4,
            name: 'Nome do Prato',
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
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
            price: 19.9,
            promotional_price: null,
          },
          {
            key: 2,
            name: 'Nome do Prato',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
            price: 19.9,
            promotional_price: null,
          },
          {
            key: 3,
            name: 'Nome do Prato',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
            price: 19.9,
            promotional_price: null,
          },
          {
            key: 4,
            name: 'Nome do Prato',
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
                <AccordionItem key={category.key} style={{ border: 'none' }}>
                  <AccordionItemHeading>
                    <AccordionItemButton
                      style={{
                        backgroundColor: '#FFF',
                        borderBottom: `solid 1px ${darken}`,
                        display: 'flex',
                        flexDirection: 'row-reverse',
                        justifyContent: 'space-between',
                      }}
                    >
                      <strong>{category.name}</strong>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel></AccordionItemPanel>
                </AccordionItem>
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
