'use strict';
const hello = 'hello';
console.log(hello);


function countingDown() {
  //tworzymy funkcje o nazwie countingDown,
  //Moglibyśmy użyć innego zapisu, aby od razu przypisać funkcje do stałej, patrz komentarz poniżej

  //const countingDown = function ()


  const today = new Date();
  console.log(today);
  //Do stałej today przypisuje obiekt systemowy new z klasą Date. Ktora zawiera date i godzine systemową.


  const day = today.getDate();
  console.log(day);
  //Tworze stałą date, chce ze stałej today wyciągnąć jaki mamy dzien miesiąca. getDate jest metodą, wbudowana funkcją.

  let month = today.getMonth() + 1;
  console.log(month);
  //analogicznie do powyżej.!!UWAGA, miesiące w systemie maja przypisane wartości od 0 do 11, dlatego DODAJE +1!!;
  if (month == 1) month = 'january';
  if (month == 2) month = 'febuary';
  if (month == 3) month = 'march';
  if (month == 4) month = 'april';
  if (month == 5) month = 'may';
  if (month == 6) month = 'june';
  if (month == 7) month = 'july';
  if (month == 8) month = 'august';
  if (month == 9) month = 'september';
  if (month == 10) month = 'october';
  if (month == 11) month = 'november';
  if (month == 12) month = 'december';

  console.log(month);
  // zmieniemy numery miesiąca na nazwe,
  //!!ZMIENNA, NIE STAŁĄ MONTH!! czemu, patrz poniżej?


  let hour = today.getHours();
  console.log(hour);
  if (hour < 10) hour = '0' + hour;
  console.log(hour);
  let minute = today.getMinutes();
  if (minute < 10) minute = '0' + minute;
  console.log(minute);
  let second = today.getSeconds();
  console.log(second);
  if (second < 10) second = '0' + second;
  console.log(second);
  //analogicznie. Ze stałej today za pomocą metod pobieram godzine, minute, sekunde i zapisuje do !!ZMIENNYCH, NIE STAŁYCH.!!
  //!!ZMIENNYCH, PONIEWAŻ ZARAZ POTEM UŻYWAM IF!!
  // nasze IF w tym przypadku, ma dodać '0', przed secunde w przypadku gdy wyświetla nam sie przedział secund od 0 do 9.
  // np 12:10:4 ma sie zamieninić w 12:10:04, analogicznie dla reszty.



  document.getElementById('day').innerHTML = day;
  // przeszukujemy cały dokument HTML (document) w poszukiwaniu tagu o atrybucie ID = 'day'.
  //wciskamy do elementu na stronie(inner.HTML) wartość stałej day.
  //!!UWAGA mamy dwa divi o nazwie day, metoda getElementntById znajdzie PIERWSZY.!!

  document.getElementById('mounth').innerHTML = month;
  //analogicznie do powyżej


  document.getElementById('clock').innerHTML = hour + ':' + minute + ':' + second;
  //Analogicznie do powyżej. stosuje znak + żeby połączyć różne stałe, lub dodać tekst.
  //spacje są dla przejrzystości. goły tekst w cudzysłowiu.
  // takie klejenie łańcuchów za pomocą + nazywamy KONKATENACJĄ


  setTimeout('countingDown()', 1000);
  // Używamy metody setTimeout bo chcemy żeby nasz czas odświeżał sie na stronie.
  //Nadajemy jej dwa argumenty. Pierwszy to nasz funkcja countingDown, która ma się odświeżać.
  //Drugi to czas w !!MILISEKUNDACH!! co ile ma sie odświeżać(1sec=1000milisekund)
}

countingDown();
//dodajemy wywołanie funkcji cunitingDown

