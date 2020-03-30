import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { MdSearch } from 'react-icons/md';

import { Container, SearchLabel, SearchInput, SearchButton } from './styles';

const SearchField = ({ backgroundColor, textLabel, onSearch }) => {
  const searchInput = useRef();

  return (
    <Container
      className="w-100 d-flex align-items-center justify-content-center"
      backgroundColor={backgroundColor}
      onSubmit={onSearch}
    >
      <SearchLabel onClick={() => searchInput.current.focus()}>
        {textLabel}
      </SearchLabel>

      <SearchInput
        placeholder={textLabel}
        ref={searchInput}
        onChange={onSearch}
      />

      <SearchButton type="submit">
        <MdSearch size="24" />
      </SearchButton>
    </Container>
  );
};

SearchField.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  textLabel: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default SearchField;
