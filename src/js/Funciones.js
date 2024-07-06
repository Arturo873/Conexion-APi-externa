import axios from "axios";

const todosPersonajes = async(state) =>{
    //const peticion = await axios.get("https://gateway.marvel.com/v1/public/characters?&ts=1000&apikey=d98af50351103612df989ad7feef11f8&hash=dc32f1c7b045ac5a8f26ad17c299cce8");
    //Todos con foto const peticion = await axios.get("https://api.attackontitanapi.com/characters?status=deceased")
    const peticion = await axios.get("https://api.attackontitanapi.com/characters?status=deceased")
    state(peticion.data.results)
}

export {todosPersonajes}




