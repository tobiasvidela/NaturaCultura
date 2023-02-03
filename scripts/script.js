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
                    let firstLetter = i.name.substring(0,1).toUpperCase();
                    let name = i.name.substring(1,i.name.length).toLowerCase();
                    let final = firstLetter + name;

                    if (final.includes('Biologia')) {
                        if (final.endsWith('-i')) {
                            let i = final.lastIndexOf('i');
                            final = 'Biologia-I';
                        } else {
                            final = 'Biologia-II';
                        };
                    };

                    setTimeout(() => {
                        window.open(`https://tobiasvidela.github.io/NaturaCultura/pages/${final}.html`,'_self');
                    }, 2500);
                    break;
            };
        });
    });
});