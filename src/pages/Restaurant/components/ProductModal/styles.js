import styled from 'styled-components';
import media from 'styled-media-query';

import {
  secondary,
  secondaryDark,
  darken,
  lightGray,
} from '../../../../theme/colors';

export const Thumbnail = styled.div`
  width: 93%;
  height: 260px;
  background-size: cover;
  background-position: center;

  ${media.lessThan('medium')`
    width: 100%;
    height: 196px;
  `}
`;

export const ProductContent = styled.div`
  .product-info {
    font-size: 16px;
    color: ${darken};
  }

  .product-price {
    text-align: end;
    color: ${secondary};
  }
`;

export const Counter = styled.div`
  /* Box Model */
  width: 125px;
  height: 50px;
  padding: 5px 20px;
  border-radius: 4px;
  border: solid 1px ${lightGray};

  /* Other */
  color: ${secondary};
  font-size: 22px;
  font-weight: 500;

  .counter-btn {
    cursor: pointer;
    font-size: 40px;
    font-weight: 300;
  }
`;

export const CloseBtn = styled.button`
  /* Display */
  position: absolute;
  transform: translate(775px, -25px);

  /* Box Model */
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 24px;
  box-shadow: 0px 2px 4px #00000029;

  /* Other */
  cursor: pointer;
  font-size: 25px;
  background-color: #fff;

  ${media.lessThan('medium')`
    transform: translate(475px, -25px);
  `}

  ${media.lessThan('small')`
    position: relative;
    transform: translate(0, 0);
    
    margin: 10px;
  `}
`;

export const AddBtn = styled.button`
  /* Box Model */
  width: 265px;
  height: 50px;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;

  /* Other */
  color: #fff;
  font-size: 22px;
  cursor: pointer;
  font-weight: 500;
  transition: all ease-out 0.2s;
  background-color: ${secondary};

  &:hover {
    background-color: ${secondaryDark};
  }
`;
