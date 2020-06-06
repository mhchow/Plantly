import React from 'react';

const Search = () => {
  return (
    <>
      <label htmlFor="search">Search</label>
      <input id="search"></input>
    </>
  )
}

export default Search;

//htmlFor is the react use of 'for' for html since for is a reserved keyword;