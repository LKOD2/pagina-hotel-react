import React from "react";


export function Servicio({titulo, imagen}){

    return(
        <div className="bloque-img">
            <img src={imagen} alt="" />
            <div className="cont-texto-bloque">
                <h2>{titulo}</h2>
                <button className="boton" type="button">Ver Mas</button>
            </div>
        </div>
    )
}