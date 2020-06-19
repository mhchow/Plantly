import React, {useState, useEffect} from 'react';
import PlantCard from './PlantCard.jsx';
import NavigationBar from './NavBar.jsx';
import WishList from './WishList.jsx';
import Notes from './Notes.jsx';


import styled, {createGlobalStyle} from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #295e1f;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: .8fr 4fr 1fr;
  box-sizing: border-box;
`
const Display = styled.div`
  grid-column-start: 2;
  display: flex;
  flex-flow: row wrap;
`

const App = () => {
  const myPlants = [
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
    }
  ];

  const [plants, setPlants] = useState([]);
  // const [hidden, setHidden] = useState(true)

  //can be used as componentDidMount, didUpdate, and willUnmount
  useEffect(() => {
    setPlants(myPlants)
  }, [])


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