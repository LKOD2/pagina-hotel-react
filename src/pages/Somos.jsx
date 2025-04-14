import React from "react";

const Somos = ()=>{
    return(
        <section className="somos" id="somos">

            <div className="baner" style= {{ backgroundImage: 'url(/images/lobby-1.jpg)'}}>
                <div className="cont-titulo-baner">
                    <p></p>
                    <h1>Nuestra compañia</h1>
                    
                </div>
                
            </div>
            
            <section className="navegacion-2">
                <nav className="cont-nav">
                    <ul>
                        <li><a href="#valores">Valores</a></li>
                        <li><a href="#historia">Historia</a></li>
                        <li><a href="#vision">Compromiso</a></li>
                    </ul>
                </nav>
            </section>
            
            
            <section className="valores" id="valores">
                <div className="cont-valores">
                    <div className="cont-g">
                        <h2>Misión</h2>
                        <p>
                            Nuestra misión en "Warriot" es superar las expectativas de nuestros huéspedes en cada 
                            interacción, ofreciendo un servicio impecable, instalaciones de primera clase y experiencias 
                            memorables que reflejen la esencia de la cultura argentina. Nos comprometemos a mantener los 
                            más altos estándares de calidad y a cuidar cada detalle para garantizar que cada estancia con 
                            nosotros sea única y satisfactoria.
                        </p>
                    </div>
                    <div className="cont-g">
                        <h2>Visión</h2>
                        <p>
                            En "Warriot", aspiramos a ser el epítome de la hospitalidad porteña, donde cada huésped 
                            se sumerge en la rica cultura y el encanto de Buenos Aires mientras disfruta de una experiencia 
                            de alojamiento excepcional. Nos esforzamos por ser reconocidos como el destino preferido para 
                            quienes buscan una combinación perfecta de elegancia, autenticidad y servicio personalizado.
                        </p>
                    </div>
                    <div className="cont-g">
                        <h2>Objetivo</h2>
                        <p>
                            Nuestro objetivo principal es proporcionar a nuestros huéspedes una experiencia 
                            verdaderamente inolvidable, donde puedan descubrir la pasión y el ritmo de Buenos Aires mientras se 
                            sumergen en un ambiente de lujo y comodidad. Buscamos crear un hogar lejos del hogar para nuestros 
                            visitantes, donde puedan sentirse bienvenidos, seguros y completamente atendidos en todo momento.
                        </p>
                    </div>
                </div>
                    
            </section>
            
            
            <section className="historia" id="historia">
            
                <h1 className="titulo-body">Historia</h1>
            
                <div className="cont-historia">
                    <div className="cont-img" style= {{ backgroundImage: 'url(images/hotel-antiguo.jpg)'}}></div>
                    
                    <div className="cont-texto">
                        <h2>Nuestro inicio</h2>
                        <p>Hace décadas, en el corazón de Buenos Aires, un apasionado empresario del mundo del tango 
                            y la hospitalidad decidió convertir una antigua casona en un refugio de elegancia y encanto. 
                            Inspirado por la rica cultura porteña, fundó "Warriot", un hotel que pronto se convirtió en 
                            un ícono de la ciudad. Con el paso de los años, "Warriot" ha acogido a viajeros de todo el mundo, 
                            ofreciéndoles una experiencia única que fusiona la tradición y la modernidad en un ambiente de lujo 
                            y calidez. Hoy, seguimos siendo fieles a esa visión, comprometidos a brindar a nuestros huéspedes una 
                            estancia inolvidable en el corazón de Buenos Aires.
                        </p>
                    </div>
                </div>
            </section>
            
            
            
            <section className="vision" id="vision">
            
                <h1 className="titulo-body">Compromiso</h1>
            
                <div className="cont-vision">
                    <div className="cont-texto">
                        <h2>Comprometidos con nuestros huespedes</h2>
                        <p>En "Warriot", nuestra visión es ser el destino de elección para aquellos que buscan 
                            sumergirse en la esencia vibrante y cultural de Buenos Aires mientras disfrutan del 
                            más alto nivel de hospitalidad y servicio. Nos esforzamos por ofrecer a nuestros huéspedes 
                            una experiencia que trascienda las expectativas, combinando la elegancia clásica con comodidades 
                            modernas en un ambiente acogedor y sofisticado. Nos comprometemos a preservar y celebrar la rica 
                            historia y tradiciones de la ciudad, mientras nos adaptamos a las necesidades y deseos cambiantes 
                            de nuestros huéspedes. Con pasión y dedicación, aspiramos a ser reconocidos como el punto de referencia 
                            en hospitalidad argentina, donde cada visita se convierte en una experiencia inolvidable de lujo, cultura y calidez humana.
                        </p>
                    </div>
            
                    <div className="cont-img" style= {{ backgroundImage: 'url(images/hotel-antiguo.jpg)'}}></div>
                </div>
            </section>
            
        </section>


    )
}

export default Somos;