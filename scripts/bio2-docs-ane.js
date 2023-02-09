'use strict';


/**
 * GENERAL ELEMENTS
 */

const output5 = document.querySelector('.output');
const temas5 = document.querySelectorAll('.tema > h6');
const descarga5 = document.querySelector('.descarga');
const storedPDF5 = localStorage.getItem('storedPDF5');

/**
 * BOTANICA
*/

if (storedPDF5 && output5) {
    output5.setAttribute('src', `../content/${storedPDF5}`);
    descarga5.setAttribute('href', `../content/${storedPDF5}`);
};

temas5.forEach(t => {
    t.addEventListener('click', () => {

        let path = t.dataset.dir;
        let redir = t.dataset.redir;
        
        if (redir) {
            localStorage.setItem('storedPDF5', `${path}`);
            window.location.href = redir;
        };

        output5.setAttribute('src', `../content/${path}`);
        descarga5.setAttribute('href', `../content/${path}`);
    });
});

