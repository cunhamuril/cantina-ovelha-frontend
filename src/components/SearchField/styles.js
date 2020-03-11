import styled from 'styled-components'
import media from 'styled-media-query'

export const SearchContainer = styled.div`
  /* Box Model */
  border-radius: 25px;
  max-width: 900px;

  /* Other */
  box-shadow: 0px 2px 4px #00000029;
  opacity: 1;
`

export const SearchLabel = styled.span`
  /* Box Model */
  width: 30%;
  padding: 10px 0;

  /* Other */
  font-size: 1.1rem;
  background-color: #FFF;

  ${media.lessThan('large')`
    display: none;
  `}
`

export const SearchInput = styled.input`
  /* Box Model */
  width: 75%;
  border: none;
  padding: 10px 20px;

  /* Other */
  opacity: 1;

  &:focus {
    outline: none;
  }

  ${media.lessThan('large')`
    padding: 10px 0;
  `}

  ${media.greaterThan("large")`    
    &::placeholder {
      color: transparent;
    }
  `}
`

export const SearchIcon = styled.div`
  width: 7%;
  padding: 10px;
  border-radius: 0 25px 25px 0;

  &:hover {
    cursor: pointer;
  }
`