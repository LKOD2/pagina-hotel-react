document.addEventListener('login-activo', function() {

    const linkRegistro = document.getElementById('link-registro');
    const linkLogin = document.getElementById('link-login');

    const contForm = document.getElementById('cont-form')

    linkLogin.addEventListener('click', function(event) {
        event.preventDefault();

        contForm.classList.add('activo') 
    });

    linkRegistro.addEventListener('click', function(event) {
        event.preventDefault();

        contForm.classList.remove('activo')
    });

});


const botonLogin = document.querySelectorAll('.boton-login');

botonLogin.forEach(btnLogin =>{

    btnLogin.addEventListener('click', ()=>{

        const contLogin = document.getElementById('cont-login')

        document.dispatchEvent(new Event('login-activo'));

        if(contLogin.style.visibility == 'visible'){
            contLogin.style.visibility = 'hidden';
            btnLogin.style.backgroundColor = 'transparent';
        } else {
            contLogin.style.visibility = 'visible'; 
            btnLogin.style.backgroundColor = '#a49264';
        };
    });

})


//----------CERRAR LOGIN--------------


function ocultarLogin(){
    const contLogin = document.getElementById('cont-login');
    contLogin.style.visibility = 'hidden'
}

document.addEventListener('login-activo', ()=>{

    const contLogin = document.getElementById('cont-login');
    const contForm = document.getElementById('cont-form');

    window.onclick = function(event) {
        if (event.target === contLogin) {
            contLogin.style.visibility = 'hidden'
        }
    }
})

const usuarios = [{user: 'diego', clave: 1234}]

// ----------VALIDACION LOGIN---------

document.addEventListener('DOMContentLoaded', () => {
    const formLogin = document.getElementById('form-login');

    const userLogin = document.getElementById('user-login');
    const claveLogin = document.getElementById('clave-login');

    let userValido = false;
    let claveValida = false;

    console.log('login activo',userValido, claveValida);

    function validarUserLogin() {
        const userLoginError = document.getElementById('user-login-error');
        const contEntradaUser = document.getElementById('cont-input-user');
        const userLoginIcono = document.getElementById('user-login-icono');

        const user = userLogin.value;

        if (user.length < 3 || user.length > 15) {
            contEntradaUser.style.borderBottomColor = 'red';
            userLoginIcono.style.color = 'red';
            userLoginError.innerHTML = '*El usuario no es válido';
            return false;
        } else {
            contEntradaUser.style.borderBottomColor = '#a49264';
            userLoginIcono.style.color = 'white';
            userLoginError.innerHTML = '';
            return true;
        }
    }

    function validarClaveLogin() {
        const claveLoginError = document.getElementById('clave-login-error');
        const contEntradaClave = document.getElementById('cont-input-clave');
        const claveLoginIcono = document.getElementById('clave-login-icono');

        const clave = claveLogin.value;
        const regex = /^\d{4}$/;

        if (!regex.test(clave)) {
            contEntradaClave.style.borderBottomColor = 'red';
            claveLoginIcono.style.color = 'red';
            claveLoginError.innerHTML = '*La contraseña no es válida';
            return false;
        } else {
            contEntradaClave.style.borderBottomColor = '#a49264';
            claveLoginIcono.style.color = 'white';
            claveLoginError.innerHTML = '';
            return true;
        }
    }

    userLogin.addEventListener('blur', () => {
        userValido = validarUserLogin();
        if (!userValido) {
            userLogin.addEventListener('input', validarUserLogin);
        } else {
            userLogin.removeEventListener('input', validarUserLogin);
        }
    });

    claveLogin.addEventListener('blur', () => {
        claveValida = validarClaveLogin();
        if (!claveValida) {
            claveLogin.addEventListener('input', validarClaveLogin);
        } else {
            claveLogin.removeEventListener('input', validarClaveLogin);
        }
    });

    formLogin.addEventListener('submit', (event) => {
        event.preventDefault();

        console.log('submit login', userValido , claveValida);

        if (userValido && claveValida) {
            console.log('Usuario y clave válidos');
            const user = usuarios.find(usuario => usuario.user === userLogin.value && usuario.clave === parseInt(claveLogin.value));

            console.log(userLogin.value, user);

            if (!user) {
                alert('El usuario o contraseña no son validos');
                console.log('lista', usuarios);

            }else{
                alert('ingreso exitoso')
                formLogin.reset();                        
                iniciarSesion(user.user)
                cerrarSesion()
                console.log('lista', usuarios);
                ocultarLogin()
               
            }
        } else {
            console.log('Enfocar');
            if (!userValido) {
                userLogin.focus();
            } else if (!claveValida) {
                claveLogin.focus();
            }
        }
    });


});

function removerListeners(){
    const formLogin = document.getElementById('form-login');

    formLogin.removeEventListener('submit', ocultarLogin);

}


