

import { tokenAlumno, actividadesAlumno } from './peticiones-http.js';
import { nombreTiempoAlumno, enunciadoActividadAlumno, mensageApiError } from './funciones.js';
import diccionario from '../message-err.js';

let alumno = JSON.parse(localStorage.getItem('alumno'));

tokenAlumno(alumno.token).then(respuesta => {

    let fechaExpiracion = moment(respuesta.expiry);
    let fechaActual = moment();
    const diferencia = fechaExpiracion.diff(fechaActual, 'days');

    nombreTiempoAlumno(respuesta.nombre, fechaExpiracion, diferencia);

}).catch(err => {

    mensageApiError(diccionario[err.message]);
    setTimeout(() => location.href = 'http://localhost/login-interacis/', 1500);

});

actividadesAlumno(alumno.token).then(respActividades => {

    enunciadoActividadAlumno(respActividades);

}).catch(err => {

    // mensageApiError(diccionario[err.message]);
    setTimeout(() => location.href = 'http://localhost/login-interacis/', 1000);

});

