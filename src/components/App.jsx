import React from 'react';
import PlantCard from './PlantCard.jsx';
import NavigationBar from './NavBar.jsx';
import WishList from './WishList.jsx';
import Notes from './Notes.jsx';

import styled, {createGlobalStyle} from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: cneter;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: .8fr 4fr 1fr;
  box-sizing: border-box;
  background-color: red;

`
const Display = styled.div`
  grid-column-start: 2;
  background-color: pink;
  display: flex;
  flex-flow: row wrap;
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
    },
    {id: 7,
      name: 'M. adensonii',
      type: 'Monstera',
      location: 'kitchen',
      waterNeeds: 'high',
      lastWatered: '01-01-2020'
    }
  ];

  return (
    <Wrapper>
      <NavigationBar />
      <Grid>
        <Notes />
        <Display>
          {plants.map(plant => <PlantCard plant={plant} key={plant.id}/>)}
        </Display>
        <WishList />
      </Grid>
    </Wrapper>)
}



export default App;