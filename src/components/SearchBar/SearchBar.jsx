import React, { useState } from 'react';
import styles from './SearchBar.module.css';

function SearchBar ({onSearch}) {

    const [id, setId] = useState("");

    const handleChange = (event) => {
           setId(event.target.value); // Esto es quien ejecuta, en este caso, el input
    }

    return (
        <div>
            <input 
                type="search" 
                className={styles.input}
                onChange={handleChange} // Agrega onChange aquí
                value={id} // Actualiza el valor del input con el estado actualizado
            />
            <button className={styles.SearchBtn} onClick={() => onSearch(id)}> AGREGAR
        </button>
        </div>
    )
}

export default SearchBar;

