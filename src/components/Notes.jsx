import React from 'react';
import styled from 'styled-components';

const TextArea = styled.div`
  display: block;
  grid-column-start: 1;

  p {
    color: black;

  }
`

const Notes = () => {
  return (
    <TextArea>
      <p>Notes</p>
        <li>Check props</li>

    </TextArea>
  )
};

export default Notes;