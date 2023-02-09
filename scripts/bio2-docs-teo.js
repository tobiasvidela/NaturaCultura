'use strict';


/**
 * GENERAL ELEMENTS
 */

const output3 = document.querySelector('.output');
const temas3 = document.querySelectorAll('.tema > h6');
const descarga3 = document.querySelector('.descarga');
const storedPDF3 = localStorage.getItem('storedPDF3');

/**
 * BOTANICA
*/

if (storedPDF3 && output3) {
    output3.setAttribute('src', `../content/${storedPDF3}`);
    descarga3.setAttribute('href', `../content/${storedPDF3}`);
};

temas3.forEach(t => {
    t.addEventListener('click', () => {
        
        let path = t.dataset.dir;
        let redir = t.dataset.redir;
        
        if (redir) {
            localStorage.setItem('storedPDF3', `${path}`);
            window.location.href = redir;
        };

        output3.setAttribute('src', `../content/${path}`);
        descarga3.setAttribute('href', `../content/${path}`);
    });
});

