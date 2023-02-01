const api_url = 'https://jsonplaceholder.typicode.com';

const xhr = new XMLHttpRequest();

function onRequestHandler() {
    if (this.readyState === 4 && this.status === 200) {
        // 0 = UNSET, no se ha llamado al método open
        // 1 = OPENED, se ha llamado al método open
        // 2 = HEADERS_RECEIVED, se está llamando al método send
        // 3 = LOADING, está recibiendo la respuesta, está cargando
        // 4 = DONE, se ha completado la operación
        console.log(this.response)
    };
};

xhr.addEventListener('load', onRequestHandler);
xhr.open('GET', `${api_url}/users`);
xhr.send();