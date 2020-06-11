

import { tokenAlumno, actividadesAlumno, resolucionActividades } from "./peticiones-http.js";
import { nombreTiempoAlumno, enunciadoActividadAlumno } from './funciones.js';

let alumno = JSON.parse(localStorage.getItem("alumno"));

tokenAlumno(alumno.token).then(respuesta => {

    nombreTiempoAlumno(respuesta.nombre, respuesta.expiry);

}).catch(err => {

    console.log(err);

});

actividadesAlumno(alumno.token).then(respActividades => {

    enunciadoActividadAlumno(respActividades);

}).catch(err => {

    console.log(err);

});

console.log(alumno.token);
/* resolucionActividades(alumno.token).then(resolucion => {


    //  console.log(resolucion);


}).catch(err => {

    console.log(err);

}); */