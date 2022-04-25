import axios from "axios";
import { endpoint } from "./Urls";

export const UsuarioStatus = () => {

    const usuario = localStorage.getItem("usuario");
    const valido = !(usuario===null)
    return valido

}

export const guardarUsuario = (userID) =>{

    localStorage.setItem("usuario", userID)

}

export const obtenerId = () =>{
    return localStorage.getItem("usuario")
}

export const limpiarUsuario = () =>{
    localStorage.removeItem("usuario")
}

export const crearUsuario = (nombre, correo, contraseña) =>{

    const nuevoUsuario = {nombre, correo, contraseña, "tiempo":"0", "correctas":"0", "incorrectas":"0"}

    axios.post(endpoint,nuevoUsuario)
        .then(response => {
            console.log(response.data)
            alert("El registro fue exitoso. Por favor inicia sesión")
        })
        .catch(error => console.log(error))

}

export const guardarInformacion = async (respCorrectas, respTotales, inicio) =>{

    const id = obtenerId()

    const {nombre, correo, contraseña, correctas, incorrectas, tiempo} = await ( await axios.get(endpoint+id)).data

    const newCorrectas = String(respCorrectas + Number(correctas))
    const newIncorrectas = String(respTotales-respCorrectas + Number(incorrectas))
    const final = Date.now()
    const newTiempo = String(Math.round((final-inicio)*100/(1000*60))/100 + Number(tiempo))

    const nuevaInformacion = {nombre, correo, contraseña, "correctas":newCorrectas, "incorrectas":newIncorrectas, "tiempo":newTiempo, id}

    await axios.put(endpoint+id, nuevaInformacion)
}