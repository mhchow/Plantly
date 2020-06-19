import React, {useState} from 'react';
import styled from 'styled-components';

const StyledModal = styled.form`
  background-color: lightblue;
`
const Modal = () => {
  const [commonName, setCommonName] = useState('');
  const [location, setLocation] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`here is commonName: ${commonName} and location: ${location}`);
  }

  return (

    <StyledModal onSubmit={handleSubmit}>
      <label>Common Name:</label>
      <input
        type="text"
        name="commonName"
        placeholder="enter name"
        value={commonName}
        onChange={(e) => setCommonName(e.target.value)}
      />
      <br />
      <label>Location:</label>
      <input
        type="text"
        name="location"
        placeholder="enter location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <br/>
      <button onClick={handleSubmit}>Add</button>
    </StyledModal>
  )
}




export default Modal;