/* eslint-disable no-undef */
'use strict';

function getRandomDog() {
  const input = getInputVal();

  fetch(`https://dog.ceo/api/breed/${input}/images/random`)
    .then(function(response){
      if (!response.ok) {
        throw Error(response.status);
      }
      return response;
    })
    .then(response => response.json())
    .then(response => display(generateString(response.message)))
    .catch((error) => console.log(error, 'breed not found'));
}

function generateString(promiseMessage) {
  let htmlString = '';
  htmlString = `<img src = "${promiseMessage}"></img>`;
  return htmlString;
}

function display(string) {
  $('.js-img').html(string);
}

function getInputVal() {
  const input = $('.js-input').val();
  return input;
}

function handleSubmit() {
  $('.js-form').submit((event) => {
    event.preventDefault();
    getRandomDog();
  });
}

function main() {
  handleSubmit();
}

$(main);
