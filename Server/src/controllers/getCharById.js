import axios from ('axios')
const URL = 'https://rickandmortyapi.com/api/character/'


const getCharById = (req, res) => {
    const id = req.params.id;
    axios(`${URL}${id}`)
        .then((response) => {
            const { id: id, status, name, species, origin, image, gender } = response.data;
            res.json({ id: status, name, species, origin, image, gender })
        })

        .catch((error) => {
            if (error.response && error.response.status === 404) {
                res.status(404).send("Not Found")
            } else {
                res.status(500).send({ message: error.message })
            }
        })
}


module.exports = { getCharById };

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


// const axios = require('axios');

// const getCharById = (res, id) => {
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(response => response.data)
//     .then(({name, gender, species, origin, image, status}) => {
//         const character = {
//             id,
//             name,
//             gender,
//             species,
//             origin,
//             image,
//             status
//         }

//     return res
//     .writeHead(200, {'Content-type' : 'application/json'})
//     .end(JSON.stringify(character))
//     })
//     .catch( error => {
//         return res.writeHead (500, {'Content-type' : 'text/plain'})
//         .end(error.message)})
// }

// module.exports = {
//     getCharById
// };