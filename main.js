/* eslint-disable no-undef */
'use strict';

function getRandomDog() {
  const input = getInputVal();
  
  fetch(`https://dog.ceo/api/breeds/image/random/${input}`)
    .then(response => response.json())
    .then((responseJson) => {
      console.log(responseJson.message);
      return display(generateString(responseJson.message));
    });
}

function generateString(promiseMessage) {
  let htmlString = '';
  promiseMessage.forEach(item => htmlString += `<li><img src = "${item}"></img></li>`);
  return htmlString;
}

function display(string) {
  $('ul').html(string);
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
