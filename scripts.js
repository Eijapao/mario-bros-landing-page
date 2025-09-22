

const form = document.querySelector(".formulario")
const mascara = document.querySelector(".mascara-formulario")



function Cliqueaqui() {
    form.style.left = "50%";
    form.style.transform = "translate(-50%)";
    mascara.style.visibility = "visible";
}

function EsconderForms() {
    form.style.left = "-230px";
    mascara.style.visibility = "hidden";
    mascara.style.transition = "visibility 1s ease-in-out";
}