
import { loginAlumno } from './peticiones-http.js';
import diccionario from '../message-err.js';
import { mensageLoginError } from './funciones.js';

const enviarAliasCode = document.querySelector('#boton');
enviarAliasCode.addEventListener('click', () => {

    const alias = document.querySelector('#alias').value,
        code = document.querySelector('#code').value;

    loginAlumno({
        alias: alias,
        code: code
    }).then(alumno => {

        localStorage.setItem("alumno", JSON.stringify(alumno));
        window.location.href = 'pagina-alumno.html';

    }).catch(err => {

        mensageLoginError(diccionario[err.message]);
        setTimeout(() => location.href = 'http://localhost/login-interacis/', 1000);
    });
});


