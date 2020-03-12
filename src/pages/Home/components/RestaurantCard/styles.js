import styled from 'styled-components';

import { darken } from '../../../../theme/colors';

export const Card = styled.div`
  /* Box Model */
  /* min-width: 333px; */
  max-width: 367px;
  min-height: 100px;
  border-radius: 4px;

  /* Other */
  opacity: 1;
  color: ${darken};
  background-color: #fff;
  transition: all ease-out 0.2s;
  box-shadow: 0px 2px 4px #00000029;

  &:hover {
    transform: scale(1.05);
  }
`;

export const OpenInfo = styled.div`
  /* Display */
  position: absolute;
  display: inline-flex;
  transform: translateY(-15px) translateX(336px);

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
`;
