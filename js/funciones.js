
const nombreTiempoAlumno = (nombre, expiry, diferencia) => {

    let div = document.createElement('div');
    div.id = 'nombretiempo';
    div = document.body.appendChild(div);
    div.innerHTML = `<span>Nombre: ${nombre} </span>
    <span>Fecha de Expiración: ${expiry.format('HH:mm DD/MM/YYYY')} </span>
    <span>Te quedan: ${diferencia} Dias </span>`;
}

const enunciadoActividadAlumno = (actividades) => {

    for (const enun of actividades) {

        let div = document.createElement('div');
        div.id = 'enunciado';
        div = document.querySelector('#nombretiempo').appendChild(div);
        div.innerHTML = `<p onclick="ventanaModal('${enun.enunciado}','${enun.url}')">${enun.enunciado}</p>`;

    }

}

const mensageLoginError = (mensage) => {

    let error = document.querySelector('#info');
    error.innerHTML = `${mensage}`;

}

const mensageApiError = (mensage) => {

    let div = document.createElement('div');
    div.id = 'errorapi';
    div = document.body.appendChild(div);
    div.innerHTML = `<span>${mensage} </span>`;

}

export {

    nombreTiempoAlumno,
    enunciadoActividadAlumno,
    mensageLoginError,
    mensageApiError
}