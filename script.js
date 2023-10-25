function toggleVerMas(idElemento, idBoton) {
    var seccion = document.getElementById(idElemento);
    var boton = document.getElementById(idBoton);

    if ($(seccion).is(":hidden")) {
        // Mostrar la sección con animación
        $(seccion).slideDown("slow");
        boton.innerHTML = "Ver menos";
    } else {
        // Ocultar la sección con animación
        $(seccion).slideUp("slow");
        boton.innerHTML = "Ver más";
    }
}
