const form = document.querySelector('#form');
const inputName = document.querySelector('#name');
const data = document.querySelector('#data');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameValue = inputName.value;
    const element = document.createElement('p');
    element.textContent = nameValue;
    data.appendChild(element);
});