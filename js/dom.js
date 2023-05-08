//'use strict';


function generate() {
  let ile = document.querySelector('#ile').value;
  //console.log(ile);
  let a = document.querySelector('#a').value;
  console.log(a);
  let b = document.querySelector('#b').value;

  let c = '';

  a = parseFloat(a);
  b = parseFloat(b);
  ile = parseInt(ile);

  if (isNaN(a) || isNaN(b) || isNaN(c) || ile < 2) {
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
    else ciag += '<div>01 -> <span class="even">' + b + '</span></div>';

    ratios += '<div>01 -> <span class="ratio">brak</span></div>';
    ratios += '<div>01 -> <span class="ratio">' + (b / a).toFixed(30) + '</span></div>';

    for (i = 3; i <= ile; i++) {
      bufor = a;
      a = b;
      b = bufor + b;

      if (i < 10) bufor = '0'; else bufor = '';

      if (b % 2 == 1) ciag += '<div>' + bufor + i + ' -> <span class="odd">' + b + '</span></div>';
      else ciag += '<div>' + bufor + i + ' -> <span class="even">' + b + '</span></div>';

      ratios += '<div>' + bufor + i + ' -> <span class="ratio">' + (b/a).toFixed(30) + '</span></div>';

    }

    document.querySelector('#ciag').innerHTML = ciag;
    document.querySelector('#fi').innerHTML = ratios;


    //alert(document.querySelector('#ciag').innerHTML);
    //alert(document.querySelector('#ciag').outerHTML);
    //alert(document.querySelector('#ciag').innerText);
    //alert(document.querySelector('#ciag').textContent);
  }
}
//generate();

document.getElementById('generuj_ciag').addEventListener('click', generate);
