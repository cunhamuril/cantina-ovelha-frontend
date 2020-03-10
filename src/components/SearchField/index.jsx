import React from 'react';
import PropTypes from 'prop-types'
import { Container } from 'reactstrap';
import { MdSearch } from 'react-icons/md';

import { SearchContainer, SearchLabel, SearchInput, SearchIcon } from './styles';

const SearchField = ({ backgroundColor, textLabel }) => (
  <Container className='d-flex align-items-center justify-content-center'>
    <SearchContainer className='w-100 d-flex align-items-center justify-content-center mt-4'>
      <SearchLabel className='ml-5'>{textLabel} </SearchLabel>
      <SearchInput style={{ backgroundColor }} />
      <SearchIcon style={{ backgroundColor }} >
        <MdSearch size='24' />
      </SearchIcon>
    </SearchContainer>
  </Container>
);

SearchField.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  textLabel: PropTypes.string.isRequired
}

export default SearchField;