document.addEventListener('DOMContentLoaded', () => {

    // ----------VALIDACION REGISTRO---------

    const formRegistro = document.getElementById('form-registro');

    const nombreReg = document.getElementById('nombre-registro');
    const apellidoReg = document.getElementById('apellido-registro');
    const emailReg = document.getElementById('email-registro');
    const userReg = document.getElementById('user-registro');
    const clave1Reg = document.getElementById('clave-1-reg');
    const clave2Reg = document.getElementById('clave-2-reg');

    const validaciones = {nombre: false,apellido: false,email: false,usuario: false,clave1: false,clave2: false};

    var nomValido, apellValido, emailValido, userRegValido = false
    var clave1RegValido, clave2RegValido = false



    formRegistro.addEventListener('submit', (event) => {
        event.preventDefault();

        const allFieldsValid = Object.values(validaciones).every(state => state);

        if (allFieldsValid) {

            const index = usuarios.findIndex(usuario => usuario.user === userReg.value);

            if (index !== -1) {
                alert('El usuario ya existe');
                userReg.focus();
                const errorUser = document.getElementById('user-registro-error');
                errorUser.innerHTML = 'El usuario ya existe';
            }else{

                const user = document.getElementById('user-registro').value;
                const nombre = document.getElementById('nombre-registro').value;
                const apellido = document.getElementById('apellido-registro').value;
                const email = document.getElementById('email-registro').value;
                const clave = document.getElementById('clave-1-reg').value;

                usuarios.push({user, nombre, apellido, email, clave });

                alert('Se creo el usuario: '+ user);

                formRegistro.reset()
                ocultarLogin()
            }
        }else {
            alert('Rellena todos los campos')
        }
         
    });



    document.querySelectorAll('.entrada.ent-reg').forEach(entry => {
        entry.addEventListener('blur', (event) => {
            const idElemento = entry.getAttribute('id');
            const errorLabel = document.getElementById(`${idElemento}-error`);

            switch (idElemento) {
                case 'nombre-registro':
                    validaciones.nombre = validarCampo(entry, errorLabel, validarNombre);
                    break;
                case 'apellido-registro':
                    validaciones.apellido = validarCampo(entry, errorLabel, validarApellido);
                    break;
                case 'email-registro':
                    validaciones.email = validarCampo(entry, errorLabel, validarEmail);
                    break;
                case 'user-registro':
                    validaciones.usuario = validarCampo(entry, errorLabel, validarUsuario);
                    break;
                case 'clave-1-reg':
                    validaciones.clave1 = validarCampo(entry, errorLabel, validarClave);
                    break;
                case 'clave-2-reg':
                    const clave1 = document.getElementById('clave-1-reg');
                    let clave2valida = validarCampo(entry, errorLabel, validarClave);

                    if (clave2valida){
                        validaciones.clave2 = confirmarClave(clave1, entry, errorLabel);
                    }else{
                        errorLabel.innerHTML = '*Las claves no coinciden'
                    }

                    break;
                default:
                    break;
            }
        });
    });

    function validarCampo(entry, error, funcion){

        let valido = funcion(entry, error);

        if (!valido) {
            entry.addEventListener('input', () => funcion(entry, error));
            return valido;
        } else {
            entry.removeEventListener('input', () => funcion(entry, error));
            return valido;
        }
    }

    // Validación de nombre
    function validarNombre(entry, error) {
        const nombre = entry.value;
        if (nombre.length < 2 || nombre.length > 50) {
            error.innerHTML = '*El nombre no es válido';
            return false;
        } else {
            error.innerHTML = '';
            return true;
        }
    }

    // Validación de apellido
    function validarApellido(entry, error) {
        const apellido = entry.value;
        if (apellido.length < 2 || apellido.length > 50) {
            error.innerHTML = '*El apellido no es válido';
            return false;
        } else {
            error.innerHTML = '';
            return true;
        }
    }

    // Validación de email
    function validarEmail(entry, error) {
        const email = entry.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            error.innerHTML = '*El email no es válido';
            return false;
        } else {
            error.innerHTML = '';
            return true;
        }
    }

    // Validar usuario
    function validarUsuario(entry, error) {

        const usuario = entry.value

        if (usuario.length < 3 || usuario.length > 15) {
            error.innerHTML = '*El usuario no es válido';
            return false;
        } else {
            error.innerHTML = '';
            return true;
        }
    }

    // Validación de contraseña
    function validarClave(entry, error) {
        const clave = entry.value;

        const regex = /^\d{4}$/;

        if (!regex.test(clave)) {
            error.innerHTML = '*La contraseña no es válida';
            return false;
        } else {
            error.innerHTML = '';
            return true;
        }
    }

    // Confirmación de contraseña
    function confirmarClave(clave1, clave2, error) {
        if (clave1.value !== clave2.value) {
            error.innerHTML = '*Las contraseñas no coinciden';
            return false;
        } else {
            error.innerHTML = '';
            return true;
        }
    }

});

