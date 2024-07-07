import React from "react"


//corta la url para poder mostrar la imagen
export function MonstrarImagen({urlIngresada}){
    
    if (typeof urlIngresada !== 'string') {
        return <div>Imagen sin direccion URL</div>;
    }
    //let url = "https://static.wikia.nocookie.net/shingekinokyojin/images/9/93/Armin_Arlelt_%28Anime%29_character_image.png/revision/latest/scale-to-width-down/350?cb=20210322005647";
    let url=urlIngresada
    let palabra = "png";
    let posicion = url.indexOf(palabra);

    if (posicion !== -1) {
        let urlCortada = url.substring(0, posicion + palabra.length);
        return ( <img src={urlCortada} class="card-img-center" width={250} height={250}></img>);
        //img-fluid
    } else {
        return (<div> La imagen no esta en formato</div>)
    }
   

}


