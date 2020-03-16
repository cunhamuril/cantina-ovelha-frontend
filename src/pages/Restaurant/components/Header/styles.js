import styled from 'styled-components';
import media from 'styled-media-query';

import { darken } from '../../../../theme/colors';

export const Container = styled.header`
  /* Box Model */
  max-width: 695px;

  /* Other */
  color: ${darken};
  line-height: 14px;

  ${media.lessThan('medium')`
    flex-direction: column
  `}
`;

export const Thumbnail = styled.div`
  width: 145px;
  height: 145px;
  background-size: cover;
  background-position: center;
`;
