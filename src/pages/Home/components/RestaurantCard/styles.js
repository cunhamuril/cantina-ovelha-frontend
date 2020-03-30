import styled from 'styled-components';
import media from 'styled-media-query';

import { darken, primary, primaryLight } from '../../../../theme/colors';

export const Card = styled.div`
  /* Display */
  position: relative;

  /* Box Model */
  width: 367px;
  height: 100px;
  border-radius: 4px;

  /* Other */
  color: ${darken};
  background-color: #fff;
  transition: transform 0.2s;
  box-shadow: 0px 2px 4px #00000029;

  div > h5,
  div > small {
    max-width: 217px;
    max-height: 50px !important;

    overflow: hidden;
    text-overflow: ellipsis;
  }

  div > .restaurant-address {
    white-space: nowrap !important;
  }

  &:hover {
    transform: scale(1.05);
  }

  ${media.lessThan('medium')`
    width: 320px;    

    div > h5,
    div > small {
      max-width: 160px;
    }
  `}
`;

export const Thumbnail = styled.div`
  width: 100px;
  height: 100px;
  background-size: cover;
  background-image: url(${props => props.url});
  background-position: center;
`;

export const OpenInfo = styled.div`
  /* Display */
  top: -18px;
  right: -18px;
  position: absolute;

  /* Box Model */
  width: 48px;
  height: 48px;
  border-radius: 50px;

  /* Other */
  font-size: 11px;
  background-color: ${props => (props.isOpen ? primary : primaryLight)};

  small {
    color: #fff;
    line-height: 10px;
    font-weight: bold;
    text-align: center;
  }

  ${media.lessThan('small')`
    top: -10px;
  `}
`;
