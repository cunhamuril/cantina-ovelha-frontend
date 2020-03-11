import React, { useRef } from 'react';
import PropTypes from 'prop-types'
import { MdSearch } from 'react-icons/md';

import { SearchContainer, SearchLabel, SearchInput, SearchIcon } from './styles';

const SearchField = ({ backgroundColor, textLabel }) => {
  const searchInput = useRef()

  return (
    <SearchContainer className='w-100 d-flex align-items-center justify-content-center'>
      <SearchLabel
        className='ml-5'
        onClick={() => searchInput.current.focus()}
      >
        {textLabel}
      </SearchLabel>

      <SearchInput
        style={{ backgroundColor }}
        placeholder={textLabel}
        ref={searchInput}
      />

      <SearchIcon style={{ backgroundColor }} >
        <MdSearch size='24' />
      </SearchIcon>
    </SearchContainer>
  )
}

SearchField.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  textLabel: PropTypes.string.isRequired
}

export default SearchField;
