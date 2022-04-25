import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { endpoint } from '../helpers/Urls'
import { Cntr, CntrAdmin, CntrEstadistica, CntrPerfil, CntrUsuario, TituloAdmin, TituloGeneral } from '../style/estilos'

export default class InformacionAdmin extends Component {

    constructor(){
        super()
        this.state={
            usuarios:[],
            totalPreguntas:0,
            promPreguntas: 0,
            promCorrectas: 0,
            promIncorrectas:0,
            totalTiempo: 0,
            promTiempo:0,
            totalUsuarios:0
        }
    }

    componentDidMount(){

        this.getData()

    }

    async getData() {
        const resp = await fetch(endpoint);
        const data = await resp.json();
        this.setState({...this.state, usuarios: data })
        this.estadisticas(data)
    }

    estadisticas(datos) {

        let totalPreguntas = 0
        let correctas= 0
        let incorrectas = 0
        let totalTiempo=0
        const totalUsuarios = datos.length

        datos.forEach(dat=>{
            correctas += Number(dat.correctas)
            incorrectas += Number(dat.incorrectas)
            totalTiempo += (Math.round(Number(dat.tiempo)/6))*10
        })

        totalPreguntas = correctas + incorrectas
        
        const promPreguntas = Math.round(totalPreguntas/totalUsuarios)
        const promCorrectas = Math.round(correctas/totalUsuarios)
        const promIncorrectas = Math.round(incorrectas/totalUsuarios)
        const promTiempo = Math.round(totalTiempo/totalUsuarios)

        this.setState({
            ...this.state,
            totalPreguntas,
            promPreguntas,
            promCorrectas,
            promIncorrectas,
            promTiempo,
            totalUsuarios
        })

    }


  render() {
    return (
      <CntrAdmin>
        <img className="img-login" src="https://res.cloudinary.com/veronicaduque/image/upload/v1650753899/Daily%20Bits/imagesd/logopurple_a62myz.png" alt="logo"/>
        <TituloAdmin>Información de administración</TituloAdmin>
        <Link className='link-home' to="/home">Volver a la aplicación principal</Link>
        <Cntr>
            <TituloGeneral>Estadísticas generales</TituloGeneral>
            <CntrPerfil>
                <CntrEstadistica className='cntr-est'>
                    <img src='https://res.cloudinary.com/veronicaduque/image/upload/v1650752810/Daily%20Bits/icons/Property_1_message-circle_zwunvf.svg' alt="icon clock"/>
                    <p>Total usuarios</p>
                    <p className='valor'>{this.state.totalUsuarios}</p>
                </CntrEstadistica>
                <CntrEstadistica className='cntr-est'>
                    <img src='https://res.cloudinary.com/veronicaduque/image/upload/v1650752810/Daily%20Bits/icons/Property_1_message-circle_zwunvf.svg' alt="icon clock"/>
                    <p>Total preguntas respondidas</p>
                    <p className='valor'>{this.state.totalPreguntas}</p>
                </CntrEstadistica>
                <CntrEstadistica className='cntr-est'>
                    <img src='https://res.cloudinary.com/veronicaduque/image/upload/v1650752810/Daily%20Bits/icons/Property_1_message-circle_zwunvf.svg' alt="icon clock"/>
                    <p>Promedio preguntas por usuario</p>
                    <p className='valor'>{this.state.promPreguntas}</p>
                </CntrEstadistica>
                <CntrEstadistica className='cntr-est'>
                    <img src='https://res.cloudinary.com/veronicaduque/image/upload/v1650752810/Daily%20Bits/icons/Property_1_message-circle_zwunvf.svg' alt="icon clock"/>
                    <p>Promedio preguntas correctas</p>
                    <p className='valor'>{this.state.promCorrectas}</p>
                </CntrEstadistica>
                <CntrEstadistica className='cntr-est'>
                    <img src='https://res.cloudinary.com/veronicaduque/image/upload/v1650752810/Daily%20Bits/icons/Property_1_message-circle_zwunvf.svg' alt="icon clock"/>
                    <p>Promedio preguntas incorrectas</p>
                    <p className='valor'>{this.state.promIncorrectas}</p>
                </CntrEstadistica>
                <CntrEstadistica className='cntr-est'>
                    <img src='https://res.cloudinary.com/veronicaduque/image/upload/v1650752810/Daily%20Bits/icons/Property_1_message-circle_zwunvf.svg' alt="icon clock"/>
                    <p>Total tiempo de estudio</p>
                    <p className='valor'>{this.state.totalTiempo}</p>
                </CntrEstadistica>
                <CntrEstadistica className='cntr-est'>
                    <img src='https://res.cloudinary.com/veronicaduque/image/upload/v1650752810/Daily%20Bits/icons/Property_1_message-circle_zwunvf.svg' alt="icon clock"/>
                    <p>Promedio tiempo de estudio por usuario</p>
                    <p className='valor'>{this.state.promTiempo}</p>
                </CntrEstadistica>
            </CntrPerfil>
        </Cntr>
        <Cntr>
            <TituloGeneral>Informacion usuarios</TituloGeneral>
            <CntrPerfil>
                {
                    this.state.usuarios.map(user=>(
                        <CntrUsuario key={user.id}>
                            <p>Usuario: {user.nombre}</p>
                            <p>Correo: {user.correo}</p>
                        </CntrUsuario>
                    ))
                }
            </CntrPerfil>
        </Cntr>
      </CntrAdmin>
    )
  }
}
