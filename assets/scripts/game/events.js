'use strict';

const glob = require('./global.js');
const api = require('./api');
const ui = require('./ui');


// begin game logic functions

const checkWins = function () {
  let board = glob.vars.board;
  let tieGame = false;

  // checks horizontal wins
  if (board[0] && (board[0] === board[1]) && (board[0] === board[2])) {
    console.log(board[0] + ' wins');
    tieGame = true;
  } else if (board[3] && (board[3] === board[4]) && (board[3] === board[5])) {
    console.log(board[3] + ' wins');
    tieGame = true;
  } else if (board[6] && (board[6] === board[7]) && (board[6] === board[8])) {
    console.log(board[6] + ' wins');
    tieGame = true;
  }

  // checks vertical wins
  if (board[0] && (board[0] === board[3]) && (board[0] === board[6])) {
    console.log(board[0] + ' wins');
    tieGame = true;
  } else if (board[1] && (board[1] === board[4]) && (board[1] === board[7])) {
    console.log(board[1] + ' wins');
    tieGame = true;
  } else if (board[2] && (board[2] === board[5]) && (board[2] === board[8])) {
    console.log(board[2] + ' wins');
    tieGame = true;
  }

  // checks diagonal wins
  if (board[0] && (board[0] === board[4]) && (board[0] === board[8])) {
    console.log(board[0] + ' wins');
    tieGame = true;
  } else if (board[2] && (board[2] === board[4]) && (board[2] === board[6])) {
    console.log(board[2] + ' wins');
    tieGame = true;
  }
};


const boardMarker = function (event) {
  event.preventDefault();
  let tile = $(this).attr('class');
  let tileClass = '.' + tile;
  let i = +(tile.replace(/\D/g,'')); // convert tile class to integer for index on board


  if (!glob.vars.board[i]) { // if board hasn't been clicked

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
  }

  if (!checkWins()) {
    glob.vars.turnCount++;
    glob.vars.xTurn = !glob.vars.xTurn; // change from X to O
    if (glob.vars.turnCount === 9) {
        console.log('tie game');
    }
  }
};

// end game logic functions

// begin api events

const onCreateGame = function (event) {
  event.preventDefault();
  api.createGame()
    .then(ui.success)
    .catch(ui.failure);
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

const onUpdateWins = function (events) {
  event.preventDefault();
  api.updateWins(data)
    .then(ui.success)
    .catch(ui.failure);
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
