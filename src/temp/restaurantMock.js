import DishThumbnail from '../assets/images/dish.png';
import RestaurantLogo from '../assets/images/restaurant-logo-md.png';

export default {
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
