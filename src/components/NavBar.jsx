import React from 'react';
import Search from './SearchBar.jsx';

import styled from 'styled-components';

const Menu = styled.nav`
  display: flex;
  box-sizing: border-box;
  height: 20%;

`
const NavBar = () => {
  return (
  <Menu>
    <button onClick={() => console.log('clicked "ADD PLANT" button')}>Add Plant</button>
    <Search/>
  </Menu>
  )
}

export default NavBar;