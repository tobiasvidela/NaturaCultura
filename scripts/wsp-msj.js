const icono = document.querySelector('#wsp-msj');

icono.addEventListener('click', () => {
    window.open('https://api.whatsapp.com/send?phone=542657208977&text=Estás%20por%20enviar%20un%20mensaje%20a%20Vanina%20Débora%20Guliotti.','_blank','noopener noreferrer');
});