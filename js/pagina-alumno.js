

import { tokenAlumno } from "./peticiones-http.js";


let alumno = JSON.parse(localStorage.getItem("alumno"));

tokenAlumno(alumno.token).then(respuesta => {


    console.log(respuesta.expiry);

    console.log(respuesta.nombre);

}).catch(err => {



});




