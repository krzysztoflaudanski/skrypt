//'use strict';

function generate() {

  let a = document.querySelector('#a').value;
  //console.log(a);
  let b = document.querySelector('#b').value;
  let ile = document.querySelector('#ile').value;
  //console.log(ile);

  a = parseFloat(a);
  b = parseFloat(b);
  ile = parseInt(ile);

  //console.log(ile);

  if (isNaN(a) || isNaN(b) || isNaN(ile) || ile < 2) {
    document.querySelector('#ciag').innerHTML = '<p>Podaj poprawne liczby</p>';
    document.querySelector('#fi').innerHTML = '';
  }
  else {

    let ciag = '<p>n<sub>x</sub></p>';
    let ratios = '<p>&Phi; = n<sub>x</sub> &divide; n<sub>x-1</sub></p>';

    if (a % 2 == 1) ciag += '<div>01 -> <span class="odd">' + a + '</span></div>';
    //(a % 2 == 1) jeżeli wartość liczby a jest nieparzysta.
    //(a % 2 == 0) jeżeli wartość liczby a jest parzysta

    else ciag += '<div>01 -> <span class="even">' + a + '</span></div>';

    if (b % 2 == 1) ciag += '<div>01 -> <span class="odd">' + b + '</span></div>';
    else ciag += '<div>02 -> <span class="even">' + b + '</span></div>';

    ratios += '<div>01 -> <span class="ratio">brak</span></div>';
    ratios += '<div>02 -> <span class="ratio">' + (b / a).toFixed(30) + '</span></div>';

    for (i = 3; i <= ile; i++) {
      bufor = a;
      a = b;
      b = bufor + b;

      if (i < 10) bufor = '0'; else bufor = '';

      if (b % 2 == 1) ciag += '<div>' + bufor + i + ' -> <span class="odd">' + b + '</span></div>';
      else ciag += '<div>' + bufor + i + ' -> <span class="even">' + b + '</span></div>';

      ratios += '<div>' + bufor + i + ' -> <span class="ratio">' + (b / a).toFixed(30) + '</span></div>';

    }

    document.querySelector('#ciag').innerHTML = ciag;
    document.querySelector('#fi').innerHTML = ratios;


    //alert(document.querySelector('#ciag').innerHTML);
    //alert(document.querySelector('#ciag').outerHTML);
    //alert(document.querySelector('#ciag').innerText);
    //alert(document.querySelector('#ciag').textContent);
  }

}

document.getElementById('generuj_ciag').addEventListener('click', generate);

document.getElementById('blockade').addEventListener('click', blockade);

function addListenersToButtonsOdd() {
  const buttonsOdd = document.getElementsByName('np');

  for (let buttonOdd of buttonsOdd) {

    buttonOdd.addEventListener('click', colorsOdd);
  }

}
addListenersToButtonsOdd();

function addListenersToButtonsEven() {

  //let buttonsEven = document.getElementsByClassName('even_but');
  //Dlaczego to nie działa?
  let buttonsEven = document.querySelectorAll('.even_but');

  //console.log(buttonsEven);

  buttonsEven.forEach(buttonEven => {
    let color = buttonEven.value;
    //console.log(color);
    buttonEven.addEventListener('click', function () {

      colorsEven(color);
    });


  });

}

addListenersToButtonsEven();

function addListenersToButtonsPhi() {
  let buttonsPhi = document.getElementsByClassName('phi');
  //console.log(buttonsPhi);

  for (let buttonPhi of buttonsPhi) {
    let color = buttonPhi.value;
    buttonPhi.addEventListener('click', () => {
      colorPhi(color);
    });

  }
}

addListenersToButtonsPhi();

function addListenersToButtonsAll() {
  let buttonsAll = document.querySelectorAll('.all');
  //console.log(buttonsAll);
  buttonsAll.forEach(buttonAll => {
    buttonAll.addEventListener('click', colorAll);
  });
}

addListenersToButtonsAll();

function colorsOdd() {

  let color = this.value;
  //console.log(color);

  let odds = document.getElementsByClassName('odd');
  //console.log(odds);

  for (let odd of odds) {
    odd.classList.remove('green', 'red', 'magenta');
    odd.classList.add(color);
  }
}

function colorsEven(col) {

  const evens = document.getElementsByClassName('even');

  for (let even of evens) {

    even.style.cssText = 'color: ' + col + ';';
  }
}


function colorPhi(x) {

  let phis = document.querySelectorAll('#fi span');
  let ile = document.querySelector('#ile').value;
  ile = parseInt(ile);
  console.log(ile);
  for (let i = 0; i <= ile; i++) {
    phis[i].style.cssText = 'color: ' + x + ';';

  }
}



function colorAll() {
  let color = this.value;
  console.log(color);

  let alls = document.querySelectorAll('span');
  //let alls = document.getElementsByTagName('span');
  //to też nie działa
  //console.log(alls);

  alls.forEach(all => {

    //all.style.cssText = '';
    all.removeAttribute('style');

    if (color == 'red') {
      all.classList.remove('green', 'magenta');
      all.classList.add(color);
    }
    else if (color == 'green') {
      all.classList.remove('red', 'magenta');
      all.classList.add(color);
    }
    else {
      all.classList.remove('red', 'green');
      all.classList.add(color);
    }
  });

}

function blockade () {
  let inputs = document.querySelectorAll('input:not(#blockade)');
  //wszystkie imputy z wyjatkiem inputu o id blockade

  for(let input of inputs) {
    input.toggleAttribute('disabled');
  }
  if(this.value == 'Zablokuj') this.value = 'Odblokuj';
  else this.value = 'Zablokuj' ;

}
