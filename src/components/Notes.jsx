import React, {useState} from 'react';
import styled from 'styled-components';

import Checkbox from './Checkbox.jsx';

const TextArea = styled.div`
  grid-column-start: 1;
  display: flex;
  flex-flow: column wrap;
  padding: 10px;

  p {
    text-align: center;
  }
`

const Notes = () => {

  const [notes, setNotes] = useState([]);
  const [check, setCheck] = useState(false.toString())
  //notes : [{id: 1, text: 'blah blah'}]
  //array.splice(startIndex, how many elements to remove)

  return (
    <TextArea onClick={() => {console.log('clicked Notes Component')}}>
      <p>Notes</p>
      <label>
          <Checkbox
            status={check}
          />
        </label>

        <li>Check props</li>

    </TextArea>
  )
};

export default Notes;