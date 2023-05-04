'use strict';
const hello = 'hello';
console.log(hello);

const first = document.getElementById('first');
console.log(first);
const second = document.getElementById('second');

document.write('<br>' + 0.1 * 5)
document.write('<br><br>' + 0.15 * 3);
document.write('<br><br>' + (0.1 + 0.2));
document.write('<br><br>' + Math.pow(2, 53));
//potęgowanie, na pierwszym miejscu liczba na drugim do jakiej poegi chcemy podnieść


if (0.1 + 0.2 == 0.3) document.write('<br><br>' + true);
else document.write('<br><br>' + false);

document.write('<br><br><br><br>' + 'Math.round');

let x = '';

x = Math.round((0.1 + 0.2) * 10) / 10;
document.write('<br><br>' + x);


x = Math.round((0.15 * 3) * 10) / 10;
document.write('<br><br>' + x);
//Wynik jest niepoprawny, ponieważ mjeżeli mamy dwa miejsca po przecinku to musimy pomnożyć przez 100, jeśli 3, to przez 100 itd. patrz nizej

x = Math.round((0.15 * 3) * 100) / 100;
document.write('<br><br>' + x);


document.write('<br><br><br><br>' + 'toFixed');

x = 0.15 * 3;

document.write('<br><br>' + x);
x = x.toFixed(2);
//toFixed zaokrągla liczbe, w nawiasie wpisujemy do ilu miejsc po przecinku
document.write('<br><br>' + x);




