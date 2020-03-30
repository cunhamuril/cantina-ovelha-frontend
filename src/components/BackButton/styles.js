import styled from 'styled-components';

import { secondary, secondaryDark } from '../../theme/colors';

export const Container = styled.button`
  /* Display */
  position: absolute;
  top: 14px;
  left: 20px;

  /* Box Model */
  padding: 5px 15px;
  border-radius: 4px;

  /* Other */
  color: #fff;
  border: none;
  transition: all ease-out 0.2s;
  background-color: ${secondary};
  box-shadow: 0px 2px 4px #00000029;

  &:hover {
    background-color: ${secondaryDark};
  }
`;
