import React from 'react'
import { Link } from 'react-router-dom'
import {UsuarioStatus} from '../helpers/Usuario'
import { CntrInicio } from '../style/estilos'

const Inicio = () => {

  const ruta = UsuarioStatus() ? "/home" : "/login"

  return (
    <CntrInicio as={Link} to={ruta}>
        <img src="https://res.cloudinary.com/veronicaduque/image/upload/v1650752880/Daily%20Bits/images/Color_white_Container_No_p0bgai.png" alt="link inicio"/>
    </CntrInicio>
  )
}

export default Inicio