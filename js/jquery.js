//'use strict';
const hello = 'hello';
console.log(hello);

const board = document.querySelector('.board');
console.log(board);

const cardsDom = board.querySelectorAll('.card');
console.log(cardsDom);

const cards = ['ciri.png', 'geralt.png', 'iorweth.png', 'jaskier.png', 'jaskier.png', 'iorweth.png', 'triss.png', 'geralt.png', 'yen.png', 'ciri.png', 'triss.png', 'yen.png', 'ioweth.png'];
console.log(cards);

let oneVisible = false;

let turnCounter = 0;

let visibleNumber = '';

let lock = false;

let pairsLeft = 6;

function revealCard(number) {



  const clickedElement = this;

  const clickedCard = clickedElement.getAttribute('id');

  number = clickedCard.replace('c', '');

  let opacityValue = $('#c' + number).css('opacity');

  if (opacityValue != 0 && lock == false) {

    lock = true;

    //alert('opacity: ' + opacityValue);

    let picture = 'url(/images/gwent/' + cards[number] + ')';

    $('#' + clickedCard).css('background-image', picture);

    $('#' + clickedCard).addClass('cardA');

    $('#' + clickedCard).removeClass('card');


    if (oneVisible == false) {
      oneVisible = true;
      visibleNumber = number;
      lock = false;

    } else {

      if (cards[visibleNumber] == cards[number]) {
        setTimeout(function () { hide2Cards(number, visibleNumber); }, 750);


        //alert('para');
      }
      else {
        setTimeout(function () { restore2Cards(number, visibleNumber); }, 1000);
      }



      turnCounter++;
      $('.score').html('Turn counter: ' + turnCounter);
      oneVisible = false;
    }
  }
}

const hide2Cards = function (nr1, nr2) {
  $('#c' + nr1).css('opacity', '0%');
  $('#c' + nr2).css('opacity', '0%');

  pairsLeft--;

  if (pairsLeft == 0) {
    $('.board').html('<h1>You win!<br> Done in ' + turnCounter + ' turns</h1><br><br><span class="reset" onclick="location.reload()">' + 'Jeszcze raz?' + '</span>');
  }
  lock = false;
};

const restore2Cards = function (nr1, nr2) {
  $('#c' + nr1).css('background-image', 'url("/images/gwent/karta.png")');

  $('#c' + nr1).addClass('card');

  $('#c' + nr1).removeClass('cardA');

  $('#c' + nr2).css('background-image', 'url("/images/gwent/karta.png")');

  $('#c' + nr2).addClass('card');

  $('#c' + nr2).removeClass('cardA');

  lock = false;
};


const addClickListenersToCart = function () {

  for (let clickedCard of cardsDom) {
    clickedCard.addEventListener('click', revealCard);
  }
};

addClickListenersToCart();


