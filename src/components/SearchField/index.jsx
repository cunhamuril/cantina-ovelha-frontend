import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { MdSearch } from 'react-icons/md';

import { SearchForm, SearchLabel, SearchInput, SearchButton } from './styles';

const SearchField = ({ backgroundColor, textLabel, onSubmit, onChange }) => {
  const searchInput = useRef();

  return (
    <SearchForm
      className="w-100 d-flex align-items-center justify-content-center"
      style={{ backgroundColor }}
      onSubmit={onSubmit}
    >
      <SearchLabel onClick={() => searchInput.current.focus()}>
        {textLabel}
      </SearchLabel>

      <SearchInput
        placeholder={textLabel}
        ref={searchInput}
        onChange={onChange}
      />

      <SearchButton type="submit">
        <MdSearch size="24" />
      </SearchButton>
    </SearchForm>
  );
};

SearchField.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  textLabel: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchField;
