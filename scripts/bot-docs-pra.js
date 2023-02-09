'use strict';


/**
 * GENERAL ELEMENTS
 */

const output1 = document.querySelector('.output');
const temas1 = document.querySelectorAll('.tema > h6');
const descarga1 = document.querySelector('.descarga');
const storedPDF1 = localStorage.getItem('storedPDF1');

/**
 * BOTANICA
*/

if (storedPDF1 && output1) {
    output1.setAttribute('src', `../content/${storedPDF1}`);
    descarga1.setAttribute('href', `../content/${storedPDF1}`);
};

temas1.forEach(t => {
    t.addEventListener('click', () => {
        let path = t.dataset.dir;
        let redir = t.dataset.redir;
        
        if (redir) {
            localStorage.setItem('storedPDF1', `${path}`);
            window.location.href = redir;
        };

        output1.setAttribute('src', `../content/${path}`);
        descarga1.setAttribute('href', `../content/${path}`);
    });
});

