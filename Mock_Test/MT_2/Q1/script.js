const box = document.querySelector('.box');
box.addEventListener('click', () => {
    box.classList.toggle('yellow');
    if (box.classList.contains('yellow')) {
        box.style.width = '600px';
        box.style.height = '600px';
    } else {
        box.style.width = '300px';
        box.style.height = '300px';
    }
});