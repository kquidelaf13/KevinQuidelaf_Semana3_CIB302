// Animación al hacer scroll
const elementos = document.querySelectorAll(".fade-in");

function mostrarElementos() {
    elementos.forEach(el => {
        const top = el.getBoundingClientRect().top;
        const visible = window.innerHeight - 100;

        if (top < visible) {
            el.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", mostrarElementos);
window.addEventListener("load", mostrarElementos);


// Formulario interactivo
document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let respuesta = document.getElementById("respuesta");

    if (nombre === "" || email === "") {
        respuesta.style.color = "red";
        respuesta.textContent = "Por favor completa los campos obligatorios.";
    } else {
        respuesta.style.color = "green";
        respuesta.textContent = "¡Gracias " + nombre + "! Te contactaremos pronto.";
        document.getElementById("formulario").reset();
    }

// Mostrar con animación
    respuesta.classList.add("mostrar");

    setTimeout(() => {
        respuesta.classList.remove("mostrar");
    }, 4000);
});
