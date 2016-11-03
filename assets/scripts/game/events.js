'use strict';

const glob = require('./global.js');
const api = require('./api.js');
const ui = require('./ui.js');


// begin game logic functions

const checkWins = function () {
  let board = glob.vars.board;
  let gameOver = glob.vars.gameOver;

  // checks horizontal wins
  if (board[0] && (board[0] === board[1]) && (board[0] === board[2])) {
    console.log(board[0] + ' wins');
    gameOver = true;
  } else if (board[3] && (board[3] === board[4]) && (board[3] === board[5])) {
    console.log(board[3] + ' wins');
    gameOver = true;
  } else if (board[6] && (board[6] === board[7]) && (board[6] === board[8])) {
    console.log(board[6] + ' wins');
    gameOver = true;
  }

  // checks vertical wins
  if (board[0] && (board[0] === board[3]) && (board[0] === board[6])) {
    console.log(board[0] + ' wins');
    gameOver = true;
  } else if (board[1] && (board[1] === board[4]) && (board[1] === board[7])) {
    console.log(board[1] + ' wins');
    gameOver = true;
  } else if (board[2] && (board[2] === board[5]) && (board[2] === board[8])) {
    console.log(board[2] + ' wins');
    gameOver = true;
  }

  // checks diagonal wins
  if (board[0] && (board[0] === board[4]) && (board[0] === board[8])) {
    console.log(board[0] + ' wins');
    gameOver = true;
  } else if (board[2] && (board[2] === board[4]) && (board[2] === board[6])) {
    console.log(board[2] + ' wins');
    gameOver = true;
  }
  return gameOver;
};


const boardMarker = function (event) {
  event.preventDefault();
  let tile = $(this).attr('class');
  let tileClass = '.' + tile;
  // convert tile class to integer for index on board
  let i = +(tile.replace(/\D/g,''));

  // runs if board has not been clicked
  if (!glob.vars.board[i]) {
    if (glob.vars.xTurn) {
      $(tileClass).html("X");
      $('.X').css("color", "black");
      $('.O').css("color", "");
      glob.vars.board[i] = "x";
      $('.X').css("color", "");
      $('.O').css("color", "black");
    } else {
      $(tileClass).html("O");
      $('.X').css("color", "");
      $('.O').css("color", "black");
      glob.vars.board[i] = "o";
      $('.X').css("color", "black");
      $('.O').css("color", "");
    }
    glob.vars.xTurn = !glob.vars.xTurn;
    glob.vars.turnCount++;
  }

  if (checkWins()) {

    // turns off clicks after winning
    $('.tile0').css('pointer-events', 'none');
    $('.tile1').css('pointer-events', 'none');
    $('.tile2').css('pointer-events', 'none');
    $('.tile3').css('pointer-events', 'none');
    $('.tile4').css('pointer-events', 'none');
    $('.tile5').css('pointer-events', 'none');
    $('.tile6').css('pointer-events', 'none');
    $('.tile7').css('pointer-events', 'none');
    $('.tile8').css('pointer-events', 'none');

  }

  // shows tied game
  if (glob.vars.turnCount === 9) {
      console.log('tie game');
      glob.vars.gameOver = true;
  }
};

const clearBoard = function () {
  glob.vars.board = [];
  glob.vars.turnCount = 0;
  glob.vars.xTurn = true;
  glob.vars.gameOver = false;
  $('.X').css("color", "black");
  $('.O').css("color", "");

  // clears tiles
  $('.tile0').html('');
  $('.tile1').html('');
  $('.tile2').html('');
  $('.tile3').html('');
  $('.tile4').html('');
  $('.tile5').html('');
  $('.tile6').html('');
  $('.tile7').html('');
  $('.tile8').html('');



  // resets ability to click and place markers
  // $('.tile0').on('click');
  // $('.tile1').on('click');
  // $('.tile2').on('click');
  // $('.tile3').on('click');
  // $('.tile4').on('click');
  // $('.tile5').on('click');
  // $('.tile6').on('click');
  // $('.tile7').on('click');
  // $('.tile8').on('click');

  // $('.tile0').on('click', boardMarker);
  // $('.tile1').on('click', boardMarker);
  // $('.tile2').on('click', boardMarker);
  // $('.tile3').on('click', boardMarker);
  // $('.tile4').on('click', boardMarker);
  // $('.tile5').on('click', boardMarker);
  // $('.tile6').on('click', boardMarker);
  // $('.tile7').on('click', boardMarker);
  // $('.tile8').on('click', boardMarker);


  $('.tile0').css('pointer-events', 'auto');
  $('.tile1').css('pointer-events', 'auto');
  $('.tile2').css('pointer-events', 'auto');
  $('.tile3').css('pointer-events', 'auto');
  $('.tile4').css('pointer-events', 'auto');
  $('.tile5').css('pointer-events', 'auto');
  $('.tile6').css('pointer-events', 'auto');
  $('.tile7').css('pointer-events', 'auto');
  $('.tile8').css('pointer-events', 'auto');
};

// end game logic functions



// begin api events

const onCreateGame = function (event) {
  event.preventDefault();
  api.createGame()
    .then(ui.success)
    .catch(ui.failure);
    console.log("created game");
};

const onGetAllGames = function (event) {
  event.preventDefault();
  api.getAllGame()
    .then(ui.success)
    .catch(ui.failure);
};

const onfindGame = function (event) {
  event.preventDefault();
  api.findGame()
    .then(ui.success)
    .catch(ui.failure);
};

const onJoinGame = function (event) {
  event.preventDefault();
  api.joinGame()
    .then(ui.success)
    .catch(ui.failure);
};

const onUpdateWins = function (event) {
  event.preventDefault();
  api.updateWins(data)
    .then(ui.success)
    .catch(ui.failure);
};

// end api events



const addHandlers = () => {
  $('.tile0').css('pointer-events', 'none');
  $('.tile1').css('pointer-events', 'none');
  $('.tile2').css('pointer-events', 'none');
  $('.tile3').css('pointer-events', 'none');
  $('.tile4').css('pointer-events', 'none');
  $('.tile5').css('pointer-events', 'none');
  $('.tile6').css('pointer-events', 'none');
  $('.tile7').css('pointer-events', 'none');
  $('.tile8').css('pointer-events', 'none');

  $('.tile0').on('click', boardMarker);
  $('.tile1').on('click', boardMarker);
  $('.tile2').on('click', boardMarker);
  $('.tile3').on('click', boardMarker);
  $('.tile4').on('click', boardMarker);
  $('.tile5').on('click', boardMarker);
  $('.tile6').on('click', boardMarker);
  $('.tile7').on('click', boardMarker);
  $('.tile8').on('click', boardMarker);

  $('.button-custom').on('click', onCreateGame);
  $('.button-custom').on('click', clearBoard);

};

module.exports = {
  addHandlers,
};
