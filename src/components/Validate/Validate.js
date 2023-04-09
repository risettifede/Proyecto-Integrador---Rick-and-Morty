export const validateEmail = (gmail) => {
    const errors = {};
    const validateGmail = '/^[a-zA-Z0-9]+([._][a-zA-Z0-9]+)*@gmail.com$/'

    if (!gmail) { errors.gmail = 'Debe ingresar un correo electrónico' }
    else if (!validateGmail.test(gmail)) { errors.gmail = 'Debe ingresar un gmail' }
    else if (gmail.length > 35) { errors.gmail = 'No debe superar 35 caracteres' }

}

export const validatePassword = (password) => {
    const errors = {};
    if (!password) { errors.password = 'Ingrese password' }
    else if (!/\d/.test(password)) { errors.password = 'Debe tener al menos un (1) número' } // Expresión regular: "/\d/" verifica si hay un dígito numérico.
    else if (password.length < 6 && password.length > 10) {errors.password = 'Debe tener entre 6 y 10 caracteres'}

}

// la contraseña tiene que tener al menos un número.
// la contraseña tiene que tener una longitud entre 6 y 10 caracteres.

// el nombre de usuario tiene que ser un email (¡Explora validaciónes REGEX en internet!).
// el nombre de usuario no puede estar vacío.
// el nombre de usuario no puede tener más de 35 caracteres.





