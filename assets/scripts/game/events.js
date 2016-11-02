'use strict';

// const api = require('./api');
// const ui = require('./ui');

const boardMarker = function (cell) {
  event.preventDefault();

  let tile = $(this).attr('class');
  let tileClass = '.' + tile;

  console.log('Tile was clicked.');
  $('.tileZero').html('X');
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
