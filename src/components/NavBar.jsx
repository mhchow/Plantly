import React from 'react';
import Search from './SearchBar.jsx';

const NavBar = () => {
  return (
  <nav>
    <button onClick={() => console.log('clicked "ADD PLANT" button')}>Add Plant</button>
    <Search/>
  </nav>
  )
}

export default NavBar;