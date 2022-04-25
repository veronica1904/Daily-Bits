import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { endpoint } from '../helpers/Urls'
import { limpiarUsuario, obtenerId, UsuarioStatus } from '../helpers/Usuario'
import { Cntr, CntrPerfil, NombrePerfil, TextoLogout, TituloGeneral } from '../style/estilos'
import Navbar from './Navbar'

const Perfil = () => {

  const estado = UsuarioStatus()
  const navigate = useNavigate()
  const idUser = obtenerId()
  const [user, setUser] = useState([])

  useEffect(()=>{

    if(!estado){
      navigate("/login")
    }else{
      getData()
    }

  })

  const getData = () =>{
    axios.get(endpoint+idUser)
    .then(response => {
        setUser(response.data)
    })
    .catch(error => {
        console.log(error)
    })
  }

  const {nombre, correo} = user

  const cerrarSesion = () =>{
    limpiarUsuario()
    navigate("/login")
  }

  return (
    <Cntr>
      <TituloGeneral>Perfil</TituloGeneral>
      <CntrPerfil>
        <img className="img-login" src="https://res.cloudinary.com/veronicaduque/image/upload/v1650843873/Daily%20Bits/imagesd/Ellipse_3_csfant.png" alt="logo"/>
        <NombrePerfil>{nombre}</NombrePerfil>
        <p>{correo}</p>
        <TextoLogout onClick={cerrarSesion}>Cerrar sesión</TextoLogout>
        <Link className='link-admin' to="/administracion">Consultar información de administración</Link>
      </CntrPerfil>
      <Navbar select="perfil"/>
    </Cntr>
  )
}

export default Perfil