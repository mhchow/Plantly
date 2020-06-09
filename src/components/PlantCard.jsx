import React from 'react';
import styled from 'styled-components';

// const PlantCard = (props) => {
//   console.log('props', props.info.id)
//   return (<div>{props.info.id}</div>)
// }

const PlantWrapper = styled.div`
  background-color: green;
  box-sizing: border-box;
  ${'' /* grid-column-start: 1; */}
  padding: 10%;
  border-radius: 5%;

  p {
    color: white;
    display: block;
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