'use strict';


/**
 * GENERAL ELEMENTS
 */

const output7 = document.querySelector('.output');
const temas7 = document.querySelectorAll('.tema > h6');
const descarga7 = document.querySelector('.descarga');
const storedPDF7 = localStorage.getItem('storedPDF7');

/**
 * BOTANICA
*/

if (storedPDF7 && output7) {
    output7.setAttribute('src', `../content/${storedPDF7}`);
    descarga7.setAttribute('href', `../content/${storedPDF7}`);
};

temas7.forEach(t => {
    t.addEventListener('click', () => {

        let path = t.dataset.dir;
        let redir = t.dataset.redir;
        
        if (redir) {
            localStorage.setItem('storedPDF7', `${path}`);
            window.location.href = redir;
        };

        output7.setAttribute('src', `../content/${path}`);
        descarga7.setAttribute('href', `../content/${path}`);
    });
});

