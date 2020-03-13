import styled from 'styled-components';

import { darken, secondary, primary } from '../../../../theme/colors';

export const Container = styled.div`
  /* Box Model */
  max-width: 377px;
  max-height: 115px;

  /* Other */
  cursor: pointer;
  color: ${darken};
  box-shadow: 0px 4px 8px #00000029;
  transition: all ease-out 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  h6 {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .description {
    font-size: 12px;
    line-height: 14px;
  }

  .price {
    font-weight: 500;
    color: ${secondary};
  }
`;

export const Promo = styled.div`
  /* Box Model */
  width: 103px;
  height: 21px;
  padding: 0 10px;
  border-radius: 15px;

  /* Other */
  background-color: ${primary};
  transform: translateX(10px) translateY(-5px);

  span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    color: #fff;
    font-size: 8px;
    font-weight: 700;
  }

  .icon {
    margin-right: 2px;
  }
`;
