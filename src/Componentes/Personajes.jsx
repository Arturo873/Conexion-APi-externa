import React,{useEffect,useState} from "react";
import { todosPersonajes } from "./ConexionAPI";
import { MonstrarImagen } from "./MonstrarImagen";


export function Personajes(){
    const[personajes,setPersonajes]=useState(null)
    
    useEffect(()=>{
        todosPersonajes(setPersonajes)

    },[])
    
                    
    
  
    if(personajes!=null){
        
        
        return (
            <div className="container "> 
                <div className="row">

                    {personajes.map((personaje) =>(
                
                        <div className="text-center col-md-3 ">
                            <div className="bg-dark text-white mb-3">
                                
                                <br></br>
                                <MonstrarImagen urlIngresada={personaje.img} />
                                <br></br>
                                <br></br>
                                <p>Name:{personaje.name}</p>
                                <p>Age:{personaje.age}</p>
                                <p>Residence:{personaje.residence}</p>
                                <p>Occupation:{personaje.occupation}</p>
                                <p>Gender:{personaje.gender}</p>
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

