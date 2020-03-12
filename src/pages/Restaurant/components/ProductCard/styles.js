import styled from 'styled-components';

import { darken, secondary, primary } from '../../../../theme/colors';

export const Container = styled.div`
  /* Box Model */
  max-width: 377px;
  max-height: 115px;

  /* Other */
  color: ${darken};
  box-shadow: 0px 4px 8px #00000029;

  .description {
    font-size: 12px;
    line-height: 14px;
  }

  .price {
    font-weight: 500;
    color: ${secondary};
  }

  .promotional-price {
    text-decoration: line-through;
  }
`;

export const Promo = styled.div`
  /* Box Model */
  width: 103px;
  height: 21px;
  border-radius: 15px;

  /* Other */
  color: #fff;
  font-size: 8px;
  font-weight: 700;
  line-height: 14px;
  background-color: ${primary};
  transform: translateX(10px) translateY(-5px);

  .icon {
    margin-right: 2px;
  }
`;
