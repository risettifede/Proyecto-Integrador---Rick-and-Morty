import './App.css'
import Cards from './components/Cards/Cards'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Login from './components/Login/Login'
// import Favorites from './components/Favorites/Favorites'
import { useState, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'

function App() {
  //! HOOKS
  const navigate = useNavigate();
  const store = localStorage.getItem('login')

  //! STATES
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(false)


  const gmail = "invitado@gmail.com";
  const password = "maradona1";

  const userLogin = (userData) => {
    if (gmail === "invitado@gmail.com" && userData.password === password) {
      localStorage.setItem('login', true)
      navigate("/home")
    } else {
      setError(true)
    }
  }

  useEffect(() => {
    if (store === "true") {
      navigate("/home")
    }
  }, [store, navigate]); /* Este array indica que useEffect sólo se ejecutará cuando el valor de STORE y NAVIGATE cambie */

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
          <Route path="/" element={<Login onSubmit={userLogin} />} />
          <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:detailId" element={<Detail />} />
          {/* <Route path="/favorites" element={<Favorites />} /> */}
        </Routes>
      </div>
    </div>
  )
}

export default App;


