import React,{useEffect,useState} from "react";
import { todosPersonajes } from "../js/Funciones";
import { CortarUrl } from "../js/CortarUrl";


export function Personajes(){
    const[personajes,setPersonajes]=useState(null)
    
    useEffect(()=>{
        todosPersonajes(setPersonajes)

    },[])
    
    
  
    if(personajes!=null){
        
        
        return (<div> 
            
            
            <CortarUrl/>
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

