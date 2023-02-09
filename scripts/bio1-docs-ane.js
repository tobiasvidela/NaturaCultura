'use strict';


/**
 * GENERAL ELEMENTS
 */

const output8 = document.querySelector('.output');
const temas8 = document.querySelectorAll('.tema > h6');
const descarga8 = document.querySelector('.descarga');
const storedPDF8 = localStorage.getItem('storedPDF8');

/**
 * BOTANICA
*/

if (storedPDF8 && output8) {
    output8.setAttribute('src', `../content/${storedPDF8}`);
    descarga8.setAttribute('href', `../content/${storedPDF8}`);
};

temas8.forEach(t => {
    t.addEventListener('click', () => {

        let path = t.dataset.dir;
        let redir = t.dataset.redir;
        
        if (redir) {
            localStorage.setItem('storedPDF8', `${path}`);
            window.location.href = redir;
        };

        output8.setAttribute('src', `../content/${path}`);
        descarga8.setAttribute('href', `../content/${path}`);
    });
});

