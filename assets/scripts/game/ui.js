'use strict';

const app = require ('../app');

const success = (data) => {
  app.game = data.game;
  console.log(data);
  console.log("update game");
};

const getGamesSuccess = (data) => {
  // app.game = data.game;
  console.log(data);
  console.log("get game in uiakjdhkjahd");
};

const updateGameSuccess = (data) => {
  app.game = data.game;
  console.log(data);
  console.log("update game in ui");
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
