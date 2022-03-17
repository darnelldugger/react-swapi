import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import StarshipList from './pages/StarshipList/StarshipList';
import Starship from './pages/Starship/Starship';

function App() {
  const [starships, setStarships] = useState([])
  return (
    <>
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
      </div>
      <Routes>
        <Route path="/" element={<StarshipList />}/>
        <Route path="/starship" element={<Starship />}/>
      </Routes>
    </>
    );

}

export default App;
