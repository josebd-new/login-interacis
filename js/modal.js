

const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];

span.onclick = () => {

    modal.style.display = "none";

}

window.onclick = event => {

    if (event.target == modal) {
        modal.style.display = "none";

    }

}

window.ventanaModal = (enunciado, url) => {

    document.querySelector('#cabecera-modal').innerHTML = enunciado;
    let contenido = document.querySelector('#contenido');
    contenido.innerHTML = `<img src="${url}"/>`;

    modal.style.display = "block";

    let img = document.querySelector('#contenido>img');

    window.onresize = resizeImg;

    resizeImg();

    function resizeImg() {

        const relation = contenido.clientHeight * 0.5;

        img.style.maxWidth = `${contenido.clientHeight - relation}px`;
        img.style.maxHeight = `${contenido.clientWidth - relation}px`;

    }

}