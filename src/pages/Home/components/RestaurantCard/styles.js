import styled from 'styled-components';
import media from 'styled-media-query';

import { darken } from '../../../../theme/colors';

export const Card = styled.div`
  /* Box Model */
  max-width: 367px;
  min-height: 100px;
  border-radius: 4px;

  /* Other */
  opacity: 1;
  color: ${darken};
  background-color: #fff;
  transition: all ease-out 0.2s;
  box-shadow: 0px 2px 4px #00000029;

  div > h5,
  div > small {
    max-width: 217px;

    overflow: hidden;
    text-overflow: ellipsis;
  }

  &:hover {
    transform: scale(1.05);
  }

  ${media.lessThan('small')`
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
  background-position: center;
`;

export const OpenInfo = styled.div`
  /* Display */
  position: absolute;
  display: inline-flex;
  transform: translate(336px, -15px);

  /* Box Model */
  width: 48px;
  height: 48px;
  border-radius: 50px;

  /* Other */
  font-size: 11px;

  small {
    color: #fff;
    line-height: 10px;
    font-weight: bold;
    text-align: center;
  }

  ${media.lessThan('small')`
    transform: translate(280px, -15px);
  `}
`;
