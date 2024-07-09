import axios from "axios";//AXIOS para hacer las solicitudes http.

//realiza solicutud a la API
const todosPersonajes = async(state) =>{//las funciones asincronas se usan para solicitudes htttp, en forma de promesa 
    //solicitud http a la url
    //const peticion = await axios.get("https://gateway.marvel.com/v1/public/characters?&ts=1000&apikey=d98af50351103612df989ad7feef11f8&hash=dc32f1c7b045ac5a8f26ad17c299cce8");
    const peticion = await axios.get("https://api.attackontitanapi.com/characters?status=alive&occupation=soldier")
    //await espera que se complete el get desde la api y se reciban los datos
    state(peticion.data.results)//se asignan los datos a la constante peticion
}

export {todosPersonajes}



