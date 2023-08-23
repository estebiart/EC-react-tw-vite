import Home from '../Home'
import MyAccount from '../MyAccount'
import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Characters from '../../components/Characters'

import './App.css';


function App() {

  const [characters, setCharacters] = useState(null);
  const reqApi = async () =>{
  const api = await fetch('https://rickandmortyapi.com/api/character');
  const characterApi = await api.json()
  console.log(characterApi.results);
  setCharacters(characterApi.results);
 }

  return (
    <Router>
      <div className="bg-red-200">
        <button onClick={reqApi}> enviar</button>
        <header>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/MyAccount">MyAccount</Link>
            </li>
          </ul>
        </header>
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/MyAccount/:name" element={<MyAccount />} />
        </Routes>
        {characters ? (
        <Characters characters={characters} setCharacters={setCharacters} />
        ) :(
          <>
          <img src="" alt="" />
          <button onClick={reqApi}>
              Buscar
          </button>
          </>
        ) }
      </div>
    </Router>
  );
}

export default App;
