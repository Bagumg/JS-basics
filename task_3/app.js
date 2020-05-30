const wrap = document.querySelector('.wrap');
const span = document.querySelector('span');
const button = document.querySelector('button');

function addHidden () {
    wrap.classList.add('hidden');
}

function remiveHidden () {
    wrap.classList.remove('hidden');
}

span.addEventListener('click', addHidden);
button.addEventListener('click', remiveHidden);
