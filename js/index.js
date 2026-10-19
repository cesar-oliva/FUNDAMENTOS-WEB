//JAVASCRIPT//

const formulario = document.getElementById("formulario");
const resultado = document.getElementById("resultado");

const progreso = document.getElementById("progreso");
const textoProgreso = document.getElementById("texto-progreso");
const botonAvanzar = document.getElementById("avanzar");

const conocimiento = document.getElementById("conocimiento");
const textoConocimiento = document.getElementById("texto-conocimiento");

// Procesar el formulario
formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const curso = document.getElementById("curso").value;

    resultado.textContent =
        "¡Inscripción registrada en esta página, " +
        nombre +
        "! Curso seleccionado: " +
        curso +
        ".";

});

// Actualizar el progreso
botonAvanzar.addEventListener("click", function() {

    if (progreso.value < progreso.max) {
        progreso.value++;
    }

    textoProgreso.textContent =
        progreso.value +
        " de " +
        progreso.max +
        " lecciones completadas.";

    if (progreso.value === Number(progreso.max)) {
        botonAvanzar.disabled = true;
        botonAvanzar.textContent = "¡Curso completado!";
    }

});

// Simular un cambio en el nivel de conocimientos
conocimiento.addEventListener("click", function() {

    if (conocimiento.value < 100) {
        conocimiento.value += 10;
    } else {
        conocimiento.value = 0;
    }

    textoConocimiento.textContent =
        "Nivel actual: " +
        conocimiento.value +
        " de 100.";

});

// Limpiar el resultado cuando se reinicia el formulario
formulario.addEventListener("reset", function() {

    resultado.textContent =
        "Todavía no enviaste el formulario.";

});
