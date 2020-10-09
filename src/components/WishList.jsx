import React, {useState} from 'react';
import styled from 'styled-components';

const Aside = styled.aside`
  grid-column: 3;
  padding: 10px;

`

function Item(plant, id) {
  return <li key={id} id={id}>{plant}</li>
}

function WishList(props) {
  const staticList = ['Albo Monstera', 'VSOH', 'Peperomia Ruby Cascade'];
  //DONE: dynamically render all items that are on the wishlist
  //be able to check them off (will allow you to automatically add the plant to your grid)
   const [list, setList] = useState(staticList);
   const [input, setInput] = useState('');

   const addPlantClick = () => {
    setList(oldList => [...oldList, input])
   }

  return (
    <Aside>
      <label>
        Add a wish list plant
        <input
          id="addPlant"
          type="text"
          placeholder="plant name"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          />
      </label>
      <button
        id='addPlant-btn'
        onClick={addPlantClick}
      >
        Add
      </button>
      <ul>
        {list.map((entry, i) => {
          return Item(entry, i)
        })}
      </ul>
    </Aside>
  )
}

export default WishList;