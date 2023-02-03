'use strict';

/**
 * Plantilla secundaria
 */

const unidades = document.querySelectorAll('.acordeones > h2');

unidades.forEach(u => {
    u.addEventListener('click', () => {
        u.classList.toggle('abierta');
        let flecha = u.firstElementChild;
        let temas = u.nextElementSibling;
        
        if (u.classList.contains('abierta')) {
            temas.style.display = 'flex';
            flecha.classList.replace('fa-caret-down','fa-caret-up');
        } else {
            temas.style.display = 'none';
            flecha.classList.replace('fa-caret-up','fa-caret-down');
        };
    });
});
