'use strict';
const hello = 'hello';
console.log(hello);

const board = document.querySelector('.board');
console.log(board);

const cardsDom = board.querySelectorAll('.card');
console.log(cardsDom);

const cards = ['ciri.png', 'geralt.png', 'jaskier.png', 'jaskier.png', 'jaskier.png', 'iorweth.png', 'triss.png', 'geralt.png', 'yen.png', 'ciri.png', 'triss.png', 'yen.png', 'ioweth.png'];
console.log(cards);

function revealCard(number) {
  const clickedElement = this;

  const clickedCard = clickedElement.getAttribute('id');

  number = clickedCard.replace('c', '');

  let picture = 'url(/images/gwent/' + cards[number] + ')';

  $('#' + clickedCard).css('background-image', picture);
}

const addClickListenersToCart = function () {

  for (let clickedCard of cardsDom) {
    clickedCard.addEventListener('click', revealCard);
  }
};

addClickListenersToCart();


