import React from "react";
// import styles from './About.module.css'

class About extends React.Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <>
                <h1 className="h1"> Hola!👋 Soy Fede Risetti y esta es un pagina web para buscar a los 826 personajes de Rick And Morty.
                La misma utiliza una API que nos trae la información de la serie. Todo fue realizado mediantes React, Redux y los estilos fueron aplicados
                con CSS. ¡Espero que te guste!</h1>
            </>
        )
    }
}

export default About;