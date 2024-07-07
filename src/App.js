import React from "react";
// se usa esta libreria porque react no maneja rutas por si mismo y AXIOS para para las peticiones
import {BrowserRouter,Routes,Route} from "react-router-dom";// se usa esta libreria porque react no 

//componentes
import {Personajes} from "./Componentes/Personajes";

export function App2(){
    return <div>
              <div className="row py-5">
                <div className="col"> 
                    <div className="border-bottom">
                        <h1 className="text-center">Attack on titan Characters</h1>
                    </div>

                </div>

            </div>
              <Personajes/>
              
            </div>
    
  
}
export default App2;

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
//export default App2;
//:id es un objeto dinamico
//path=ruta donde cargara los componentes