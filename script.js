const api_url = 'https://jsonplaceholder.typicode.com';

const HTMLresponse = document.querySelector('#app');
const ul = document.createDocumentFragment('ul');

fetch(`${api_url}/users`)
    .then(response => response.json())
    .then(users => {
        users.forEach(user => {
            let elem = document.createElement('li');
            elem.appendChild(document.createTextNode(`${user.name} ~ ${user.email}`));
            ul.appendChild(elem);
        });
        HTMLresponse.appendChild(ul);

        // const template = users.map(user =>`<li>${user.name} ~ ${user.username}</li>`)
        // HTMLresponse.innerHTML = `<ul>${template}</ul>`;
    });






// const xhr = new XMLHttpRequest();

// function onRequestHandler() {
//     if (this.readyState === 4 && this.status === 200) {
//         // 0 = UNSET, no se ha llamado al método open
//         // 1 = OPENED, se ha llamado al método open
//         // 2 = HEADERS_RECEIVED, se está llamando al método send
//         // 3 = LOADING, está recibiendo la respuesta, está cargando
//         // 4 = DONE, se ha completado la operación
//         const data = JSON.parse(this.response); //parsear el JSON y guardarlo en data
//         const HTMLresponse = document.querySelector('#app');

//         const template = data.map( (user) => `<li>${user.name} | ${user.email}</li>` );
//         HTMLresponse.innerHTML = `<ul>${template}</ul>`;
//     };
// };

// xhr.addEventListener('load', onRequestHandler);
// xhr.open('GET', `${api_url}/users`);
// xhr.send();