let myFavorites = [];

const postFav = (req, res) => {
    const characters = req.body;
    myFavorites.push(characters)
    res.json({ myFavorites })
}

const deleteFav = (req, res) => {
    const id = +req.params.id; //el + está convirtiendo el string a número
    const myFavorites = myFavorites.filter((char) => char.id !== id)
    res.json(myFavorites)
}

module.exports = { postFav, deleteFav }