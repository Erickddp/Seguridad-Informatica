// Seleccionamos todos los botones
const botones = document.querySelectorAll('.btn');

// Función para agrandar el botón al hacer hover
botones.forEach(boton => {
    boton.addEventListener('mouseover', function() {
        boton.style.transform = "scale(1.1)";
        boton.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    });

    boton.addEventListener('mouseout', function() {
        boton.style.transform = "scale(1)";
        boton.style.boxShadow = "none";
    });
});
