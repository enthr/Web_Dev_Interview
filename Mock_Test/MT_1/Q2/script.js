const form = document.querySelector('.container__form');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const password = document.querySelector('#password');
const age = document.querySelector('#age');
const gender = document.querySelector('#gender');
const date = document.querySelector('#date');
const color = document.querySelector('#color');

const checkInputs = () => {
    // Get input values
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const passwordValue = password.value.trim();
    const ageValue = age.value.trim();
    const genderValue = gender.value.trim();
    const dateValue = date.value.trim();
    const colorValue = color.value.trim();

    // Validate each input
    if (nameValue === '') {
        alert('Please Enter a name');
        return;
    }

    if (nameValue.length < 10 || nameValue.length > 50) {
        alert('Name must be at least 3 characters long and less than 50 characters long');
        return;
    }

    if (emailValue === '') {
        alert('Please enter an email');
        return;
    }

    if (phoneValue === '') {
        alert('Please enter a phone number');
        return;
    }

    if (passwordValue === '') {
        alert('Please enter a password');
        return;
    }

    if (ageValue === '') {
        alert('Please enter your age');
        return;
    }

    if (isNaN(ageValue) || parseInt(ageValue) < 18) {
        alert('Please enter a valid age');
        return;
    }

    if (genderValue === '') {
        alert('Please select a gender');
        return;
    }

    if (dateValue === '') {
        alert('Please select a date');
        return;
    }

    if (colorValue === '') {
        alert('Please select a color');
        return;
    }

    // All inputs are valid
    alert('Form submitted successfully!');
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
});
