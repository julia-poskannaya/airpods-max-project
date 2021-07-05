import html from './index.html';
import './index.css';
import './img/image2.jpg';
import './img/image4.jpg';
import './img/logo.svg';
import './img/menu.svg';
import './img/user.svg';
window.addEventListener('DOMContentLoaded', function () {
  //Form
  var form = document.querySelector('form'),
      sucsess = document.querySelector('.form__ok-message'),
      failed = document.querySelector('.form__fail-message');
  var baseURL = 'https://jsonplaceholder.typicode.com';

  function postData(url, data) {
    return fetch("".concat(url, "/posts"), {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: data
    });
  }

  function showMessage() {
    form.classList.toggle('hide');
    sucsess.classList.toggle('hide');
    setTimeout(function () {
      form.classList.toggle('hide');
      sucsess.classList.toggle('hide');
    }, 3000);
  }

  function showFailed() {
    form.classList.toggle('hide');
    failed.classList.toggle('hide');
    setTimeout(function () {
      form.classList.toggle('hide');
      failed.classList.toggle('hide');
    }, 4000);
  }

  function bindData(form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var formData = new FormData(form);
      var json = JSON.stringify(Object.fromEntries(formData.entries()));
      postData(baseURL, json).then(function (response) {
        return checkResponse(response);
      }).then(function (response) {
        console.log(response);
        showMessage();
      })["catch"](function () {
        return showFailed();
      })["finally"](function () {
        return form.reset();
      });
    });
  }

  function checkResponse(response) {
    if (!response.ok) {
      throw new Error("Somethig wrong. Error: ".concat(response.status));
    } else {
      return response.json();
    }
  }

  bindData(form);
});