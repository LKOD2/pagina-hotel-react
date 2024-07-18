import React, { useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";

const Header = ({ setShowLogin, handleLogout, sesionActiva }) => {
  const navigate = useNavigate();

  const mostrarMenu = () => {
    const botonMenuCerrar = document.getElementById('boton-menu-cerrar');
    const navMenu = document.getElementById('nav-menu');
    const ancho = navMenu.offsetWidth;

    if (navMenu.style.transform === `translateX(-${ancho}px)`) {
      navMenu.style.transform = `translateX(0px)`;
    } else {
      navMenu.style.transform = `translateX(-${ancho}px)`;
    }
    botonMenuCerrar.style.scale = '';
  };

  const ocultarMenu = () => {
    const botonMenuCerrar = document.getElementById('boton-menu-cerrar');
    const navMenu = document.getElementById('nav-menu');
    const ancho = navMenu.offsetWidth;

    if (navMenu.style.transform === `translateX(-${ancho}px)`) {
      navMenu.style.transform = `translateX(0px)`;
    }
    botonMenuCerrar.style.scale = '1.2';
  };

  const mostrarLogin = () => {
    setShowLogin(true);
    ocultarMenu();
  };

  const cerrarSesion = (event) => {
    if (event.target.value === "cerrar-sesion") {
      navigate("/");
      handleLogout();
    }
  };

  useEffect(() => {
    if (sesionActiva) {
      const btnUsuario = document.getElementById('btn-usuario');
      if (btnUsuario) {
        btnUsuario.innerHTML = sesionActiva;
      }
    }
  }, [sesionActiva]);

  return (
    <header>
      <div className="cont-header-1">
        <div className="cont-logo">
          <Link to=""><img className="logo" src="/images/LOGO-HOTEL-FINAL.png" alt="" width="50px"></img></Link>
          <Link to="" style={{ textDecoration: 'none' }}><h2>Warriot</h2></Link>
        </div>
        
        <nav className="nav navegacion">
          <Link to="/" id="boton-home-1" className="boton-home">Home</Link>
          <Link to="/somos" id="boton-somos-1" className="boton-somos">Quienes somos</Link>
          <Link to="/contacto" id="boton-contacto-1" className="boton-contacto">Contacto</Link>
          {sesionActiva ? (
            <>
              <Link to="reservar" id="boton-reservar-1" className="boton-reservar">Reservar</Link>
              <select onChange={cerrarSesion} name="select" id="user-select" className="menu-usuario" defaultValue="user-name">
                <option value="user-name" id="btn-usuario">Usuario</option>
                <option value="cerrar-sesion" id="btn-cerrar-sesion">Cerrar Sesión</option>
              </select>
            </>
          ) : (
            <button id="boton-login-1" className="boton-login boton-nav" type="button" onClick={mostrarLogin}>Login</button>
          )}
        </nav>

        <div className="boton-menu" id="boton-menu" onClick={mostrarMenu}>
          <i className='bx bx-menu open'></i>
        </div>
      </div>

      <nav className="nav nav-menu" id="nav-menu">
        <div className="titulo-menu">
          <h3>Menu</h3>
          <i className='bx bx-x close boton-menu' id="boton-menu-cerrar" onClick={ocultarMenu}></i>
        </div>

        <Link to="/" id="boton-home" className="boton-home">Home</Link>
        <Link to="/somos" id="boton-somos" className="boton-somos">Quienes somos</Link>
        <Link to="/contacto" id="boton-contacto" className="boton-contacto">Contacto</Link>
        
        {sesionActiva ? (
          <>
            <Link to="/reservar" id="boton-reservar" className="boton-reservar">Reservar</Link>
            <select onChange={cerrarSesion} name="select" id="user-select" className="menu-usuario" defaultValue="user-name">
              <option value="user-name" id="btn-usuario">Usuario</option>
              <option value="cerrar-sesion" id="btn-cerrar-sesion">Cerrar Sesión</option>
            </select>
          </>
        ) : (
          <button id="boton-login-1" className="boton-login boton-nav" type="button" onClick={mostrarLogin}>Login</button>
        )}
      </nav>
    </header>
  );
};

export default Header;
