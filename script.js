let counter = document.querySelector('.thisCounter');
let button1 = document.getElementById('lowerButton');
let button2 = document.getElementById('upperButton');


counter.innerHTML = 0;
function upCount() {
    counter.innerHTML = parseInt(counter.innerHTML) + 1;
    // ++counter.innerHTML;
}

function lowerCount() {
    counter.innerHTML = parseInt(counter.innerHTML) - 1;
    // --counter.innerHTML
}

button1.addEventListener('click', lowerCount);
button2.addEventListener('click', upCount);