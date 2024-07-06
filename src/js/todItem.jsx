import React from "react";
/*
export function TodoItem(){
    return <li className="h5 text-primary">desde TodoItem</li>//con bootstrap
}*/

export function TodoItem({todo,cambiarEstado}){
    const {id,tarea,completada}=todo;
    const funcionCambiar =()=>{
        cambiarEstado(id);
    }
    return <li className="h5 text-primary">desde TodoItem: 
            <input  type="checkbox" checked={completada} className="form.check-input" onChange={{funcionCambiar}}></input>
            {tarea}</li>//con bootstrap
}