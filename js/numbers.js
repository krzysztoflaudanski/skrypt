'use strict';

const hello = 'hello';
console.log(hello);

const submitTwo = document.getElementById('submit-two').onclick = function () { checkTwo(); };

const submit = document.getElementById('submit').onclick = function () { check(); };

function check() {
  let number = document.getElementById('number').value;
  if (number > 0) document.getElementById('result').innerHTML = 'positive';
  if (number < 0) document.getElementById('result').innerHTML = 'negative';
  if (number == 0) document.getElementById('result').innerHTML = 'zero';
  if (number == '') document.getElementById('result').innerHTML = 'empty field';
}


const checkTwo = function () {

  let numberTwo = document.getElementById('number-two').value;
  console.log(numberTwo);
  let numberThree = document.getElementById('number-three').value;
  console.log(numberThree);
  let napis = '';
  let i = '';

  for (i == numberTwo; i <= numberThree; i++) {
    console.log(i);
    napis = napis + i + ' ';
  }
  document.getElementById('result-two').innerHTML = napis;

  for (i == numberThree; i <= numberTwo; i++) {
    napis = i + ' ' + napis;
  }
  document.getElementById('result-two').innerHTML = napis;

  if (numberTwo == numberThree) document.getElementById('result-two').innerHTML = 'duce';
  console.log(napis);
};



