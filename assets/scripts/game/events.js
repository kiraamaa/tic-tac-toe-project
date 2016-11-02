'use strict';

const glob = require('./global');
// const api = require('./api');
// const ui = require('./ui');

const boardMarker = function (event) {
  event.preventDefault();
  let tile = $(this).attr('class');
  let tileClass = '.' + tile;

  let i = +(tile.replace(/\D/g,'')); // convert tile class to integer for index on board
  console.log('clicked tile ' + i);

  if (!glob.vars.board[i]) { // if board hasn't been clicked

    if (glob.vars.xTurn) {

      $(tileClass).html("X");
      glob.vars.board[i] = "x";
    } else {
      $(tileClass).html("O");
      glob.vars.board[i] = "o";
    }

    glob.vars.xTurn = !glob.vars.xTurn;
    console.log(glob.vars.board);
  }


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
