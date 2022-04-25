import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { crearUsuario } from '../helpers/Usuario'
import useForm from '../hooks/useForm'
import { BtnRegistro, Cntr, TituloLogin } from '../style/estilos'

const Registro = () => {

  const [values, handleInputChange] = useForm({nombre:"", correo:"", contraseña:""})
  const {nombre, correo, contraseña} = values
  const [alerta, setAlerta] = useState("d-none")
  const navigate = useNavigate()

  const handleSubmit = (e) =>{  
    
    e.preventDefault()

    if((nombre === "")||(correo === "")||(contraseña === "")){
      setAlerta("alerta")
    } else{

      crearUsuario(nombre, correo, contraseña)
      navigate("/login")

    }

  }

  return (
    <Cntr>
        <img className="img-login" src="https://res.cloudinary.com/dbzo53yx4/image/upload/v1645306010/daily-bits/Color_Purple_Container_Yes_rdosln.png" alt="logo"/>
        <TituloLogin>Registrarse</TituloLogin>
        <div className='cntr-login'>
            <form onSubmit={handleSubmit}>
              <label>Nombre</label>
              <input
                type="text"
                placeholder='Ingrese su nombre'
                name="nombre"
                autoComplete="off"
                value={nombre}
                onChange={handleInputChange}
              />
              <label>Correo electrónico</label>
              <input
                type="text"
                placeholder='Ingrese su correo electrónico'
                name="correo"
                autoComplete="off"
                value={correo}
                onChange={handleInputChange}
              />
              <label>Asignar contraseña</label>
              <input
                type="password"
                placeholder='Asigne su contraseña'
                name="contraseña"
                autoComplete="off"
                value={contraseña}
                onChange={handleInputChange}
              />
              <BtnRegistro type='submit'>registrarse</BtnRegistro>
            </form>
            <p className={alerta}>Por favor llena todos los campos</p>
        </div>
    </Cntr>
  )
}

export default Registro