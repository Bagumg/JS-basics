const buttons = document.querySelectorAll('button');

buttons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        handleClick(event);
    })
});

function handleClick(clickedButtonEvent) {
    const cardNode = clickedButtonEvent.target.parentNode;
    
    const card = {
        wrap: cardNode,
        img: cardNode.querySelector('img'),
        productName: cardNode.querySelector('.productName'),
        button: cardNode.querySelector('button')
    };

    const textOnButton = card.button.innerText;

    if (textOnButton === 'Подробнее') {
        showMoreText(card);
    } else if (textOnButton === 'Отмена') {
        hideMoretext(card);
    }
}

function showMoreText (card) {
    card.img.style.display = 'none';
    const text = 'JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. '
    card.productName.insertAdjacentHTML('afterend', `<div class="desc">${text}</div>`);
    card.button.innerText = 'Отмена'
}

function hideMoretext (card) {
    card.img.style.display = 'block';
    card.wrap.querySelector('.desc').remove();
    card.button.innerText = 'Подробнее'
}