
import React from "react"
//corta la url para poder mostrar la imagen
export function CortarUrl({urlIngresada}){
    
    if (typeof urlIngresada !== 'string') {
        return <div>Imagen sin direccion URL</div>;
    }
    //let url = "https://static.wikia.nocookie.net/shingekinokyojin/images/9/93/Armin_Arlelt_%28Anime%29_character_image.png/revision/latest/scale-to-width-down/350?cb=20210322005647";
    let url=urlIngresada
    let palabra = "png";
    let posicion = url.indexOf(palabra);

    if (posicion !== -1) {
        let urlCortada = url.substring(0, posicion + palabra.length);
        return ( <img src={urlCortada}></img>);
    } else {
        return (<div> La imagen no esta en formato</div>)
    }
   

}


/*
export function CortarUrl ({urlIngresada}){
    
    //let url = "https://static.wikia.nocookie.net/shingekinokyojin/images/9/93/Armin_Arlelt_%28Anime%29_character_image.png/revision/latest/scale-to-width-down/350?cb=20210322005647";
    let url=urlIngresada
    let palabra = "png";
    let posicion = url.indexOf(palabra);

    if (posicion !== -1) {
        let urlCortada = url.substring(0, posicion + palabra.length);
        return ( <div> {urlCortada}</div>); // Esto imprimirá "https://ejemplo.com/imagen.png"
    } else {
        return (<div> NO paso nada</div>)
    }

   
}*/
