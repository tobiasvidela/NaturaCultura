'use strict';


/**
 * GENERAL ELEMENTS
 */

const output11 = document.querySelector('.output');
const temas11 = document.querySelectorAll('.tema > h6');
const descarga11 = document.querySelector('.descarga');
const storedPDF11 = localStorage.getItem('storedPDF11');


/**
 * BOTANICA
*/

if (storedPDF11 && output11) {
    output11.setAttribute('src', `../content/${storedPDF11}`);
    descarga11.setAttribute('href', `../content/${storedPDF11}`);
};

temas11.forEach(t => {
    t.addEventListener('click', () => {
        let path = t.dataset.dir;
        let redir = t.dataset.redir;
        
        if (redir) {
            localStorage.setItem('storedPDF11', `${path}`);
            window.location.href = redir;
        };

        output11.setAttribute('src', `../content/${path}`);
        descarga11.setAttribute('href', `../content/${path}`);
    });
});

