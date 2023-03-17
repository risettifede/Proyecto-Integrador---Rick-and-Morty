import React from 'react'
import Card from "../Card/Card"

function Cards({characters, onClose}) {
    return (
        <div>
            {characters.map(({id, name, species, gender, image}) => {
                
                return (
                    <Card
                        id={id}
                        name={name}
                        species={species}
                        gender={gender}
                        image={image}
                        onClose={onClose}
                    />
                );
            })}
        </div>
    );
}

export default Cards;




