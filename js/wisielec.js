'use strict';

let wrongMove = 0;

let password = 'Bez pracy nie ma kołaczy';
password = password.toUpperCase();
//Zmienia znaki w haśle na wielkie litery
console.log(password);

let passwordLenght = password.length;
console.log(passwordLenght);
//pobieram długość hasła za pomocą WŁAŚCIWOŚCI LENGHT i zapisuje do zmiennnej.
//właściwość piszemy po prawej stronie po kropce, po lewej stronie kropki, do jakiego elementu ma sie odnosić

let password1 = '';

for (let i = 0; i < passwordLenght; i++) {
  // Robimy pętle for, która wykona się tyle razy, ile znaków jest w haśle.
  //rozpocznij od i=0 (ponieważ długość LENGHT stiktów zapisuje w pamięci od zera) i powtarzaj dopóki i<długość.

  if (password.charAt(i) == ' ') password1 = password1 + ' ';
  else password1 = password1 + '-';
  //W każdej iteracji pętli password1, dokleimy albo myślnik albo spację.
}

const green = new Audio('sounds/yes.wav');
const red = new Audio('sounds/no.wav') ;

function writePassword() {
  document.getElementById('board').innerHTML = password1;
}

const letter = ['A', 'B'];


//letter[0] = 'A';
//letter[1] = 'Ą';
letter[2] = 'B';
letter[3] = 'C';
letter[4] = 'Ć';
letter[5] = 'D';
letter[6] = 'E';
letter[7] = 'Ę';
letter[8] = 'F';
letter[9] = 'G';
letter[10] = 'H';
letter[11] = 'I';
letter[12] = 'J';
letter[13] = 'K';
letter[14] = 'L';
letter[15] = 'Ł';
letter[16] = 'M';
letter[17] = 'N';
letter[18] = 'Ń';
letter[19] = 'O';
letter[20] = 'Ó';
letter[21] = 'P';
letter[22] = 'Q';
letter[23] = 'R';
letter[24] = 'S';
letter[25] = 'Ś';
letter[26] = 'T';
letter[27] = 'U';
letter[28] = 'V';
letter[29] = 'W';
letter[30] = 'X';
letter[31] = 'Y';
letter[32] = 'Z';
letter[33] = 'Ż';
letter[34] = 'Ź';
//letter.push('AD');
console.log(letter);


function generateAlphabet() {

  let alphabet = '';

  for (let x = 0; x <= 34; x++) {
    alphabet = alphabet + '<div class="letter" id="lett' + x + '">' + letter[x] + '</div>';
    if ((x + 1) % 7 == 0) alphabet = alphabet + '<div class="clear"></div>';
  }

  document.getElementById('alphabet').innerHTML = alphabet;

  writePassword();
}

generateAlphabet();

String.prototype.setLetter = function (place, sign) {
  if (place > this.length - 1) return this.toString();
  else return this.substring(0, place) + sign + this.substring(place + 1);
};

function checkLetter() {
  const clickedElement = this;

  const clickedLetters = clickedElement.getAttribute('id');

  const clickedLetter = clickedLetters.replace('lett', '');

  console.log(clickedLetter);

  let hit = false;

  for (let i = 0; i < passwordLenght; i++) {
    if (password.charAt(i) == letter[clickedLetter]) {
      password1 = password1.setLetter(i, letter[clickedLetter]);
      hit = true;
    }
  }
  if (hit == true) {
    green.play();
    document.getElementById(clickedLetters).classList.add('green');

    writePassword();
  }
  else {
    red.play();
    document.getElementById(clickedLetters).classList.add('red');

    wrongMove++;

    let image = 'images/gallows/s' + wrongMove + '.jpg';

    document.getElementById('gallows').innerHTML = '<img src="' + image + '">';

    removeClickListenersToLetter();

  }

  if (password == password1)
    document.getElementById('alphabet').innerHTML = 'Wygrałeś, nie dyndasz! Podano hasło: ' + password +
      '<br><br><span class="reset" onclick="location.reload()">' + 'Jeszcze raz?' + '</span>';
  if (wrongMove>=9)
  document.getElementById('alphabet').innerHTML = 'Przegrałeś, Dyndasz! Prawidłowe hasło: ' + password +
      '<br><br><span class="reset2" onclick="location.reload()">' + 'Jeszcze raz?' + '</span>';

}

const addClickListenersToLetter = function () {
  const clikedLetters = document.querySelectorAll('div .letter');

  for (let clickedLetter of clikedLetters) {

    clickedLetter.addEventListener('click', checkLetter);

  }
};

addClickListenersToLetter();

function removeClickListenersToLetter() {
  const clikedLetters = document.getElementsByClassName('red');

  for (let clickedLetter of clikedLetters) {

    clickedLetter.removeEventListener('click', checkLetter);

  }
}
