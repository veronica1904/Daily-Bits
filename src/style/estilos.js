import styled from 'styled-components'
import { Form } from 'react-bootstrap'

//Container general
export const Cntr = styled.div`
    width: 375px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    @media screen and (max-width:374px){
        width: 100%
    }
`

//Estilos barra de navegacion
export const CntrNavbar = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #232e35;
    position: fixed;
    bottom: 0;
    @media screen and (max-width:374px){
        justify-content: space-around;
    }
`

export const LinkNavbar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10px 15px;
    font-size: 14px;
    font-weight: 400;
    text-decoration: none;
    color: #fffffe;
    &.select{
        color: #2cb67d;
    }
    &:nth-child(2){
        margin: 10px 70px;
    }
    @media screen and (max-width:374px){
        margin: 10px 0;
        &:nth-child(2){
        margin: 10px;
        }
    }
`

//Estilos sección inicio
export const CntrInicio = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #6b47dc;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

//Estilos seccion login
export const TituloLogin = styled.h2`
    color: white;
    font-weight: bold;
    font-size: 32px;
    line-height: 39px;
`

export const BtnGoogle = styled.button`
    width:90%;
    margin: 16px;
    padding: 12px 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: white;
    background-color: rgba(239, 69, 101, 1);
    border: none;
    border-radius: 4px;
`

//Estilos seccion registro
export const BtnRegistro = styled.button`
    width: 100%;
    border: none;
    border-radius: 16px;
    padding: 15px;
    margin: 20px 0;
    font-size: 14px;
    font-weight: 500px;
    text-transform: uppercase;
    color: #fffffe;
    background-color: #7f5af0;
`

//Estilos seccion home
export const ParHome = styled.p`
    width: 100%;
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    margin: 10px 15px;
    letter-spacing: 0.15%;
`

export const CntrCateg = styled.div`
    display: flex;
    margin-bottom: 75px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    flex-grow: 1;
    height: 100%;
`

//Estilos seccion preguntas
export const Avance = styled.div`
    width: 100%;
    margin: 8px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const BtnSalir = styled.button`
    border: none;
    background-color: transparent;
    margin: 0 5px;
`

export const CntrBarraAvance = styled.div`
    display: flex;
    margin: 0 5px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    position: relative;
`

export const BarraAvanceFondo = styled.div`
    width:100%;
    height: 10px;
    background-color: #fffffe;
    border-radius: 8px;
`

export const BarraAvanceSelect = styled.div`
    height: 10px;
    background-color: #2cb67d;
    border-radius: 8px;
    position: absolute;
    top:0;
    left: 0;
    z-index: 10;
    transition: all 0.5s ease-in-out;
`

export const CntrVidas = styled.div`
    margin: 0 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const CntrPregunta = styled.div`
    margin: 10px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`

export const TextPreguntas = styled.p`
    width: 80%;
    text-align: left;
    margin-left: 15px;
    margin-right: 10px;
    font-size:22px;
    font-weight: 700;
    line-height: 30px;
`

export const CntrOpciones = styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: flex-end;
    flex-grow: 1;
`

export const Opcion = styled(Form.Check)`
    width: 90%;
    margin: 10px 0;
    padding: 10px;
    background-color: #232e35;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
    border: 2px solid #FFFFFE;
    border-radius: 4px;
`

export const BtnComprobar = styled.button`
    width: 100%;
    border: none;
    border-radius: 16px;
    padding: 15px;
    margin: 30px 15px 15px 15px;
    font-size: 14px;
    font-weight: 500px;
    text-transform: uppercase;
    color: #fffffe;
    background-color: #7f5af0;
`

//Estilos seccion perfil
export const TituloGeneral = styled.h2`
    font-size: 22px;
    font-weight: 700;
    width: 100%;
    text-align: left;
    padding: 16px;
`

export const CntrPerfil = styled.div`
    width: 95%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`

export const NombrePerfil = styled.p`
    font-size: 16px;
    font-weight: 700;
    text-transform: capitalize;
`

export const TextoLogout = styled.p`
    font-size: 16px;
    font-weight: 700;
    color:rgba(239, 69, 101, 1);
    margin: 25px 0;
`

//Estilos estadísticas
export const CntrEstadistica = styled.div`
    width:95%;
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content:center;
    border: 1px white solid;
    border-radius: 8px;
    padding: 16px;
    margin: 8px 0;
    font-size: 16px;
`

//Estilos seccion admin
export const CntrAdmin = styled.div`
    width: 800px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    @media screen and (max-width: 799px){
        width: 100%;
    }
`

export const TituloAdmin = styled.h1`
    font-size: 25px;
    font-weight: 700;
    width: 100%;
    text-align: center;
    padding: 16px;
    color: #6b47dc;
`
export const CntrUsuario = styled.div`
    width:95%;
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content:flex-start;
    border: 1px white solid;
    border-radius: 8px;
    padding: 16px;
    margin: 8px 0;
    font-size: 16px;
`