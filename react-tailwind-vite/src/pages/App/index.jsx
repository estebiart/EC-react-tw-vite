import Home from '../Home'
import MyAccount from '../MyAccount'
import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Characters from '../../components/Characters'
import {FaStar} from "react-icons/fa"

import './App.css';

 const createArray = (length) =>[
  ...Array(length)
 ];

function Star({ selected = false, onSelect}){
  return <FaStar  color= {selected ? "red" : "gray"}
   onClick={onSelect}/>
}
function StarRating({totalStars}){
  const [
     selectedStars,
     setSelectedStars
    ] = useState(0);
  return createArray(totalStars).map((n,i) => (
  <Star 
  key={i} 
  selected={ selectedStars > i} 
  onSelect={() => setSelectedStars(i+1)}
  
  />))
}

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
        <StarRating totalStars={5}/>
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
