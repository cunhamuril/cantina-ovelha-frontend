import styled from 'styled-components';
import media from 'styled-media-query';

import { lightGray } from '../../theme/colors';

export const Content = styled.div`
  /* Display */
  display: grid;
  grid-template-columns: 1fr 300px;
  grid-template-areas: 'content menu';
  min-height: 100vh;

  .content {
    grid-area: content;
  }

  .menu {
    grid-area: menu;
    background-color: ${lightGray};
  }

  ${media.lessThan('large')`
    grid-template-areas: 'content content';
  `}
`;
