'use strict';

const app = require ('../app');

const success = (data) => {
};

const signInSuccess = (data) => {
  app.user = data.user;
  $('.sign-message').hide();
  $('.new-message').show();
};

const failure = (error) => {
  console.error(error);
};

const changePassword = () => {
  console.log ('Password changed');
};

const signOutSuccess = () => {
  app.user = null;
  console.log ('Signed out');
};


module.exports = {
  failure,
  success,
  signInSuccess,
  changePassword,
  signOutSuccess
};
