import React from 'react'
import styles from './Login.module.css'
import { useState } from 'react';

function Login(userLogin) {
  
  const [errors, setErrors] = useState({});

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value
    });
  }

  const handleSumbit = (event) => {
    event.preventDefault();
    alert ("Login Exitoso");
  }


  return (
    <form className={styles.login} onSubmit={handleSumbit} login={userLogin}> 
      <div className={styles.img_container}>
        <img src="rickymorty.png" alt="Rick" />
      </div>
      <div>
        <label 
        htmlFor="ingresatusdatos" 
        className={styles.label}> 
        👇🏼 INGRESA TUS DATOS 👇🏼
        </label>

        <label 
        htmlFor='username'
        name="username" >
  
        <input 
        type="text" 
        className={styles.input} 
        placeholder='E-mail'
        value={userData.email}
        onChange={handleChange}
        />
        </label>

        <label 
        htmlFor='password'
        name="password" >
          
          <input 
          type="text"
          className={styles.input} 
          placeholder='Password'
          value={userData.password}
          onChange={handleChange}
          />
        </label>

        <button 
        className={styles.button}> Submit
        </button>
      </div>

    </form>
    
  )
}

export default Login;

/* EJEMPLO HECHO EN CLASE */

// const Form = () => {

//     /* const [username, setUsername] = useState (""); --> En lugar de tener un estado para c/ input, lo agregamos al estado
//     const [password, setPassword] = useState (""); */ // --> En lugar de tener un estado para c/ input, lo agregamos al estado
  
//     const validate = (form, setErrors, errors) => {
//       if (!form.username) setErrors({ ...errors, username: "Usuario vacio" });
//       else ({ ...errors, username: "" });
  
//       /* EXPRESIÓN REGULAR: formatoDeUnMail@gmail.com */
//       if(/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{3})+$/.test(form.email))  /* Si esto es correcto */ setErrors({ ...errors, username: "" })
//       else /* Si no */ setErrors({ ...errors, username: "Usuario inválido" })
//     }
  
//     const [form, setForm] = useState({
//       username: "",
//       password: "",
//     })
  
//     const [errors, setErrors] = useState({
//       username: "",
//       password: "",
//     })
  
//     const handleChange = (event) => {
//       const property = event.target.name;
//       const value = event.target.value;
  
//       /* UNA DE LAS FORMAS DE CAMBIAR Y VALIDAR EL ESTADO EN TIEMPO REAL Y AL MISMO TIEMPO */
//       setForm({ ...form, [property]: value }) // ACÁ CAMBIA LA INFO - con el brackets notation, tomo el valor de property. 
  
//       validate({ ...form, [property]: value }, setErrors, errors) // ACÁ VALIDA LA INFO
//     }
  
//     const sumbitHandler = (event) => {
//       event.preventDefault(); // Este método es para que no reinicie toda la página y borre lo ya
//       alert("LOGIN EXITOSO")
//     }
  
//     return (
//       <form onSubmit={sumbitHandler}>
//         <div>
//           <label htmlFor="username">Ingresar usuario:</label>
//           <input
//             type="text"
//             name="username"
//             value={form.username} onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Ingresar contraseña:</label>
//           <input
//             type="text"
//             name="password"
//             value={form.password}
//             onChange={handleChange}
//           />
//         </div>
//         <button type="sumbit">Login</button>
//       </form>
//     )
//   }
  
//   export default Form;  
  