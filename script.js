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
