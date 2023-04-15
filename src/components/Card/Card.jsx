import React from 'react';
import styles from './Card.module.css';
import { Link } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import { addFav, removeFav } from '../../redux/actions';
import { useState, useEffect } from 'react';

function Card({ id, name, species, gender, image, onClose, addFav, removeFav }) {
   const [isFav, setIsFav] = useState(false);
   const myFavorites = useSelector((state) => state.myFavorites);
   // const dispatch = useDispatch();

   const handleFavorite = () => {
      if (isFav) { return setIsFav(false), removeFav(id) };
      if (!isFav) { return setIsFav(true), addFav(id) };
   }

  useEffect(() => {
   myFavorites.forEach((char) => {
      const id = char ? char.id : null;
      if (id === id) {
         setIsFav(true);
      }
   })
}, [myFavorites, id]);

   return (
      <div className={styles.card}>
         <button className={styles.closeButton} onClick={() => onClose(id)}>
         </button>
         <img className={styles.image} src={image} alt={name} />

         <div className={styles.body}>
            <Link to={`/detail/${id}`}>
               <h2 className={styles.name}>Name: {name}</h2>
            </Link>
            <p className={styles.species}>Species: {species}</p>
            <p className={styles.gender}>Gender: {gender}</p>
         </div>
         {isFav ? (
          <button onClick={handleFavorite}>❤️</button>
        ) : (
          <button onClick={handleFavorite}>🤍</button>
        )}
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
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

export default connect(mapStateToProps, mapDispatchToProps)(Card);

