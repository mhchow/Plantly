import React, {useState} from 'react';
import styled from 'styled-components';

import Search from './SearchBar.jsx';

import Modal from './Modal.jsx';
import Button from './Button.jsx';



const Menu = styled.nav`
  width: 100%;
  height: 100px;
  display: flex;
  flex-flow: row nowrap;
  box-sizing: border-box;
  justify-content: space-around;
  align-content: center

`
const NavBar = () => {
  const [hidden, setHidden] = useState(false);

  return (
  <Menu>
    <button onClick={() => setHidden(!hidden)}>add plant</button>
    {hidden ? (<Modal/>) : null}
    <Search/>
    <Button triggerText={'sort by'} />
  </Menu>
  )
}

export default NavBar;