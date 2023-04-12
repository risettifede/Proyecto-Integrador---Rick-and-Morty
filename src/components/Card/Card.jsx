import React from 'react'
import styles from './Card.module.css'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addFav, removeFav } from '../../redux/actions';
import { connect } from 'react-redux';

function Card({ id, name, species, gender, image, onClose, addFav, removeFav }) {
   const [isFav, setIsFav] = useState(false);
   const dispatch = useDispatch();

   const handleFavorite = () => {
      if(isFav) {
         return setIsFav(false)
      }
   }

   return (
      <div className={styles.card}>
         <button className={styles.closeButton} onClick={() => onClose(id)}>
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

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => {
         dispatch(addFav(character))
      },
      removeFav: (id) => {
         dispatch(removeFav(id))
      }
   }
}

export default connect(null, mapDispatchToProps)(Card);
