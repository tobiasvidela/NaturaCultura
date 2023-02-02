'use strict';

// - Redirigir
const credits = document.querySelector('#creditos'),
      iconos = document.querySelectorAll('.materia-icono');

credits.addEventListener('click', () => {
    swal({
        text: '¿Deseas redirigirte al portafolio del creador de esta página?',
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
                    icon: 'success',
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
    swal({
        text: `Estás por ir a ${i.name}`,
        buttons: {
            no: {
                text: 'Permanecer aquí',
                value: 'stay',
            },
            si: {
                text: `Ir a ${i.name}`,
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
                    icon: 'success',
                    title: `En breve irás a la materia de ${i.name}`,
                });
                setTimeout(() => {
                    window.open(`./pages/${i.name}.html`,'_self');
                }, 2000);
                break;
        };
    });
    console.log(i.name)
});