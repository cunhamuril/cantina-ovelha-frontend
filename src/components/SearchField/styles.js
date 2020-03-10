import styled from 'styled-components'

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
  padding: 10px;

  /* Other */
  font-size: 1.1rem;
  background-color: #FFF;
`

export const SearchInput = styled.input`
  /* Box Model */
  width: 75%;
  border: none;
  padding: 10px 20px;  

  /* Other */
  opacity: 1;  
`

export const SearchIcon = styled.div`
  width: 7%;
  padding: 10px;
  border-radius: 0 25px 25px 0;
`