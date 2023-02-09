'use strict';


/**
 * GENERAL ELEMENTS
 */

const output4 = document.querySelector('.output');
const temas4 = document.querySelectorAll('.tema > h6');
const descarga4 = document.querySelector('.descarga');
const storedPDF4 = localStorage.getItem('storedPDF4');

/**
 * BOTANICA
*/

if (storedPDF4 && output4) {
    output4.setAttribute('src', `../content/${storedPDF4}`);
    descarga4.setAttribute('href', `../content/${storedPDF4}`);
};

temas4.forEach(t => {
    t.addEventListener('click', () => {

        let path = t.dataset.dir;
        let redir = t.dataset.redir;
        
        if (redir) {
            localStorage.setItem('storedPDF4', `${path}`);
            window.location.href = redir;
        };

        output4.setAttribute('src', `../content/${path}`);
        descarga4.setAttribute('href', `../content/${path}`);
    });
});

