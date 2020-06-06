import React from 'react';

// const PlantCard = (props) => {
//   console.log('props', props.info.id)
//   return (<div>{props.info.id}</div>)
// }

const PlantCard = ({plant}) => {
  return (
    <div className="plant-card">
      <img src="" alt={`image of ${plant.name}`}></img>
      <p>{plant.name}</p>
      <p>{plant.location}</p>
      <p>Water needs: {plant.waterNeeds}</p>
      <button onClick={() => console.log('water this plant')}>Water</button>
    </div>
    )
}
export default PlantCard;