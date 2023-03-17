import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Detail = () => {
    const {detailId} = useParams();

    const [character, setCharacter] = useState({});

useEffect(() => {
    const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const KEY = "bcbd72231a15.18199c299130a41d79bc";
    axios(`${URL_BASE}/character/${detailId}?key=${KEY}`) .then((response) =>
        setCharacter(response.data))
}, []);

return (
    <div>
      {character.name ? (
        <>
          <h1>{character.name}</h1>
          <p>{character.status}</p>
          <p>{character.species}</p>
          <p>{character.gender}</p>
          <p>{character.origin?.name}</p>
          <img src={character.image} alt="Imagen" />
        </>
      ) : (
        <h3>Loading...</h3>
      )
    }
    </div>
  );
};

export default Detail;




