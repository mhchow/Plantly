import React from 'react';
import styled from 'styled-components';

const SearchBar = styled.div`
  justify-content: flex-start;

`

const Search = () => {
  return (
    <SearchBar>
      <input id="search" placeholder="search..."></input>
      <button onClick={()=> console.log('search for')}>Search</button>
    </SearchBar>
  )
}

export default Search;

//htmlFor is the react use of 'for' for html since for is a reserved keyword;