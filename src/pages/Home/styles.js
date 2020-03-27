import styled from 'styled-components';

import { darken } from '../../theme/colors';

export const HomeContainer = styled.div`
  a {
    text-decoration: none;
    color: ${darken};
  }
`;

export const CardsContainer = styled.div`
  margin: 0 auto;

  width: 100%;
  max-width: 1370px;
`;
