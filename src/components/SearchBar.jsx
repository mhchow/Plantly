import React from 'react';

const Search = () => {
  return (
    <>
      <label htmlFor="search">Search</label>
      <input id="search"></input>
      <button onClick={()=> console.log('search for')}>Search</button>
    </>
  )
}

export default Search;

//htmlFor is the react use of 'for' for html since for is a reserved keyword;