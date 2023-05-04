'use strict';
const hello = 'hello';
console.log(hello);

let pln = 1000;
document.write('wpłata: ' + pln + 'PLN' + '<br><br>');

document.write('kurs dolara: 4.00835701<br><br>')

let usd = pln / 4.00835701;
document.write('Saldo: ' + usd + 'USD' + '<br><br>');



usd = Math.floor(usd * 100)/100;
document.write('Saldo: ' + usd + 'USD' + '<br><br><br><br>');
//Math.floor zaokrągla zawsze w dół (w przeciwieństwie do Math.Ceil w górę), mnożymy i dzielimy razy sto bo chemy dwa miejsca po przecinku

//usd = Math.ceil(usd * 1000)/1000;
//document.write('Saldo: ' + usd + 'USD' + '<br><br>');
//tutaj mamy przykład do trzech miejsc w góre, patrz tez prowizja

let shopping = 23.65;
document.write('Zakupy: ' + shopping + 'USD' + '<br><br>');

let commission = 0.02 * shopping;
document.write('Prowizja: ' + commission + 'USD' + '<br><br>');

commission = Math.ceil(commission * 100)/100;
document.write('Prowizja: ' + commission + 'USD' + '<br><br>');

usd = usd - shopping - commission;
document.write('Saldo: ' + usd + 'USD' + '<br><br><br><br>');


document.write('zaokrąglenie, poprzez ucięcie ułamków:<br><br>');
usd = Math.trunc(usd);
document.write('Saldo: ' + usd + 'USD' + '<br><br><br><br>');


