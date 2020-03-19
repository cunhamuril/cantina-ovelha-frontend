import styled from 'styled-components';
import media from 'styled-media-query';

import { darken, secondary, primary } from '../../../../theme/colors';

export const Container = styled.div`
  /* Box Model */
  margin: 15px;
  width: 386px;
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
    margin: 0;
    margin-top: 10px;

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

  ${media.lessThan('medium')`
    margin: 15px 0;
  `}
`;

export const Thumbnail = styled.div`
  width: 115px;
  height: 115px;
  background-size: cover;
  background-position: center;
`;

export const Promo = styled.div`
  /* Display */
  position: absolute;
  transform: translate(150px, 5px);

  /* Box Model */
  max-width: 103px;
  padding: 3px 10px;
  border-radius: 25px;

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
  transform: translate(180px, 5px);

  padding: 8px;

    p{
      display: none;    
    }
  `}
`;
