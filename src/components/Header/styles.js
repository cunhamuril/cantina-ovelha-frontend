import styled from 'styled-components';

import { secondary } from '../../theme/colors';

export const HeaderComponent = styled.header`
  /* Display */
  top: 0;
  left: 0;

  /* Box Model */
  width: 100%;
  height: 62px;

  /* Other */
  background-color: ${secondary};
  box-shadow: 0px 4px 8px #00000029;
`;
