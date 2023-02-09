'use strict';


/**
 * GENERAL ELEMENTS
 */

const output10 = document.querySelector('.output');
const temas10 = document.querySelectorAll('.tema > h6');
const descarga10 = document.querySelector('.descarga');
const storedPDF10 = localStorage.getItem('storedPDF10');


/**
 * BOTANICA
*/

if (storedPDF10 && output10) {
    output10.setAttribute('src', `../content/${storedPDF10}`);
    descarga10.setAttribute('href', `../content/${storedPDF10}`);
};

temas10.forEach(t => {
    t.addEventListener('click', () => {
        let path = t.dataset.dir;
        let redir = t.dataset.redir;
        
        if (redir) {
            localStorage.setItem('storedPDF10', `${path}`);
            window.location.href = redir;
        };

        output10.setAttribute('src', `../content/${path}`);
        descarga10.setAttribute('href', `../content/${path}`);
    });
});

