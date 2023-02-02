'use strict';

// - Redirigir
const credits = document.querySelector('#creditos'),
      iconos = document.querySelector('.materia-icono');

credits.addEventListener('click', () => {
    swal({
        title: 'Creditos',
    });
});