// Creare un articolo con il pulsante dopo aver creato il titolo e una breve descrizione

let input = document.querySelector('input');
let textarea = document.querySelector('textarea');
let button = document.querySelector('button');
let articolo = document.querySelector('.articolo');

button.addEventListener('click', () => {
    let date = new Date();
    let formatDate = date.toLocaleDateString();

    if (input.value == '' && textarea.value == '') {
        alert (`Inserire almeno un campo per creare l'articolo`);
    }
    else {
        let section = document.createElement('section');
        section.style.backgroundColor = 'lightblue';
        section.style.width = '30%';
        section.innerHTML = `<h3>${input.value}</h3> <p>${textarea.value}</p> <i>${formatDate}</i>`;
        articolo.appendChild(section);
        input.value = '';
        textarea.value = '';
    }

});