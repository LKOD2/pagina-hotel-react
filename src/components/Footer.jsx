import React from "react";


const Footer = ()=>{
    return(
        <footer id="footer" className="footer">
        <div className="cont-footer">
            <div className="cont-logo-redes">
                <div className="cont-logo">
                <img className="logo" src="/images/LOGO-HOTEL-FINAL.png" alt="Logo del Hotel" width="100px" />
                    <h2>Warriot</h2>
                </div>
                <div className="redes">
                    <ul>
                        <li><a href="https://www.facebook.com"><i className='bx bxl-facebook-circle'></i></a></li>
                        <li><a href="https://www.instagram.com"><i className='bx bxl-instagram-alt'></i></a></li>
                        <li><i className='bx bxl-whatsapp' ></i></li>
                    </ul>
                </div>
            </div>
            
            <div className="cont-links-direccion">
                <div className="cont-direccion">
                    <p>Avda. Santa Fe 796, C1059ABO, Buenos Aires - Argentina</p>
                    <p>+56 9 55555555</p>
                </div>
                <div className="cont-links">
                    <div className="cont-res">
                        <h5>Reservas</h5>
                        <ul>
                            <li><a href="#">Modificar / Cancelar</a></li>
                            <li><a href="#">Reservar</a></li>
                            <li><a href="#">nose</a></li>
                        </ul>
                    </div>
                    
                    <div className="cont-res">
                        <h5>Ayuda</h5>
                        <ul>
                            <li><a href="#">Modificar</a></li>
                            <li><a href="#">nose</a></li>
                            <li><a href="#">nose</a></li>
                        </ul>
                    </div>
                    <div className="cont-res">
                        <h5>Sobre Nosotros</h5>
                        <ul>
                            <li><a href="#">Modificar</a></li>
                            <li><a href="#">nose</a></li>
                            <li><a href="#">nose</a></li>
                        </ul>
                    </div>
                </div>
                
            </div>
            
        </div>
    </footer>
    )
}


export default Footer;