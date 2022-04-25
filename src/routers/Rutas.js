import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from '../components/Inicio'
import Home from '../components/Home'
import Login from '../components/Login'
import Perfil from '../components/Perfil'
import Estadisticas from '../components/Estadisticas'
import Cuestionario from '../components/Cuestionario'
import Registro from '../components/Registro'
import InformacionAdmin from '../components/InformacionAdmin'

const Rutas = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="*" element={<Inicio/>} />
            <Route exact path="/home" element={<Home/>} />
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/estadisticas" element={<Estadisticas/>} />
            <Route exact path="/perfil" element={<Perfil/>} />
            <Route exact path="/preguntas/:categ" element={<Cuestionario/>} />
            <Route exact path="/registro" element={<Registro/>} />
            <Route exact path="/administracion" element={<InformacionAdmin/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Rutas