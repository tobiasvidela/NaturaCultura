'use strict';

// - Redirigir
const credits = document.querySelector('#creditos'),
      iconos = document.querySelectorAll('.materia-icono');

credits.addEventListener('click', () => {
    swal({
        text: 'Portafolio Web',
        buttons: {
            no: {
                text: 'Permanecer aquí',
                value: 'stay',
            },
            si: {
                text: 'Ir a la página',
                value: 'leave',
            },
        },
    })
    .then(value => {
        switch (value) {
            case "stay":
                break;
            case "leave":
                swal({
                    title: 'En breve irás allí',
                });
                setTimeout(() => {
                    window.open('https://tobiasvidela.github.io/CV-Portfolio-TUVG/','_self');
                }, 2000);
                break;
        };
    });
});

iconos.forEach(i => {
    i.addEventListener('click', () => {
        swal({
            text: `Estás por ir a ${i.name}`,
            buttons: {
                no: {
                    text: 'VOLVER',
                    value: 'stay',
                },
                si: {
                    text: `${i.name}`,
                    value: 'leave',
                },
            },
        })
        .then(value => {
            switch (value) {
                case "stay":
                    break;
                case "leave":
                    swal({
                        title: `En breve irás a ${i.name}`,
                        timer: 2000,
                    });
                    setTimeout(() => {
                        window.open(`./pages/${i.name}.html`,'_self');
                    }, 2500);
                    break;
            };
        });
    });
});