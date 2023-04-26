'use strict';
const hello = 'hello';
console.log(hello);

let number = Math.floor(Math.random() * 5) + 1;
console.log(number);

let timer1 = 0;
let timer2 = 0;

function changeSlideTwo() {
  clearTimeout(timer1);
  clearTimeout(timer2);
  disAppear();

  const clickedElement = this;

  let imageId = clickedElement.getAttribute('id');
  console.log(imageId);

  number = imageId - 1;

  setTimeout('changeSlide()', 500);
}

function disAppear() {
  $('#slider').fadeOut(500);
}

function changeSlide() {
  number++; if (number > 5) number = 1;
  console.log(number);

  let slide = '<img src=\"images/slide' + number + '.jpg\">';
  console.log(slide);

  document.getElementById('slider').innerHTML = slide;
  $('#slider').fadeIn(500);

  timer1 = setTimeout('changeSlide()', 5000);
  timer2 = setTimeout('disAppear()', 4500);
}

changeSlide();

function addClickListenersToSlide() {

  const imageLinks = document.querySelectorAll('span');
  console.log(imageLinks);

  for (let imageLink of imageLinks) {

    imageLink.addEventListener('click', changeSlideTwo);
  }

}

addClickListenersToSlide();
