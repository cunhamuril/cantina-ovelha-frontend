import styled from 'styled-components';
import media from 'styled-media-query';

import { darken, secondary, primary } from '../../../../theme/colors';

export const Container = styled.div`
  /* Display */
  margin: 15px;
  position: relative;

  /* Box Model */
  width: 100%;
  height: 115px;
  max-width: 386px;

  /* Other */
  cursor: pointer;
  color: ${darken};
  box-shadow: 0px 4px 8px #00000029;
  transition: all ease-out 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  h6 {
    margin: 0;
    margin-top: 10px;
    max-width: ${props => (props.hasPromotionalPrice ? '124px' : '200px')};

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .description {
    margin: 5px 0;
    max-width: 200px;
    max-height: 43px;

    font-size: 12px;
    line-height: 14px;

    overflow: hidden;
    text-overflow: ellipsis;
  }

  .price {
    font-weight: 500;
    color: ${secondary};
  }

  ${media.between('small', 'medium')`
    max-width: 300px;
    margin: 15px 10px;
  `}

  ${media.lessThan('small')`
    margin: 15px 0;

    h6 {  
      max-width: ${props => (props.hasPromotionalPrice ? '180px' : '200px')};
    }
  `}
`;

export const Thumbnail = styled.div`
  width: 115px;
  height: 115px;

  background-size: cover;
  background-position: center;
  background-image: url(${props => props.img});
`;

export const Promo = styled.div`
  /* Display */
  top: 8px;
  right: 8px;
  position: absolute;

  /* Box Model */
  width: 103px;
  padding: 3px 10px;
  border-radius: 25px;

  /* Other */
  color: #fff;
  font-size: 8px;
  font-weight: 700;
  background-color: ${primary};

  p {
    margin: 0;
    margin-left: 2px;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  ${media.lessThan('medium')`    
    padding: 0;
    width: 24px;
    height: 24px;

    p{
      display: none;
    }
  `}
`;
