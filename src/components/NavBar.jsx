import React from 'react';
import Search from './SearchBar.jsx';

import styled from 'styled-components';

const Menu = styled.nav`
  display: flex;
  box-sizing: border-box;
  justify-content: space-around;

`
const NavBar = () => {
  return (
  <Menu>
    <button onClick={() => console.log('clicked "ADD PLANT" button')}>Add Plant</button>
    <Search/>
    <button>Sort By</button>
  </Menu>
  )
}

export default NavBar;