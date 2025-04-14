import { useRef, useState, useEffect } from "react";
import Clima from "../components/clima";
import { Habitacion } from "../components/Habitacion";
import { Servicio } from "../components/Servicio";


const Home = () => {
    const carruselRef = useRef(null);

    let index = 0;

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

        <section className="home" id="home">
            {/* ---------------------baner------------------------- */}
            <div className="slide-baner">
                <div className="cont-titulo-baner">
                    <Clima />
                    <p>Warriot</p>
                    <h1>Buenos Aires</h1>
                </div>
                <div className="arrow-baner flecha-iz-baner" id="flecha-iz-baner" onClick={() => moverCarrusel(-1)}>
                    <i className='bx bx-chevron-left'></i>
                </div>
                <div className="arrow-baner flecha-de-baner" id="flecha-de-baner" onClick={() => moverCarrusel(1)}>
                    <i className='bx bx-chevron-right'></i>
                </div>

                <div className="carrusel-baner" ref={carruselRef}>
                    <div className="img-baner" style={{ backgroundImage: 'url(/images/baner-hotel.jpg)' }}>
                        <div>1</div>
                    </div>
                    <div className="img-baner" style={{ backgroundImage: 'url(/images/lobby-1.jpg)' }}>
                        <div>2</div>
                    </div>
                    <div className="img-baner" style={{ backgroundImage: 'url(/images/lobby-2.jpg)' }}>
                        <div>3</div>
                    </div>
                </div>
            </div>


            {/* ---------------------navegacion 2------------------------- */}
            <section className="navegacion-2">
                <nav className="cont-nav">
                    <ul>
                        <li><a href="#hoteles">Hoteles</a></li>
                        <li><a href="#habitaciones">Habitaciones</a></li>
                        <li><a href="#servicio">Servicios</a></li>
                    </ul>
                </nav>
            </section>

            {/* ---------------------hoteles------------------------- */}
            <section id="hoteles" className="hoteles">
                <h1 className="titulo-body">hoteles</h1>

                <div className="grid">
                    <div className="grid-img" style={{ backgroundImage: 'url(/images/grid-hotel-1.jpg)' }}>
                        <div className="cont-hot-texto">
                            <h2>Buenos Aires</h2>
                            <button className="boton" type="button">Ver Mas</button>
                        </div>
                    </div>

                    <div className="grid-img" style={{ backgroundImage: 'url(/images/grid-hotel-2.jpg)' }}>
                        <div className="cont-hot-texto">
                            <h2>Madrid</h2>
                            <button className="boton" type="button">Ver Mas</button>
                        </div>
                    </div>
                    <div className="grid-img" style={{ backgroundImage: 'url(/images/grid-hotel-3.jpg)' }}>
                        <div className="cont-hot-texto">
                            <h2>Roma</h2>
                            <button className="boton" type="button">Ver Mas</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------------------habitaciones------------------------- */}
            <section className="habitaciones">
                <h1 className="titulo-body">Habitaciones</h1>

                <div className="cont-habitaciones">

                    <Habitacion
                        titulo={'Habitación simple'}
                        texto={`Nuestra habitación simple es un acogedor refugio para el viajero solitario que 
                                busca comodidad y funcionalidad. Con una cama individual de lujo, un baño privado 
                                elegante y todas las comodidades modernas, esta habitación ofrece un espacio íntimo y 
                                tranquilo para relajarse después de explorar las maravillas de Buenos Aires.`}
                        imagenes={{
                            imagen1: '/images/habitacion-simple.jpg',
                            imagen2: '/images/habitacion-baño.jpg',
                            imagen3: '/images/habitacion-baño-2.jpg'
                        }}
                    />

                    <Habitacion
                        titulo={'Habitación doble'}
                        texto={`Nuestra habitación doble es ideal para parejas o amigos que viajan juntos y desean
                                compartir una experiencia de alojamiento cómoda y elegante. Con dos camas individuales
                                o una cama queen-size, un baño privado amplio y bien equipado, y una decoración acogedora
                                y contemporánea, esta habitación ofrece el espacio perfecto para descansar.`}
                        imagenes={{
                            imagen1: '/images/habitacion-doble.jpg',
                            imagen2: '/images/habitacion-baño.jpg',
                            imagen3: '/images/habitacion-baño-2.jpg'
                        }}
                    />

                    <Habitacion
                        titulo={'Suite'}
                        texto={`Nuestra suite es el epítome del lujo y la sofisticación. Con un amplio dormitorio
                                con una lujosa cama king-size y un baño de mármol con
                                bañera de hidromasaje, ofreciendo un espacio generoso y refinado para los
                                huéspedes más exigentes. Disfrute de vistas panorámicas de la ciudad desde su
                                ventana y sumérjase en un oasis de confort y estilo en el corazón de Buenos Aires.`}
                        imagenes={{
                            imagen1: '/images/habitacion-suite.jpg',
                            imagen2: '/images/habitacion-baño.jpg',
                            imagen3: '/images/habitacion-baño-2.jpg'
                        }}
                    />

                </div>
            </section>

            {/* ---------------------servicios------------------------- */}
            <section id="servicio" className="servicio">
                <h1 className="titulo-body">Servicios</h1>

                <div className="bloque">

                    <Servicio titulo={'lala'} imagen={"/images/servicios-gym.jpg"}/>


                    <div className="bloque-img" style={{ backgroundImage: 'url(/images/servicios-gym.jpg)' }}>
                        <div className="cont-texto-bloque">
                            <h2>Gimnacio</h2>
                            <button className="boton" type="button">Ver Mas</button>
                        </div>
                    </div>
                    <div className="bloque-img" style={{ backgroundImage: 'url(/images/habitacion-2.jpg)' }}>
                        <div className="cont-texto-bloque">
                            <h2>Comodidad</h2>
                            <button className="boton" type="button">Ver Mas</button>
                        </div>
                    </div>
                    <div className="bloque-img" style={{ backgroundImage: 'url(/images/servicios-bar.jpg)' }}>
                        <div className="cont-texto-bloque">
                            <h2>Bar</h2>
                            <button className="boton" type="button">Ver Mas</button>
                        </div>
                    </div>
                    <div className="bloque-img" style={{ backgroundImage: 'url(/images/servicios-vino.jpg)' }}>
                        <div className="cont-texto-bloque">
                            <h2>Comida</h2>
                            <button className="boton" type="button">Ver Mas</button>
                        </div>
                    </div>
                    <div className="bloque-img" style={{ backgroundImage: 'url(/images/servicios-picina.jpg)' }}>
                        <div className="cont-texto-bloque">
                            <h2>Picina</h2>
                            <button className="boton" type="button">Ver Mas</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------------------final------------------------- */}
            <section id="final" className="final">
                <div className="cont-final">
                    <div className="cont-final-img" style={{ backgroundImage: 'url(/images/final-imagen.jpg)' }}></div>
                    <div className="cont-final-texto">
                        <h2>Bienvenido a la ciudad de la furia</h2>
                        <p>
                            Recorrer las calles de la ciudad de Buenos Aires en Argentina,
                            muchas veces a través de sus adoquines, casas patrimoniales
                            y cafeterías, sin duda te transporta y te hace pensar que estás en cualquier rincón de la ciudad europea.
                        </p>
                        <button className="boton" type="button">Mas</button>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Home;
