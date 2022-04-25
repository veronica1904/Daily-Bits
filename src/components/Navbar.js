import React from 'react'
import { Link } from 'react-router-dom'
import { CntrNavbar, LinkNavbar } from '../style/estilos'

const Navbar = ({select}) => {

  const claseHome = select==="home" ? "select" : ""
  const srcHome = select==="home" ? "https://res.cloudinary.com/veronicaduque/image/upload/v1650752809/Daily%20Bits/icons/Property_1_home_qjdfxq.svg" : "https://res.cloudinary.com/veronicaduque/image/upload/v1650752809/Daily%20Bits/icons/Property_1_home_qjdfxq.svg"
  const claseEst = select==="estadisticas" ? "select" : ""
  const srcEst = select==="estadisticas" ? "https://res.cloudinary.com/veronicaduque/image/upload/v1650752809/Daily%20Bits/icons/Property_1_activity_hxnbh6.svg" : "https://res.cloudinary.com/veronicaduque/image/upload/v1650752809/Daily%20Bits/icons/Property_1_activity_hxnbh6.svg"
  const clasePerfil = select==="perfil" ? "select" : ""
  const srcPerfil = select==="perfil" ? "https://res.cloudinary.com/veronicaduque/image/upload/v1650752783/Daily%20Bits/icons/Property_1_user_xhslxd.svg" : "https://res.cloudinary.com/veronicaduque/image/upload/v1650752783/Daily%20Bits/icons/Property_1_user_xhslxd.svg"

  return (
    <CntrNavbar>
        <LinkNavbar as={Link} to="/home" className={claseHome}>
          <img src={srcHome} alt="home icon"/>
          <p>Home</p>
        </LinkNavbar>
        <LinkNavbar as={Link} to="/estadisticas" className={claseEst}>
          <img src={srcEst} alt="home icon"/>
          <p>Estadísticas</p>
        </LinkNavbar>
        <LinkNavbar as={Link} to="/perfil" className={clasePerfil}>
          <img src={srcPerfil} alt="home icon"/>
          <p>Perfil</p>
        </LinkNavbar>
    </CntrNavbar>
  )
}

export default Navbar