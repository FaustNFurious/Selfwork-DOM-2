// Creare un articolo con il pulsante dopo aver creato il titolo e una breve descrizione

let input = document.querySelector('input');
let textarea = document.querySelector('textarea');
let button = document.querySelector('button');
let articolo = document.querySelector('.articolo');

button.addEventListener('click', () => {
    let section = document.createElement('section');
    section.innerHTML = `<h3>${input.value}</h3> <p>${textarea.value}</p>`;
    articolo.appendChild(section);
});