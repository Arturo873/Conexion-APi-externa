import React from "react";
// se usa esta libreria porque react no maneja rutas por si mismo y AXIOS para para las peticiones
import {BrowserRouter,Routes,Route} from "react-router-dom";// se usa esta libreria porque react no 

//componentes
import {Personajes} from "./Componentes/Personajes";


export function App2(){//funcion exportable la funcion es exportable por eso el export
    return <div>
              <h1> Hola desde la APP2</h1>
              
              <Personajes/>
            </div>
    
  
}
//export default App2;

/*
function App() {
  return (
    <div className="App">
      <h1> Hola desde la APP</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TodoPersonajes></TodoPersonajes>}></Route>
          <Route path='/personaje/:id' element={<Personajes></Personajes>}></Route>

        </Routes>
      
      
      </BrowserRouter>
    </div>
  );
}*/
/*
export function App(){
  return <TodoList/>
}*/
export default App2;
//:id es un objeto dinamico
//path=ruta donde cargara los componentes