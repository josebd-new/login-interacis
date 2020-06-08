
import { loginAlumno } from './peticiones-http.js';
import { errorApiAlumno, capturarAliasCode } from './funciones.js';

const enviarAliasCode = document.querySelector('#boton');
enviarAliasCode.addEventListener('click', () => {

    const alias = document.querySelector('#alias').value,
        code = document.querySelector('#code').value;

    loginAlumno({
        alias: alias,
        code: code
    }).then(alumno => {

        window.location.href = 'pagina-alumno.html';

        capturarAliasCode(alumno);

    }).catch(err => {

        errorApiAlumno(err);
    });
});
