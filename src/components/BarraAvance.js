import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Avance, BarraAvanceFondo, BarraAvanceSelect, BtnSalir, CntrBarraAvance, CntrVidas } from '../style/estilos'

const BarraAvance = ({vidas, avance}) => {

    const valorWidth = (avance*100);
    const navigate = useNavigate()

  return (
    <Avance>
        <BtnSalir onClick={()=>(navigate("/home"))}>
            <img src="https://res.cloudinary.com/veronicaduque/image/upload/v1650752810/Daily%20Bits/icons/Property_1_x_sxh8ow.svg"  alt="salir"/>
        </BtnSalir>
        <CntrBarraAvance>
            <BarraAvanceFondo/>
            <BarraAvanceSelect style={{"width":`${valorWidth}%`}} />
        </CntrBarraAvance>
        <CntrVidas>
            <img src="https://res.cloudinary.com/veronicaduque/image/upload/v1650752809/Daily%20Bits/icons/Property_1_heart_mxasiz.svg" alt="heart"/>
            <p>{vidas}</p>
        </CntrVidas>
    </Avance>
  )
}

export default BarraAvance