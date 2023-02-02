'use strict';

/**
 * Página Teoria
 */

const unidades = document.querySelectorAll('.acordeones > h2');

unidades.forEach(u => {
    u.addEventListener('click', () => {
        u.classList.toggle('abierta');
        let flecha = u.firstElementChild;
        let temas = u.nextElementSibling;
        for (let i = 0; i < temas.children.length; i++) {
            let tema = temas.children[i];
            console.log(tema)
            // tema.style.display = 'block';
        }
        if (u.classList.contains('abierta')) {
            temas.style.display = 'flex';
            flecha.classList.replace('fa-caret-down','fa-caret-up');
        } else {
            temas.style.display = 'none';
            flecha.classList.replace('fa-caret-up','fa-caret-down');
        };
    });
});
