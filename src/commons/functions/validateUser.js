const validateUser = (userData) => {
    const errors = {};
    const validateGmailRegex = /^[a-zA-Z0-9]+([._][a-zA-Z0-9]+)*@gmail.com$/ // No se puede hacer un test de un string. Por eso no funcionaba.

    /* GMAIL */
    if (!userData.email) { errors.email = 'Debe ingresar un correo electrónico' }
    if (!validateGmailRegex.test(userData.email)) { errors.email = 'Debe ingresar un gmail' }
    if (userData.email.length > 35) { errors.email = 'No debe superar 35 caracteres' }

    /* PASSWORD */
    if (!userData.password) { errors.password = 'Ingrese password' }
    if (!/.*\d+.*/.test(userData.password)) { errors.password = 'Debe tener al menos un (1) número' }
    if (userData.password.length < 6 || userData.password.length > 10) { errors.password = 'Debe tener entre 6 y 10 caracteres' }

    return errors;
}

// const validatePassword = (password) => {
//     const errors = {};
//     if (!password) { errors.password = 'Ingrese password' }
//     else if (!/\d/.test(password)) { errors.password = 'Debe tener al menos un (1) número' } // Expresión regular: "/\d/" verifica si hay un dígito numérico.
//     else if (password.length < 6 && password.length > 10) { errors.password = 'Debe tener entre 6 y 10 caracteres' }
// }

export default validateUser;







