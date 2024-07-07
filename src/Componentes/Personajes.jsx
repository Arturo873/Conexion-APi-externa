import React,{useEffect,useState} from "react";
import { todosPersonajes } from "./ConexionAPI";
import { CortarUrl } from "./CortarUrl";


export function Personajes(){
    const[personajes,setPersonajes]=useState(null)
    
    useEffect(()=>{
        todosPersonajes(setPersonajes)

    },[])
    
    
  
    if(personajes!=null){
        
        
        return (<div> 
            
            
            
            {personajes.map((personaje) =>(
                
                
                <div>
                    <a href="#">{personaje.id}</a>
                    <a href="#">{personaje.name}</a>
                    <CortarUrl urlIngresada={personaje.img} />
                    
                    
                </div>

            ))}
            
        </div> )
    }else{
        return (<div> NO hay personajes</div>)
    }
    
};

