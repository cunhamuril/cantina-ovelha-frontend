import styled from 'styled-components';
import media from 'styled-media-query';

import { lightGray } from '../../theme/colors';

export const Main = styled.div`
  /* Display */
  display: grid;
  min-height: 100vh;
  grid-template-columns: 1fr 300px;
  grid-template-areas: 'content menu';

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
      padding: 0;
      grid-area: content;
    }
  `}
`;
