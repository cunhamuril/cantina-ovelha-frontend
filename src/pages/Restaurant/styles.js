import styled from 'styled-components';
import media from 'styled-media-query';

import { lightGray } from '../../theme/colors';

export const Main = styled.div`
  /* Display */
  display: grid;
  grid-template-columns: 1fr 300px;
  grid-template-areas: 'content menu';
  min-height: 100vh;

  .content {
    grid-area: content;
    padding-right: 10rem;
  }

  .menu {
    grid-area: menu;
    background-color: ${lightGray};
  }

  ${media.lessThan('large')`
    grid-template-areas: 'content content';    
  `}

  ${media.lessThan('huge')`
    .content {
      grid-area: content;
      padding: 0;
    }
  `}
`;
