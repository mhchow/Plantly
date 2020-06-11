import React from 'react';
import styled from 'styled-components';

// const PlantCard = (props) => {
//   console.log('props', props.info.id)
//   return (<div>{props.info.id}</div>)
// }

const PlantWrapper = styled.div`
  background-color: green;
  box-sizing: border-box;
  flex: 0 1 20%;
  display: flex;
  flex-flow: column nowrap;
  margin: 10px 5px 0px 10px;
  align-items: center;

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