'use strict';


/**
 * GENERAL ELEMENTS
 */

const output2 = document.querySelector('.output');
const temas2 = document.querySelectorAll('.tema > h6');
const descarga2 = document.querySelector('.descarga');
const storedPDF2 = localStorage.getItem('storedPDF2');

/**
 * BOTANICA
*/

if (storedPDF2 && output2) {
    output2.setAttribute('src', `../content/${storedPDF2}`);
    descarga2.setAttribute('href', `../content/${path}`);
};

temas2.forEach(t => {
    t.addEventListener('click', () => {
        let path = t.dataset.dir;
        let redir = t.dataset.redir;
        
        if (redir) {
            localStorage.setItem('storedPDF', `${path}`);
            window.location.href = redir;
        };

        output2.setAttribute('src', `../content/${path}`);
        descarga2.setAttribute('href', `../content/${path}`);
    });
});

