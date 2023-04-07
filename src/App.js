import './App.css'
import Cards from './components/Cards/Cards'
import Nav from './components/Nav/Nav'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../src/components/About/About'
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form'

function App() {
  //! HOOKS
  const [characters, setCharacters] = useState([]);

  //! EVENT HANDLERS
  const onSearch = (id) => {
    const URL_BASE = "https://be-a-rym.up.railway.app/api"
    const KEY = "bcbd72231a15.18199c299130a41d79bc"

    if (characters.find((char) => char.id === id)) {
      return alert("Personaje repetido");
    }

    fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]); // setCharcters está recibiendo una callback. Y tiene un parametro (oldChars) que simboliza el estado
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
  };

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id))
  };


  return (
    <div className='App'>
      <div>
        <Nav onSearch={onSearch} />
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:detailId" element={<Detail />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;


