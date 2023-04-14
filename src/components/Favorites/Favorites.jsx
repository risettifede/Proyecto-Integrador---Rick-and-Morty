import React from "react"
import Card from "../Card/Card"
import { connect } from 'react-redux'

const Favorites = ({ myFavorites }) => {
    const renderFav = () => {
        return myFavorites.map((character) => {
            <Card
                key={character.id}
                id={character.id}
                name={character.name}
                species={character.species}
                gender={character.gender}
                image={character.image}
            />
        })
    }
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps)(Favorites)



// Dentro de tu componente Favorites crea una función mapStateToProps. Esta función debe traer el estado global myFavorites. Conecta el componente
//  con la función, y recibe el estado global por props.

// Una vez que tengas la lista de tus personajes favoritos dentro de tu componente, deberás mapearlo y renderizar una Card con información del
// personaje (no te olvides de pasarle las propiedades del personaje).