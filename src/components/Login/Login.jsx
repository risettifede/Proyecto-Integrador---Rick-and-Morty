import React from 'react'
import styles from './Login.module.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import validateUser from '../../commons/functions/validateUser';

function Login({}) {
  
  const [errors, setErrors] = useState({});
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value
    });

    // const handleChange = (event) => {
    //   setUserData(prevState => ({
    //     ...prevState,
    //     [event.target.name]: event.target.value
    //   }));
    //                                                    ESTO PUEDE SER UNA MEJORA. PARA QUE ACTUALICE MÁS RAPIDO. REVISAR.                                                   
    //   setErrors(validate({
    //     ...userData,
    //     [event.target.name]: event.target.value
    //   }));
    // }
    

    setErrors(validateUser({
      ...userData,
      [event.target.name]: event.target.value
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // console.log(Object.keys(errors));
    if (Object.keys(errors).length == 0) { // el keys (puede ser tambien la propiedad value) sirrve si el objeto tiene propiedades. Objet, método.
      // console.log("entre");
    return navigate("/home")
    } 
    // userLogin(userData);
  }

  return (
    <form className={styles.login} onSubmit={handleSubmit}>
      <div className={styles.img_container}>
        <img src="rickymorty.png" alt="Rick" />
      </div>
      <div>
        <label 
        htmlFor="ingresatusdatos" 
        className={styles.label}> 
        👇🏼 INGRESA TUS DATOS 👇🏼
        </label>

        <label htmlFor='email'>
          <input 
          type="text" 
          className={styles.input} 
          placeholder='E-mail'
          name="email"
          value={userData.email}
          onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </label>

        <label htmlFor='password'>
          <input 
          type="text"
          className={styles.input} 
          placeholder='Password'
          name="password"
          value={userData.password}
          onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>} 
        </label>

        <button 
        className={styles.button}
        onClick={handleSubmit}> 
        Login
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
  