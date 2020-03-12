import styled from 'styled-components';
import media from 'styled-media-query';

export const SearchContainer = styled.div`
  /* Box Model */
  max-width: 900px;
  border-radius: 25px;

  /* Other */
  box-shadow: 0px 2px 4px #00000029;

  ${media.lessThan('large')`        
    background-color: #FFF !important;
  `}
`;

export const SearchLabel = styled.div`
  /* Box Model */
  width: 45%;
  padding: 10px 10px 10px 50px;
  border-radius: 25px 0 0 25px;

  /* Other */
  font-size: 1.1rem;
  background-color: #fff;

  ${media.lessThan('large')`
    display: none;
  `}
`;

export const SearchInput = styled.input`
  /* Box Model */
  width: 100%;
  border: none;
  padding: 11px 20px;

  /* Other */
  background-color: transparent;

  ${media.lessThan('large')`
    width: 80%;
    padding: 10px 20px;  
  `}

  ${media.greaterThan('large')`    
    &::placeholder {
      color: transparent;
    }
  `}
`;

export const SearchIcon = styled.div`
  width: 7%;
  padding: 11px;
  border-radius: 0 25px 25px 0;

  cursor: pointer;
  background-color: transparent;

  &:active {
    transform: scale(0.9);
  }

  ${media.lessThan('large')`    
    width: 0;    
  `}
`;
