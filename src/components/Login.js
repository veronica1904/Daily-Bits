import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { endpoint } from '../helpers/Urls'
import { guardarUsuario } from '../helpers/Usuario'
import useForm from '../hooks/useForm'
import { BtnGoogle, Cntr, TituloLogin } from '../style/estilos'

const Login = () => {

  const [usuarios, setUsuarios] = useState([])
  const [alerta, setAlerta] = useState("d-none")
  const navigate = useNavigate()

  useEffect(()=>{
    getData()
  }, [])

  const getData = () =>{
    axios.get(endpoint)
    .then(response => {
        setUsuarios(response.data)
    })
    .catch(error => {
        console.log(error)
    })
  }

  const [values, handleInputChange] = useForm({correo:"", contraseña:""})
  const {correo, contraseña} = values

  const handleSubmit = (e) =>{
    
    e.preventDefault()
    const usuarioObjetivo = usuarios.find(user => ((user.correo===correo)&&(user.contraseña===contraseña)) )
    
    if(usuarioObjetivo===undefined){
      setAlerta("alerta")
    } else{
      guardarUsuario(usuarioObjetivo.id)
      navigate("/home")
    }

  }

  return (
    <Cntr>
        <img className="img-login" src="https://res.cloudinary.com/veronicaduque/image/upload/v1650752880/Daily%20Bits/images/Color_Purple_Container_Yes_dow0qr.png" alt="logo"/>
        <TituloLogin>Iniciar sesión</TituloLogin>
        <BtnGoogle>
          <img className='img-google' src="https://res.cloudinary.com/veronicaduque/image/upload/v1650841270/Daily%20Bits/icons/icons8-google_1_eyctzr.png" alt="logo google"/>
          Continuar con Google
        </BtnGoogle>
        <div className='cntr-login'>
            <form onSubmit={handleSubmit}>
              <label>Correo electrónico</label>
              <input
                type="text"
                placeholder='Ingrese su correo electrónico'
                name="correo"
                autoComplete="off"
                value={correo}
                onChange={handleInputChange}
              />
              <label>Contraseña</label>
              <input
                type="password"
                placeholder='Ingrese su contraseña'
                name="contraseña"
                autoComplete="off"
                value={contraseña}
                onChange={handleInputChange}
              />
              
              <button type='submit' className='d-none'></button>
            </form>
            <p className={alerta}>Correo o contraseña incorrectos</p>
            <p><span>¿Se te olvidó tu contraseña?</span></p>
            <p>
              ¿Aún no tienes cuenta? 
              <Link className='enlace-inscripcion' to="/registro" >Inscribirse</Link>
            </p>
        </div>
    </Cntr>
  )
}

export default Login