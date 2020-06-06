import React from 'react';

const WishList = (props) => {
  //dynamically render all items that are on the wishlist
  //be able to check them off (will allow you to automatically add the plant to your grid)

  return (
    <>
      <label htmlFor="addPlant">Add a wish list plant</label>
      <input id="addPlant"></input>
      <ul>
        <li>Albo Monstera</li>
        <li>Ruby Cascade Peperomia</li>
      </ul>

    </>
  )

}

export default WishList;