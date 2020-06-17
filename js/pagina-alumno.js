

import { tokenAlumno, actividadesAlumno } from "./peticiones-http.js";
import { nombreTiempoAlumno, enunciadoActividadAlumno, mensageApiError } from './funciones.js';
import diccionario from '../message-err.js';



let alumno = JSON.parse(localStorage.getItem("alumno"));


tokenAlumno(alumno.token).then(respuesta => {

    let fechaExpiracion = moment(respuesta.expiry).format('HH:mm DD/MM/YYYY');
    let fechaActual = moment().format('HH:mm DD/MM/YYYY');
    console.log(fechaExpiracion);
    console.log(fechaActual);
    nombreTiempoAlumno(respuesta.nombre, fechaExpiracion);

    //console.log(fechaExpiracion.diff(fechaActual, 'hours'), 'horas de diferencia');

}).catch(err => {

    mensageApiError(diccionario[err.message]);

});

actividadesAlumno(alumno.token).then(respActividades => {

    enunciadoActividadAlumno(respActividades);

}).catch(err => {

    mensageApiError(diccionario[err.message]);

});

