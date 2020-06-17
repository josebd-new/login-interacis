//import { crearModal } from './modal.js';


const nombreTiempoAlumno = (nombre, expiry) => {

    let div = document.createElement('div');
    div.id = 'nombretiempo';
    div = document.body.appendChild(div);
    div.innerHTML = `<span>Nombre: ${nombre} </span> <span>Fecha: ${expiry} </span>`;
}

const enunciadoActividadAlumno = (actividades) => {

    for (const enun of actividades) {

        let div = document.createElement('div');
        div.id = 'enunciado';
        div = document.querySelector('div').appendChild(div);
        div.innerHTML = div.addEventListener('click', () => {

            crearModal(enun.enunciado);

        });

    }
}

const crearModal = (enunciado) => {

    let html = `<button id="myBtn">Open Modal</button>

                    <!-- The Modal -->
                    <div id="myModal" class="modal">

                    <!-- Modal content -->
                    <div class="modal-content">
                        <span class="close">&times;</span>
                        <p>${enunciado}</p>
                    </div>

                    </div>`


    let div = document.createElement('div');
    div.innerHTML = `${html}`;


    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    //var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    div.onclick = function () {
        modal.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
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