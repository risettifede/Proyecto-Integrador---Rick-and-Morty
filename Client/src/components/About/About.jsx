import React from "react";
import styles from './About.module.css'

class About extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <h1 className={styles.h1}> Hola!👋 <br /> Soy <span>Federico Risetti</span> y esta es un pagina web para buscar a los 826 personajes de Rick And Morty.
                    La misma utiliza una <span>API</span> con la info de la serie. Todo fue realizado mediante <span>React</span>, <span>Redux</span> y los estilos fueron aplicados
                    con <span>LESS</span> y <span>CSS</span>. <br /> ¡Espero que te guste!</h1>
            </>
        )
    }
}

export default About;