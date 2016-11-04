'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);
const api = require('./api');
const ui = require('./ui');

const onSignUp = function (event) {
  let data = getFormFields(event.target);
  event.preventDefault();
  api.signUp(data)
    .then(ui.success)
    .catch(ui.failure);
  $('#myModal').modal("hide");
};

const onSignIn = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.failure);
  $('#myModal2').modal("hide");
};

const onSignOut = function (event) {
  event.preventDefault();
  api.signOut()
    .then(ui.success)
    .catch(ui.failure);
};

const onChangePassword = function (event) {
  event.preventDefault();
  let data = getFormFields(this);
  api.changePassword(data)
    .then(ui.success)
    .catch(ui.failure);
  $('#myModal3').modal("hide");
};

const addHandlers = () => {
  $('.sign-up-form').on('submit', onSignUp);
  $('.sign-in-form').on('submit', onSignIn);
  $('.sign-out-button').on('click', onSignOut);
  $('.change-password-form').on('submit', onChangePassword);
};

module.exports = {
  addHandlers,
};
