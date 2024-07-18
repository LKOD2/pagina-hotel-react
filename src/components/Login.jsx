import React, { useState } from "react";

const Login = ({setShowLogin, handleLogin}) => {
    const [userValido, setUserValido] = useState(false);
    const [claveValida, setClaveValida] = useState(false);
    const [usuarios, setUsuarios] = useState([{user: 'diego', clave: 1234}]);

    // Función para validar el usuario en el formulario de login
    const validarUserLogin = () => {
        const userLogin = document.getElementById('user-login');
        const userLoginError = document.getElementById('user-login-error');
        const contEntradaUser = document.getElementById('cont-input-user');
        const userLoginIcono = document.getElementById('user-login-icono');

        const user = userLogin.value;

        if (user.length < 3 || user.length > 15) {
            contEntradaUser.style.borderBottomColor = 'red';
            userLoginIcono.style.color = 'red';
            userLoginError.innerHTML = '*El usuario no es válido';
            setUserValido(false);
        } else {
            contEntradaUser.style.borderBottomColor = '#a49264';
            userLoginIcono.style.color = 'white';
            userLoginError.innerHTML = '';
            setUserValido(true);
        }
    };

    // Función para validar la clave en el formulario de login
    const validarClaveLogin = () => {
        const claveLogin = document.getElementById('clave-login');
        const claveLoginError = document.getElementById('clave-login-error');
        const contEntradaClave = document.getElementById('cont-input-clave');
        const claveLoginIcono = document.getElementById('clave-login-icono');

        const clave = claveLogin.value;
        const regex = /^\d{4}$/;

        if (!regex.test(clave)) {
            contEntradaClave.style.borderBottomColor = 'red';
            claveLoginIcono.style.color = 'red';
            claveLoginError.innerHTML = '*La contraseña no es válida';
            setClaveValida(false);
        } else {
            contEntradaClave.style.borderBottomColor = '#a49264';
            claveLoginIcono.style.color = 'white';
            claveLoginError.innerHTML = '';
            setClaveValida(true);
        }
    };

    // Manejar el submit del formulario de login
    const iniciarSesion = (event) => {
        event.preventDefault();
        const userLogin = document.getElementById('user-login');
        const claveLogin = document.getElementById('clave-login');
        const formLogin = document.getElementById('form-login');

        if (userValido && claveValida) {
            console.log('Usuario y clave válidos');
            const user = usuarios.find(usuario => usuario.user === userLogin.value && usuario.clave === parseInt(claveLogin.value));

            console.log(userLogin.value, user);

            if (!user) {
                alert('El usuario o contraseña no son validos');

            }else{
                alert('ingreso exitoso')
                formLogin.reset(); 
                handleLogin(user.user);
                console.log(user.user);        
            }
        } else {
            console.log('Enfocar');
            if (!userValido) {
                userLogin.focus();
            } else if (!claveValida) {
                claveLogin.focus();
            }
        }
    };


    const mostrarRegistro = (event)=> {
        event.preventDefault();
        const contForm = document.getElementById('cont-form')   
        contForm.classList.add('activo') 
    };

    const mostrarLogin = (event)=> {
        event.preventDefault();
        const contForm = document.getElementById('cont-form')   
        contForm.classList.remove('activo')
    };

    const ocultarLogin = ()=>{
        window.onclick = function(event) {
            const contLogin = document.getElementById('cont-login');
            if (event.target === contLogin) {
                setShowLogin(false);
            }
        }
    }


    return (
        <div className="contenedor-login" id="cont-login" onClick={ocultarLogin}>

            <div className="cont-form" id="cont-form">
                
                {/* <img class="img" src="/PAGINA-HOTEL-SPA/images/LOGO-HOTEL-FINAL.png" alt="">  */}

                <form action="" id="form-login" className="formulario form-login" onSubmit={iniciarSesion}>
                    
                    <h1 id="titulo-form-login" className="titulo-form">Login</h1>

                    <div className="cont-entrada" >
                        <div className="cont-input" id="cont-input-user">
                            <label htmlFor="user-login"><i className='bx bx-user' id="user-login-icono"></i></label>
                            <input className="entrada" type="text" id="user-login" name="usuario" required placeholder="Usuario" onBlur={validarUserLogin}/>
                        </div>
                        <label htmlFor="user-login" className="user-login-error" id="user-login-error"></label>
                    </div>


                    <div className="cont-entrada">
                        <div className="cont-input" id="cont-input-clave">
                            <label htmlFor="clave-login"><i className='bx bx-lock-alt' id="clave-login-icono"></i></label>
                            <input className="entrada" type="password" id="clave-login" name="clave" required placeholder="Contraseña" onBlur={validarClaveLogin}/>
                        </div>
                        <label htmlFor="user-login" className="user-login-error" id="clave-login-error"></label>
                    </div>


                    <a className="olvidaste" href="#">¿Olvidaste tu contraseña?</a>

                    <div className="cont-botones">
                        <input className="boton" type="submit" value="Login"/>
                    </div>
                    

                    <p>No tienes cuenta?<a href="#" className="link-registro" id="link-login" onClick={mostrarRegistro}>Register</a></p>
                    
                </form>

                <form action="" id="form-registro" className="formulario form-registro">
                    
                    <h1 id="ini-sesion" className="titulo-form">Registro</h1>

                    <div className="cont-doble-entrada">
                        <div className="cont-nombre cont-entrada">
                            <div className="cont-input">
                                <label htmlFor="nombre-registro"><i className='bx bx-user' ></i></label>
                                <input className="entrada ent-reg" type="text" id="nombre-registro" name="nombre" required placeholder="Nombre"/> 
                            </div>
                            <label htmlFor="nombre-registro" className="user-login-error" id="nombre-registro-error"></label> 
                        </div>
                        <div className="cont-apellido cont-entrada">
                            <div className="cont-input">
                                <label htmlFor="apellido-registro"><i className='bx bx-user' ></i></label>
                                <input className="entrada ent-reg" type="text" id="apellido-registro" name="apellido" required placeholder="Apellido"/> 
                            </div>
                            <label htmlFor="apellido-registro" className="user-login-error" id="apellido-registro-error"></label> 
                        </div>
                    </div>

                    <div className="cont-entrada">
                        <div className="cont-input">
                            <label htmlFor="email-registro"><i className='bx bx-envelope'></i></label>
                            <input className="entrada ent-reg" type="email" id="email-registro" name="email" required placeholder="Email"/> 
                        </div>
                        <label htmlFor="email-registro" className="user-login-error" id="email-registro-error"></label> 
                    </div>

                    <div className="cont-entrada">
                        <div className="cont-input" id="cont-reg-user">
                            <label htmlFor="user-registro"><i className='bx bx-user' id="user-reg-icono"></i></label>
                            <input className="entrada ent-reg" type="text" id="user-registro" name="usuario" required placeholder="User"/> 
                        </div>
                        <label htmlFor="user-registro" className="user-login-error" id="user-registro-error"></label> 
                    </div>
                    <div className="cont-doble-entrada">
                        <div className="cont-entrada">
                            <div className="cont-input">
                                <label htmlFor="clave-1-reg"><i className='bx bx-lock-alt' ></i></label>
                                <input className="entrada ent-reg" type="password" id="clave-1-reg" name="clave" required placeholder="Contraseña"/>
                            </div>
                            <label htmlFor="clave-1-reg" className="user-login-error" id="clave-1-reg-error"></label> 
                        </div>

                        <div className="cont-entrada">
                            <div className="cont-input">            
                                <label htmlFor="clave-2-reg"><i className='bx bx-lock-alt' ></i></label>
                                <input className="entrada ent-reg" type="password" id="clave-2-reg" name="clave" required placeholder="Confirm contraseña"/>
                            </div>
                            <label htmlFor="clave-2-reg" className="user-login-error" id="clave-2-reg-error"></label> 
                        </div>
                    </div>
                    <div className="cont-botones">
                        <input className="boton" type="submit" value="Registrarse"/>
                    </div>
                    

                    <p>Ya tienes cuenta?<a href="#" className="link-registro" id="link-registro" onClick={mostrarLogin}>login</a></p>
                    
                </form>
            </div>
            
        </div>

    );
};

export default Login;
