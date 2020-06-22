

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
    document.querySelector('#contenido').innerHTML = `<img src="${url}"/>`;
    modal.style.display = "block";

}