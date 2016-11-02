// 'use strict';
//
// const app = require('../app');
//
//
// const createGame = () =>
//   // let token = app.user.token;
//   $.ajax({
//     url: app.host + '/games',
//     method: 'POST',
//     headers: {
//       Authorization: 'Token token=' + app.user.token,
//     },
//   });
//
// const getAllGames = () =>
//   $.ajax({
//     url: app.host + '/games',
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=' + app.user.token,
//     }
//   });
//
// const findGame = () =>
//   $.ajax({
//     url: app.host + '/games/' + app.user.id,
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=' + app.user.token,
//     }
//   });
//
// const joinGame = () =>
//   $.ajax({
//     url: app.host + '/games/' + app.game.id,
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + app.user.token,
//     },
//   });
//
// const updateWins = (data) =>
//   $.ajax({
//     url: app.host + '/games/' + app.game.id,
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + app.user.token,
//     },
//     data,
//   });
//
//
// module.exports = {
//   createGame,
//   getAllGames
//   findGame,
//   joinGame,
//   updateWins,
// };
