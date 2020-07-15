import React from 'react';
import styled from 'styled-components';

const PlantWrapper = styled.div`
  box-sizing: border-box;
  flex: 0 1 20%;
  display: flex;
  flex-flow: column nowrap;
  margin: 10px 5px 5px 10px;
  padding: 5px;
  border: 1px solid black;
  border-radius: 10px;
  align-items: center;
  &:hover {
    opacity: 75%;
    transform: scale(1.05)

  }

  p {
    color: white;
  }

  button {
    &:hover {
      background-color: lightblue;
      color: white;
    }
  }

`

const PlantCard = ({plant}) => {
  return (
    <PlantWrapper>
      <img src="" alt={`image of ${plant.name}`}></img>
      <p>{plant.name}</p>
      <p>{plant.location}</p>
      <p>Water needs: {plant.waterNeeds}</p>
      <button onClick={() => console.log(`water ${plant.name}`)}>Water</button>
    </PlantWrapper>
    )
}
export default PlantCard;