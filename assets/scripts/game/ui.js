'use strict';

const app = require ('../app');

const success = (data) => {
  app.game = data.game;
  // console.log(data);
  // console.log("update game");
};

const getGamesSuccess = (data) => {
  // console.log(data);
  // console.log("get game in uiakjdhkjahd");
  $('.stats-message').text("You've played " + data.games.length + " games.");
};

const updateGameSuccess = (data) => {
  app.game = data.game;
  // console.log(data);
  // console.log("update game in ui");
};


const failure = (error) => {
  console.error(error);
};

module.exports = {
  failure,
  success,
  updateGameSuccess,
  getGamesSuccess,
};
