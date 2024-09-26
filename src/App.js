import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import data from './components/data/data.json';

function App() {
  const [clubs, setClubs] = useState([]);

  useEffect( () => {
    setClubs(data);
  } , [])
  return (
    <div className="App">
      {/* <h1>Team Builder</h1>
      <ul >
        {
          clubs.map(club => (<li  key={club.id}>{club.name}</li>))
        }
      </ul> */}
        <Header></Header>
        <Shop></Shop>
    </div>
  );
}

export default App;
