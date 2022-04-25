import React from 'react'
import { Link } from 'react-router-dom'
import { Cntr, ParHome, CntrCateg } from '../style/estilos'
import Navbar from './Navbar'

const Home = () => {
  return (
    <Cntr>
        <ParHome>Practica tus conocimientos en la categoria que prefieras</ParHome>
        <CntrCateg>
          <Link className='link-categ-home' to={`/preguntas/html`}>
            <img src="https://res.cloudinary.com/veronicaduque/image/upload/v1650841885/Daily%20Bits/imagesd/Ellipse_9_vsmd0e.png" alt="logo html"/>
            <p>HTML</p>
          </Link>
          <Link className='link-categ-home' to={`/preguntas/css`}>
            <img src="https://res.cloudinary.com/veronicaduque/image/upload/v1650841987/Daily%20Bits/imagesd/Ellipse_9_1_zuawap.png" alt="logo css"/>
            <p>CSS</p>
          </Link>
          <Link className='link-categ-home' to={`/preguntas/js`}>
            <img src="https://res.cloudinary.com/veronicaduque/image/upload/v1650841987/Daily%20Bits/imagesd/Ellipse_9_2_uc28uk.png" alt="logo javascript"/>
            <p>JS</p>
          </Link>
          <Link className='link-categ-home' to={`/preguntas/figma`}>
            <img src="https://res.cloudinary.com/veronicaduque/image/upload/v1650841987/Daily%20Bits/imagesd/Ellipse_9_3_gsc8y4.png" alt="logo figma"/>
            <p>FIGMA</p>
          </Link>
          <Link className='link-categ-home' to={`/preguntas/ux`}>
            <img src="https://res.cloudinary.com/veronicaduque/image/upload/v1650841987/Daily%20Bits/imagesd/Ellipse_9_4_x929bc.png" alt="logo ux"/>
            <p>UX</p>
          </Link>
        </CntrCateg>
        <Navbar select={"home"}/>
    </Cntr>
  )
}

export default Home