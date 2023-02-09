'use strict';


/**
 * GENERAL ELEMENTS
 */

const output6 = document.querySelector('.output');
const temas6 = document.querySelectorAll('.tema > h6');
const descarga6 = document.querySelector('.descarga');
const storedPDF6 = localStorage.getItem('storedPDF6');

/**
 * BOTANICA
*/

if (storedPDF6 && output6) {
    output6.setAttribute('src', `../content/${storedPDF6}`);
    descarga6.setAttribute('href', `../content/${storedPDF6}`);
};

temas6.forEach(t => {
    t.addEventListener('click', () => {

        let path = t.dataset.dir;
        let redir = t.dataset.redir;
        
        if (redir) {
            localStorage.setItem('storedPDF6', `${path}`);
            window.location.href = redir;
        };

        output6.setAttribute('src', `../content/${path}`);
        descarga6.setAttribute('href', `../content/${path}`);
    });
});

