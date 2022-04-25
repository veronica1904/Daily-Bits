import React, { useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Categoria from '../helpers/Categoria'
import { guardarInformacion } from '../helpers/Usuario'
import { Cntr, CntrPregunta, TextPreguntas, Opcion, CntrOpciones, BtnComprobar } from '../style/estilos'
import BarraAvance from './BarraAvance'

const Cuestionario = () => {

    const [preg, setPreg] = useState(0)
    const [vidas, setVidas] = useState(4)
    const [resultado, setResultado] = useState("")
    const [acierto, setAcierto] = useState(0)
    const [clase, setClase] = useState("d-none")
    const [correctas, setCorrectas] = useState(0)
    const [inicio, setInicio] = useState(new Date())
    const navigate = useNavigate()
    const {categ} = useParams()
    const preguntas = Categoria(categ)
    const preguntaActual = preguntas[preg]
    const {pregunta, a, b, c, imagen, correct} = preguntaActual
    const cantidadPreg = preguntas.length
    const avance = (preg)/cantidadPreg

    useEffect(()=>{
      setInicio(Date.now)
    },[])

    const cambiarPregunta = async () =>{
        if((preg===(cantidadPreg-1))||(vidas===0)){
          await guardarInformacion(correctas, preg+1, inicio)
          navigate("/home")
        } else{
          setPreg(preg+1)
          setAcierto(0)
          setClase("d-none")
          setResultado("")
        }
    }

    const seleccionarOpcion = (val) =>{

      if(val===correct){
        setResultado("¡Buen trabajo!")
        setAcierto(1)
      } else{
        setResultado(`La respuesta correcta es: ${correct}`)
        setAcierto(0)
      }

    }

    const validarRespuesta = () =>{
       if(acierto===0){
         setClase("resp-incorrecta")
         setVidas(vidas-1)
       } else{
         setClase("resp-correcta")
         setCorrectas(correctas+1)
       }
    }

  return (
    <Cntr>
      <BarraAvance vidas={vidas} avance={avance} />
      <CntrPregunta>
        <img className='img-pregunta' src={imagen} alt='img pregunta'/>
        <TextPreguntas>{pregunta}</TextPreguntas> 
      </CntrPregunta>
      <CntrOpciones>
        <Opcion
            type="radio"
            label={a}
            value={a}
            name={"opcion"}
            onClick = {()=>(seleccionarOpcion(a))}
        />
        <Opcion
            type="radio"
            label={b}
            value={b}
            name={"opcion"}
            onClick = {()=>(seleccionarOpcion(b))}
        />
        <Opcion
            type="radio"
            label={c}
            value={c}
            name={"opcion"}
            onClick = {()=>(seleccionarOpcion(c))}
        />
      </CntrOpciones>
      <BtnComprobar onClick={()=>(validarRespuesta())} >comprobar</BtnComprobar>
      <div className={clase}>
        <div>
          <p>{resultado}</p>
          <button onClick={()=>(cambiarPregunta())} >continuar</button>
        </div>
      </div>
    </Cntr>
  )
}

export default Cuestionario