const canvas = document.getElementById('game_canvas');
const ctx = canvas.getContext('2d');
//pobiera kontekst płótna, mamy pare do wyboru 2d, webgl, experimental-webgl, webgl2, bitmaprender

const pillWidth = 80;
const pillHeight = 80;
// rozmiary naszych kwadracikow, ktore uzyjemy w funkcji drawPill

let activePill = 0;


let colors = ['firebrick', 'seagreen', 'dodgerblue', 'orange', 'yellow', 'sienna', 'magenta', 'gray'];

let solution = ['firebrick', 'seagreen', 'dodgerblue', 'magenta', 'yellow'];

let state = ['empty', 'empty', 'empty', 'empty', 'empty'];

for (let i = 0; i < 8; i++) {

  let name = '#c' + (i + 1);
  let elem = document.querySelector(name);
  elem.style.backgroundColor = colors[i];
  elem.addEventListener('click', guess, false);
  elem.color = colors[i];

}

function guess(event) {

//alert(event.currentTarget.color);

  if (activePill >= 0 && activePill <= 4) {

    let pillColor = event.currentTarget.color;

    drawPill(100 + activePill * 100, 50, pillColor);

    state[activePill] = pillColor;

    if (activePill < 4) activePill++;
    else checkBoard();
    drawArrow();
  }

}

function checkBoard() {

  console.log(state);
}

function drawPill(x, y, type) {

  if (type == 'empty') {

    ctx.strokeStyle = 'white';
    //stroke style to kolor obramowan, bez wypełnienia, przeciwiensto patrzfunkcja drawArrow

    ctx.strokeRect(x, y, pillWidth, pillHeight);
  } else
  {
    ctx.fillStyle = type;
    ctx.fillRect(x, y, pillWidth, pillHeight);
  }

}

function drawArrow() {

  ctx.fillStyle = 'black';

  ctx.fillRect(100, 140, 480, 60);

  ctx.fillStyle = 'white';
  //filstyle to kolor obramowania i wypelnienia obiektu ktory "malujemy"

  ctx.font = '32px Arial';
  // rozmiar i kolor czcionki malowanego obiektu

  ctx.fillText('↑', 135 + activePill * 100, 180);
  // najpierw wpisujemy tekst do 'namalowania', potem wspołrzędne x y, gdzie ma sie pojawic na naszym płótnie(stała canvas)
}


function startBoard() {

  for (let i = 0; i < 5; i++) {

    drawPill(100 + i * 100, 50, 'empty');
  }

  drawArrow();
}

startBoard();
