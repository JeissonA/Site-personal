document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencia al botón de imagen y al audio
    var toggleButton = document.getElementById('toggleButton');
    var audio = document.getElementById('audio1');

    // Variable para rastrear el estado actual del audio
    var isMuted = false;

    // Función para mutear o desmutear el audio y cambiar la imagen del botón
    function toggleMute() {
        if (audio.muted) {
            audio.muted = false; // Desmutear si ya está mutado
            toggleButton.src = '/img/mute.png'; // Cambiar la imagen a "unmute.png"
        } else {
            audio.muted = true; // Mutear si no está mutado
            toggleButton.src = '/img/unmute.png'; // Cambiar la imagen a "mute.png"
        }
    }

    // Agregar un event listener para el clic en el botón de imagen
    toggleButton.addEventListener('click', toggleMute);
});


window.addEventListener('load', function() {
    var audio = document.getElementById('audio1');
    audio.play();
});

document.addEventListener("DOMContentLoaded", function() {
    // Muestra el loader al hacer clic en un enlace
    document.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var targetSectionId = this.getAttribute('href');
            var targetSection = document.querySelector(targetSectionId);
            
            // Oculta todas las secciones
            document.querySelectorAll('.section').forEach(function(section) {
                section.classList.remove('active');
            });

            // Muestra el loader
            document.getElementById('loader').style.display = 'block';
            
            // Simula una carga (puede ser una petición AJAX, etc.)
            setTimeout(function() {
                // Oculta el loader después de un tiempo de espera (simulado)
                document.getElementById('loader').style.display = 'none';
                // Muestra la sección destino
                targetSection.classList.add('active');
            }, 2000); // Simulando una carga de 2 segundos
        });
    });
});

