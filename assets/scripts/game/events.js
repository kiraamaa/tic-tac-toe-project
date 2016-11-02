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

  if (glob.vars.xTurn) {

    $(tileClass).html("X");
    glob.vars.board = "x";
  } else {
    $(tileClass).html("O");
    glob.vars.board = "o";
  }

  glob.vars.xTurn = !glob.vars.xTurn;

  console.log('Whose turn ' + glob.vars.xTurn);
};


const addHandlers = () => {
  $('.tileZero').on('click', boardMarker);
  $('.tileOne').on('click', boardMarker);
  $('.tileTwo').on('click', boardMarker);
  $('.tileThree').on('click', boardMarker);
  $('.tileFour').on('click', boardMarker);
  $('.tileFive').on('click', boardMarker);
  $('.tileSix').on('click', boardMarker);
  $('.tileSeven').on('click', boardMarker);
  $('.tileEight').on('click', boardMarker);
};

module.exports = {
  addHandlers,
};
