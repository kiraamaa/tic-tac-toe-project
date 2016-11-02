'use strict';

const glob = require('./global');
// const api = require('./api');
// const ui = require('./ui');


// const changePlayer = function () {
//     if (player === 'X') {
//       player = 'O';
//     } else {
//       player = 'X';
//     }
//     $('.players').text("Current player: " + player);
// };


const boardMarker = function () {
  event.preventDefault();
  let tile = $(this).attr('class');
  let tileClass = '.' + tile;

  let i = +(tile.replace(/\D/g,''));
  console.log('clicked tile ' + i);
  // console.table(glob.vars.board);

  if (glob.vars.xTurn) {
    $(tileClass).html("X");
    glob.vars.board[i] = "x";
  } else {
    $(tileClass).html("O");
    glob.vars.board[i] = "o";
  }

  glob.vars.xTurn = !glob.vars.xTurn;
};


const addHandlers = () => {
  $('.tile0').on('click', boardMarker);
  $('.tile1').on('click', boardMarker);
  $('.tile2').on('click', boardMarker);
  $('.tile3').on('click', boardMarker);
  $('.tile4').on('click', boardMarker);
  $('.tile5').on('click', boardMarker);
  $('.tile6').on('click', boardMarker);
  $('.tile7').on('click', boardMarker);
  $('.tile8').on('click', boardMarker);
};

module.exports = {
  addHandlers,
};
