const axios = require('axios')
const URL = 'https://rickandmortyapi.com/api/character/'


const getCharById = (req, res) => {
    const { id } = req.params;

    axios(`${URL}/${id}`)
        .then(response => response.data)
        .then(({ status, name, specie, origin, image, gender }) => {
            if (name) {
                const character = {
                    id,
                    name,
                    status,
                    specie,
                    origin,
                    image,
                    gender
                }
                return res.status(200).json(character) //el json, por buena practica, se usa para objetos
            }
            return res.status(404).send('Not Found') // el send, por buena practica, se usa para textos planos (strings)
        })

        .ctach(error => res.status(500).send(error.message))

}

module.exports = { getCharById };

// const { id } = req.params;
//     axios(`${URL}/${id}`)
//         .then((response) => {
//             const { characterId: id, status, name, species, origin, image, gender } = response.data;
//             res.json({ characterId: status, name, species, origin, image, gender })
//         })
//         .catch((error) => {
//             if (error.response && error.response.status === 404) {
//                 res.status(404).send("Not Found")
//             } else {
//                 res.status(500).send({ message: error.message })
//             }
//         })

/* RESOLUCIÓN CON ASYNC AWAIT */
// const axios = require('axios');

// const URL = "https://rickandmortyapi.com/api/character/";

// const getCharById = async (req, res) => {
//   try {
//     const id = req.params.id;
//     const response = await axios.get(`${URL}${id}`);
//     const { id: charId, status, name, species, origin, image, gender } = response.data;
//     res.json({ id: charId, status, name, species, origin, image, gender });
//   } catch (error) {
//     if (error.response && error.response.status === 404) {
//       res.status(404).send("Not found");
//     } else {
//       res.status(500).send({ message: error.message });
//     }
//   }
// };

// module.exports = { getCharById };
