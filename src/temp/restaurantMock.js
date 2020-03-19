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
          name: 'Macarrão',
          thumbnail:
            'https://i0.statig.com.br/bancodeimagens/69/b2/my/69b2mydwu808ftj2k95ehggwd.jpg',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
          price: 19.9,
          promotional_price: 14.99,
        },
        {
          key: 2,
          name: 'Salada',
          thumbnail:
            'https://www.receitasnestle.com.br/images/default-source/recipes/salada-de-escarola_alta.jpg',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
          price: 19.9,
          promotional_price: null,
        },
        {
          key: 3,
          name: 'Panqueca',
          thumbnail: 'https://i.ytimg.com/vi/hBGqcogtJ1w/maxresdefault.jpg',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
          price: 19.9,
          promotional_price: null,
        },
        {
          key: 4,
          name: 'Arroz e Feijão',
          thumbnail:
            'https://imirante.com/oestadoma/imagens/2018/07/12/1531409593-937217280-747x429.jpg',
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
          name: 'Coca-cola',
          thumbnail:
            'https://f.i.uol.com.br/fotografia/2018/08/21/15348230475b7b8a8778a2e_1534823047_3x2_rt.jpg',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
          price: 19.9,
          promotional_price: null,
        },
        {
          key: 2,
          name: 'Suco de Laranja',
          thumbnail:
            'https://img.elo7.com.br/product/zoom/262F374/adesivo-parede-decoracao-suco-de-laranja-fruta-lanchonete-adesivo-decorativo.jpg',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
          price: 19.9,
          promotional_price: 11.22,
        },
        {
          key: 3,
          name: 'Cerveja',
          thumbnail:
            'https://certificadocursosonline.com/wp-content/uploads/2018/07/curso-de-cerveja-artesanal-1280x720.jpg',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
          price: 19.9,
          promotional_price: null,
        },
        {
          key: 4,
          name: 'Café',
          thumbnail:
            'https://blog.chefsclub.com.br/wp-content/uploads/2019/08/historia_do_cafe-968x660.jpg',
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
          name: 'Bolo de Chocolate',
          thumbnail:
            'https://www.receitasnestle.com.br/images/default-source/recipes/bolo-peteleco_alta.jpg',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
          price: 19.9,
          promotional_price: null,
        },
        {
          key: 2,
          name: 'Pudim',
          thumbnail:
            'https://www.receitasnestle.com.br/images/default-source/recipes/pudim-de-coco_altaf260161f83b963b0a6c0ff0000205b53.jpg',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
          price: 19.9,
          promotional_price: null,
        },
        {
          key: 3,
          name: 'Mousse de Maracujá',
          thumbnail:
            'https://receitasdepai.com.br/wp-content/uploads/2020/01/Mousse-de-maracuj%C3%A1_ReceitasDePai-1-740x400.jpg',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
          price: 19.9,
          promotional_price: null,
        },
        {
          key: 4,
          name: 'Pavê',
          thumbnail:
            'https://comercialesperanca.net.br/wp-content/uploads/2018/12/pave.png',
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
          name: 'Batata Rústica',
          thumbnail:
            'https://www.dicasdemulher.com.br/wp-content/uploads/2018/01/batata-rustica-3.jpg',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
          price: 19.9,
          promotional_price: null,
        },
        {
          key: 2,
          name: 'Salada de Maionese',
          thumbnail:
            'https://www.receitasnestle.com.br/images/default-source/recipes/receita_04_salada-de--maionese--de-ervas07bf861f83b963b0a6c0ff0000205b53.jpg',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
          price: 19.9,
          promotional_price: null,
        },
        {
          key: 3,
          name: 'Purê de Batata',
          thumbnail: 'https://cdn.ocp.news/2020/02/pure-de-batata.png',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
          price: 19.9,
          promotional_price: null,
        },
        {
          key: 4,
          name: 'Farofa',
          thumbnail:
            'https://www.receitasnestle.com.br/images/default-source/recipes/farofa-de-lingui%C3%A7a_alta.jpg',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
          price: 19.9,
          promotional_price: 19.9,
        },
      ],
    },
  ],
};
