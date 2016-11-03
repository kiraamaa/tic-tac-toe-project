'use strict';

const app = require ('../app');

const success = (data) => {
  app.game = data.game;
  console.log(data);
  console.log("create game in ui");
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  failure,
  success,
};
