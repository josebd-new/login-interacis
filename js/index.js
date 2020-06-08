
import { loginAlumno } from './peticiones-http.js';


const enviarAliasCode = document.querySelector('#boton');
enviarAliasCode.addEventListener('click', () => {

    const alias = document.querySelector('#alias').value,
        code = document.querySelector('#code').value;

    loginAlumno({
        alias: alias,
        code: code
    }).then(alumno => {

        console.log(alumno.alias);
        console.log(alumno.expediente);
        console.log(alumno.id_objetivo);

    }).catch(err => {

        (err === 401) ? console.log('Usuario incorrecto') : console.log('no es');

        const span = document.createElement('span');
        document.querySelector('#info').appendChild(span);
        span.innerHTML = `El usuario es incorrecto`;



    });

});
