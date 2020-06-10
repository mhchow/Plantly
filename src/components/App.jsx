import React from 'react';
import PlantCard from './PlantCard.jsx';
import NavigationBar from './NavBar.jsx';
import WishList from './WishList.jsx';

import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  box-sizing: border-box;
  background-color: red;
  max-width: 100%;

`
const Display = styled.div`
  ${'' /* grid-column: 1 / span 4; */}
  grid-column-start: 1;
  grid-column-end: 5;
  background-color: pink;
  display: flex;
  flex-direction: row-wrap;

  ${'' /* grid-row: span till end; */}
`


const App = () => {
  const plants = [
    {
      id: 1,
      name: 'M. adensonii',
      type: 'Monstera',
      location: 'kitchen',
      waterNeeds: 'high',
      lastWatered: '01-01-2020'
    },
    {
      id: 2,
      name: 'M. deliciosa',
      type: 'Monstera',
      location: 'kitchen',
      waterNeeds: 'high',
      lastWatered: '01-01-2020'
    },
    {
      id: 3,
      name: 'Raindrop Peperomia',
      type: 'Peperomia',
      location: 'kitchen',
      waterNeeds: 'high',
      lastWatered: '01-01-2020'
    },
    {
      id: 4,
      name: 'M. adensonii',
      type: 'Monstera',
      location: 'kitchen',
      waterNeeds: 'high',
      lastWatered: '01-01-2020'
    },
    {
      id: 5,
      name: 'M. adensonii',
      type: 'Monstera',
      location: 'kitchen',
      waterNeeds: 'high',
      lastWatered: '01-01-2020'
    },
    {
      id: 6,
      name: 'M. adensonii',
      type: 'Monstera',
      location: 'kitchen',
      waterNeeds: 'high',
      lastWatered: '01-01-2020'
    }
  ];

  return (
    <>
      <NavigationBar />
      <Container>
        <Display>
        {plants.map(plant => <PlantCard plant={plant} key={plant.id}/>)}
        </Display>
        <WishList />
      </Container>
    </>)
}



export default App;