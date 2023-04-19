import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import styles from './Detail.module.css'
import axios from "axios";

const Detail = () => {
  const { detailId } = useParams();

  const [character, setCharacter] = useState({});

  useEffect(() => {
    const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const KEY = "bcbd72231a15.18199c299130a41d79bc";
    axios(`${URL_BASE}/character/${detailId}?key=${KEY}`).then((response) =>
      setCharacter(response.data))
  }, [detailId]);

  return (
    <div className={styles.container}>
      {character.name ? (
        <>
          <img src={character.image} alt="Imagen" className={styles.img} />
          <div className={styles.contenido}>
            <h1> Name: {character.name}</h1>
            <span>
              <p>Status: {character.status}</p>
              <p>Species: {character.species}</p>
              <p>Gender: {character.gender}</p>
              <p>Origin: {character.origin?.name}</p>
            </span>

          </div>
        </>
      ) : (
        <div className={styles.loading}>
          <h3>Loading...</h3>
        </div>

      )
      }
    </div>
  );
};

export default Detail;




