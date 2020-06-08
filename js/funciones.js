

const errorApiAlumno = (err) => {

    if (err === 401) {

        const span = document.createElement('span');
        document.querySelector('#info').appendChild(span);
        span.innerHTML = '<h4>El usuario es incorrecto</h4>';
    }
}
// pruebas
const capturarAliasCode = ({ nombre }) => {

    enviarPaginaAlumno(nombre);
    return console.log(nombre);

}

const enviarPaginaAlumno = (nombre) => {

    return console.log(nombre);


}

export {
    errorApiAlumno,
    capturarAliasCode,
    enviarPaginaAlumno
}