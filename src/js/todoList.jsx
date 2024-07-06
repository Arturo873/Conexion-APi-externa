import React, { Fragment, useState ,useRef} from "react";
import { TodoItem } from "./TodoItem";
import { v4 as uuid} from "uuid"; //genera ids para tareas nuevas(tambien se debe instlar por la terminar de VS)
/*
export function TodoList(){
    return <h1>hola desde TodoList</h1>
}*/

export function TodoList(){

    //useState,hace que los elemntos de la lista tengan un  estado
    const [todos,setTodos]=useState ([
        {id:1,tarea:"Identificar",completada:true},
        {id:2,tarea:"Analizar",completada:true},
        {id:3,tarea:"Diseñar",completada:true},
        {id:4,tarea:"Desarrollar",completada:false},
        {id:5,tarea:"Pruebas",completada:false},
        {id:6,tarea:"Implementar",completada:true}
    ]);

    //rescatar referencia del input
    const tareaRef=useRef()

    //metodo agregar la tarea
    const agregarTarea = () =>{
        console.log("......agregando tarea.......");
        //rescatamos valor de la referencia(input) actual
        const tarea=tareaRef.current.value;
        //generar id para la tarea
        const id=uuid();//generara un id que no este repetido
        console.log("id:" + id);
        //validamos si no esta vacio
        if(tarea === "") return; //se develde donde lo llamaron, no hace nada(si esta vacio el input retornamos a quien llamo la funcion sin devolver nada)
        //3 === (iguales) es para comparar tambien el tipo, number o string
        
        setTodos((prevTodos) => {//crea una copia
            const nuevaTarea={
                id:id,
                tarea: tarea,
                completada:false
            }
            return [...prevTodos,nuevaTarea]// los 3 puntos reacen la lista anterior con la nueva tarea
        })

        tareaRef.current.value= null;
    }

    //resumen de tareas, cuando se van a rrenderizar el nombre debe comenzar con mayuscula
    const ResumenTareas=()=>{
        const cantidad=cantidadTareas();
        return <div className="alert alert-success mt-3 mb-3 h3"> Tareas completadas: {cantidad}</div>
    }

    //las tares que estan completadas, sean true, y luego las cuenta y retorna el numero
    const cantidadTareas=()=>{
        return todos.filter((todo)=> todo.completada).length;

    }


    //metodo para cambiar los estados de las tareas
    const cambiarEstado=(id)=>{
        const newTodos=[...todos]//los lee y los deja como estaban(copia a Todoss en NewTodos)
        const todo=newTodos.find((todo)=>todo.id===id);//busca al elemento (todo) por el id
        todo.completada=!todo.completada;//cambia el estado de comletada
        setTodos(newTodos);

    }

    //metodo para filtrar y renderizar solo las tareas sin completar
    const eliminarTareas=()=>{
        const newTodos=todos.filter((todo)=>!todo.completada);//busca(filtra) todos los que tengan completada=false
        setTodos(newTodos);
    }

    //onClick permite llamar un metodo al hacer click en el boton
    return (<Fragment> 
        <h1 className="alert alert-primary h3">hola desde TodoList</h1>
        <div className="input-form-group mt-3 mb-3">
            <input type="text" className="form-control" ref={tareaRef} id="" />
            <button className="btn btn-success" onClick={agregarTarea}> + </button>
            <button className="btn btn-danger" onClick={eliminarTareas}>eliminar</button>
        </div>
            <ul>
                <li>A</li>
                <li>B</li>
                <li>C</li>
                
                {todos.map((todo)=>(
                    < TodoItem todo={todo} key={todo.id} cambiarEstado={cambiarEstado} />
                )
                )}

            </ul>
            <ResumenTareas/>
            </Fragment>)
    //el Fragment permite mandar varios, al igual que el div, pero no es editable como el div, se usa para evitar problemas en el diseño

    
    /*
    //toma la lista todos y la recorre por elemento(todo) y le saca su key , es como un for todo in todos
    {todos.map((todo)=>(
        < TodoItem todo={todo} key={todo.id} />
    )
    )}*/            

}