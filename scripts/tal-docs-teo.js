'use strict';


/**
 * GENERAL ELEMENTS
 */

const output9 = document.querySelector('.output');
const temas9 = document.querySelectorAll('.tema > h6');
const descarga9 = document.querySelector('.descarga');
const storedPDF9 = localStorage.getItem('storedPDF9');

/**
 * BOTANICA
*/

if (storedPDF9 && output9) {
    output9.setAttribute('src', `../content/${storedPDF9}`);
    descarga9.setAttribute('href', `../content/${storedPDF9}`);
};

temas9.forEach(t => {
    t.addEventListener('click', () => {

        let path = t.dataset.dir;
        let redir = t.dataset.redir;
        
        if (redir) {
            localStorage.setItem('storedPDF9', `${path}`);
            window.location.href = redir;
        };

        output9.setAttribute('src', `../content/${path}`);
        descarga9.setAttribute('href', `../content/${path}`);
    });
});

