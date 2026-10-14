
document.addEventListener("DOMContentLoaded", function () {

    // Actualizar el año automáticamente
    document.getElementById("anio-actual").textContent =
        new Date().getFullYear();

    // Buscador de películas
    const buscador = document.getElementById("buscador");
    const peliculas = document.querySelectorAll(".pelicula");
    const mensajeVacio = document.getElementById("sin-resultados");

    buscador.addEventListener("input", function () {
        const texto = buscador.value
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .trim();

        let encontradas = 0;

        peliculas.forEach(function (pelicula) {
            const nombre = pelicula.dataset.nombre
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "");

            if (nombre.includes(texto)) {
                pelicula.hidden = false;
                encontradas++;
            } else {
                pelicula.hidden = true;
            }
        });

        mensajeVacio.hidden = encontradas > 0;
    });

    // Mostrar detalles de cada película
    const botones = document.querySelectorAll(".boton-detalle");

    botones.forEach(function (boton) {
        boton.addEventListener("click", function () {
            const titulo = boton.dataset.titulo;
            const detalle = boton.dataset.detalle;

            document.getElementById("modalTitulo").textContent = titulo;
            document.getElementById("modalTexto").textContent = detalle;

            const ventana = new bootstrap.Modal(
                document.getElementById("modalPelicula")
            );

            ventana.show();
        });
    });

});
