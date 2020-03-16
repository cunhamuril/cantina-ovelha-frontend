import styled from 'styled-components';
import media from 'styled-media-query';

import { darken, secondary, primary } from '../../../../theme/colors';

export const Container = styled.div`
  /* Box Model */
  margin: 15px;
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
    max-width: 200px;
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

  ${media.lessThan('medium')`
    margin: 15px 0;
  `}
`;

export const Promo = styled.div`
  /* Display */
  transform: translateX(10px) translateY(-5px);

  /* Box Model */
  max-width: 103px;
  max-height: 21px;
  padding: 0 10px;
  border-radius: 15px;

  /* Other */
  color: #fff;
  font-size: 8px;
  font-weight: 700;
  background-color: ${primary};

  p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .icon {
    margin-right: 2px;
  }

  ${media.lessThan('small')`
    padding: 10px;

    p{
      display: none;    
    }
  `}
`;
