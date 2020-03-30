import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.form`
  /* Box Model */
  max-width: 100%;
  border-radius: 25px;

  /* Other */
  box-shadow: 0px 2px 4px #00000029;
  background-color: ${props => props.backgroundColor};

  ${media.lessThan('large')`        
    background-color: #FFF !important;
  `}
`;

export const SearchLabel = styled.label`
  /* Display */
  display: flex;
  justify-content: center;

  /* Box Model */
  margin: 0;
  width: 100%;
  max-width: 260px;
  padding: 10px;
  border-radius: 25px 0 0 25px;

  /* Other */
  overflow: hidden;
  font-size: 1.1rem;
  white-space: nowrap;
  background-color: #fff;
  text-overflow: ellipsis;

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
    padding: 10px;
  `}

  ${media.greaterThan('large')`    
    &::placeholder {
      color: transparent;
    }
  `}
`;

export const SearchButton = styled.button`
  width: 100%;
  max-width: 50px;
  border: none;
  padding: 11px;
  border-radius: 0 25px 25px 0;

  cursor: pointer;
  background-color: transparent;

  &:active {
    transform: scale(0.9);
  }

  &:focus {
    outline: none;
  }

  ${media.lessThan('large')`    
    width: 0;    
  `}
`;
