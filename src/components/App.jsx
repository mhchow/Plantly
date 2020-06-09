import React from 'react';
import PlantCard from './PlantCard.jsx';
import NavigationBar from './NavBar.jsx';
import WishList from './WishList.jsx';

import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  box-sizing: border-box;

`
const Display = styled.div`
  grid-column: 1 / span 4;
  background-color: pink;

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