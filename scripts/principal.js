'use strict';

/**
 * Acordeones de la página principal de cada materia
 */


const unidades = document.querySelectorAll('.unidad');
const acordeones = document.querySelectorAll('.acordeon');

acordeones.forEach(acordeon => {
    let h2 = acordeon.firstElementChild;
    h2.addEventListener('click', () => {
        acordeon.classList.toggle('abierto');

        let h2Icon = acordeon.firstElementChild.firstElementChild;

        for (let el of acordeon.children) {
            if (el != acordeon.firstElementChild) {
                if (acordeon.classList.contains('abierto')) {
                    el.style.display = 'block';
                    h2Icon.classList.replace('fa-caret-down','fa-caret-up');
                };
                if (!acordeon.classList.contains('abierto')) {
                    el.style.display = 'none';
                    h2Icon.classList.replace('fa-caret-up','fa-caret-down');
                };
            };
        };
    });
});

unidades.forEach(u => {
    let stateTemas = false;
    let unidadTitulo = u.childNodes[1];
    
    unidadTitulo.addEventListener('click', () => {
        const uTemas = u.childNodes[3];
        
        if (!stateTemas) {
            uTemas.style.display = 'flex';
            stateTemas = true;
        } else {
            uTemas.style.display = 'none';
            stateTemas = false;
        };
    });
});
