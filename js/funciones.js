
const nombreTiempoAlumno = (nombre, expiry) => {

    let div = document.createElement('div');
    div.id = 'nombretiempo';
    div = document.body.appendChild(div);
    div.innerHTML = `<span> ${nombre} </span>  <span> ${expiry} </span>`;
}
const enunciadoActividadAlumno = (actividades) => {

    for (const enun of actividades) {

        let div = document.createElement('div');
        div.id = 'eunciado';
        div = document.querySelector('div').appendChild(div);
        div.innerHTML = `<a href="pagina-alumno.html"> ${enun.enunciado} </a>`;
    }
}
export {

    nombreTiempoAlumno,
    enunciadoActividadAlumno

}