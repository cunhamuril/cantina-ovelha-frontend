import styled from 'styled-components';
import media from 'styled-media-query';

import { lightGray } from '../../theme/colors';

export const Main = styled.div`
  /* Display */
  display: grid;
  min-height: 100vh;
  grid-gap: 10%;
  grid-template-columns: 1fr 300px;
  grid-template-areas: 'content ads';

  .content {
    grid-area: content;
    margin-bottom: 50px;
  }

  .ads {
    grid-area: ads;
    background-color: ${lightGray};
  }

  ${media.lessThan('huge')`    
    grid-gap: 4%;
  `}

  ${media.lessThan('large')`
    grid-template-areas: 'content content';    
    grid-gap: 0;    
  `}
`;
