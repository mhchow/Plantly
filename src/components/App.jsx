import React from 'react';
import PlantCard from './PlantCard.jsx';
import NavigationBar from './NavBar.jsx';
import WishList from './WishList.jsx';

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
    }
  ];

  return (
    <div>
      <NavigationBar />
      <div className='plants-container'>
        {plants.map(plant => <PlantCard plant={plant} key={plant.id}/>)}
      </div>
      <WishList />

    </div>)
}



export default App;