import React from 'react';
import styled from 'styled-components';

const Aside = styled.aside`
  grid-column: 3;
  padding: 10px;

`

const WishList = (props) => {
  //dynamically render all items that are on the wishlist
  //be able to check them off (will allow you to automatically add the plant to your grid)

  return (
    <Aside>
      <label htmlFor="addPlant">Add a wish list plant</label>
      <input id="addPlant"></input>
      <button onClick={()=> console.log('add plant to wishlist')}>Add</button>
      <ul>
        <li>Albo Monstera</li>
        <li>Ruby Cascade Peperomia</li>
      </ul>
    </Aside>
  )

}

export default WishList;