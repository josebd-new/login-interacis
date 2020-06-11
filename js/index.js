
import { loginAlumno, errorMessage } from './peticiones-http.js';


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

    }).catch(message => {

        console.log(message);

        errorMessage(message);

    });
});


