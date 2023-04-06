import React from 'react'
import styles from './Card.module.css'
import { Link } from 'react-router-dom';

function Card({ id, name, species, gender, image, onClose }) {
   return (
      <div className={styles.card}>
         <button className={styles.closeButton} onClick={() => onClose(id)}>
            X
         </button>
         <img className={styles.image} src={image} alt="Rick Sánchez" />

         <div className={styles.body}>
            <Link to={`/detail/${id}`}>
            <h2 className={styles.name}>Name: {name}</h2>
            </Link>
            <h2 className={styles.species}>Species: {species}</h2>
            <h2 className={styles.gender}>Gender: {gender}</h2>
         </div>
         <div>
         </div>
      </div>
   );
}

export default Card;
