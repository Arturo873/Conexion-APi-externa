import React,{useEffect,useState} from "react"; //manejan efectos y estados
//componentes
import { todosPersonajes } from "./ConexionAPI";
import { MonstrarImagen } from "./MonstrarImagen";


export function Personajes(){
    //array personajes, setPersonajes actualiza el estado de los personajes
    const[personajes,setPersonajes]=useState(null)
    
    useEffect(()=>{//useEffect maneja los efectos
        //toma los datos de todosPersonajes desde la api y la carga(estado) de los personajes usando setPersonajes
        todosPersonajes(setPersonajes)

    },[])//[]= se ejecuta una vez al iniciar
    
                
    if(personajes!=null){
        
        return (
            <div className="container "> 
                <div className="row">

                    {personajes.map((personaje) =>(//recorre los personajes (ciclo)
                
                        <div className="text-center col-md-3 ">
                            <div className="bg-dark text-white mb-3">
                                
                                {/*info personaje*/}
                                <br></br>
                                <MonstrarImagen urlIngresada={personaje.img} />
                                <br></br>
                                <br></br>
                                <p>Name: {personaje.name}</p>
                                <p>Age: {personaje.age}</p>
                                <p>Residence: {personaje.residence}</p>
                                <p>Occupation: {personaje.occupation}</p>
                                <p>Gender: {personaje.gender}</p>
                                <br></br>
                            </div>
                                
                        </div>
                        
                   
                    ))}
                </div>
            
            </div> )
    }else{
        return (<div> NO hay personajes</div>)
    }
    
};

