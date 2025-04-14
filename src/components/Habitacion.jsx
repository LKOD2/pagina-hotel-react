import React, { useRef } from "react";
import { use } from "react";


export function Habitacion({titulo, texto, imagenes}) {

    const carruselRef = useRef(null)

    var index = 0;

    const moverCarrusel = (direction) => {
        const carrusel = carruselRef.current;
    
        if (carrusel) {
          const items = carrusel.children.length;
          index = (index + direction + items) % items;
    
          const ancho = carrusel.offsetWidth / 3;
          carrusel.style.transform = `translateX(-${ancho * index}px)`;
        }
    };
    

    return (
        <div className="hab">
            <div className="slide">
                <div className="arrow flecha-iz" onClick={() => moverCarrusel(-1)}>
                    <i className='bx bx-chevron-left'></i>
                </div>
                <div className="arrow flecha-de" onClick={() => moverCarrusel(1)}>
                    <i className='bx bx-chevron-right'></i>
                </div>
                <div className="carrusel" ref={carruselRef}>
                    <img src={imagenes.imagen1} alt="no" />
                    <img src={imagenes.imagen2} alt="" />
                    <img src={imagenes.imagen3} alt="" />
                </div>
            </div>
            <div className="cont-texto">
                <h2>{titulo}</h2>
                <p>
                    {texto}
                </p>
                <button className="boton" type="button">Reservar</button>
            </div>
        </div>
    )
}