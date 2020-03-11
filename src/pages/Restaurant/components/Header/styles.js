import styled from 'styled-components'

import { darken } from "../../../../theme/colors";

export const Container = styled.header`
  /* Box Model */
  max-width: 695px;    

  /* Other */
  color: ${darken};
  line-height: 14px;
`