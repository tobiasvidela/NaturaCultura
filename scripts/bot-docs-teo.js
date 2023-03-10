'use strict';


/**
 * GENERAL ELEMENTS
 */

const output = document.querySelector('.output');
const temas = document.querySelectorAll('.tema > h6');
const descarga = document.querySelector('.descarga');
const storedPDF = localStorage.getItem('storedPDF');

/**
 * BOTANICA
*/

if (storedPDF && output) {
    output.setAttribute('src', `../content/${storedPDF}`);
    descarga.setAttribute('href', `../content/${storedPDF}`);
};

temas.forEach(t => {
    t.addEventListener('click', () => {

        let path = t.dataset.dir;
        let redir = t.dataset.redir;
        
        if (redir) {
            localStorage.setItem('storedPDF', `${path}`);
            window.location.href = redir;
        };

        output.setAttribute('src', `../content/${path}`);
        descarga.setAttribute('href', `../content/${path}`);
    });
});

