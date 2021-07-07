import html from './index.html';
import './index.css';
import './img/image2.jpg';
import './img/image4.jpg';
import './img/logo.svg';
import './img/menu.svg';
import './img/user.svg';
window.addEventListener('DOMContentLoaded', function () {
  //Scroll
  function scrollPage(selector) {
    var items = document.querySelectorAll(selector);
    items.forEach(function (item) {
      item.addEventListener('click', function (e) {
        e.preventDefault();
        var href = item.getAttribute('href').substring(1);
        var anchor = document.getElementById(href);
        var top = 0;
        var elementPosition = anchor.getBoundingClientRect().top;
        var offsetPosition = elementPosition - top;
        window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth'
        });
      });
    });
  }

  scrollPage('.menu__links');
  scrollPage('.buttons__button'); //Form

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

  function showMessage(formSelector, classSelector) {
    formSelector.classList.toggle('hide');
    classSelector.classList.toggle('hide');
    setTimeout(function () {
      formSelector.classList.toggle('hide');
      classSelector.classList.toggle('hide');
    }, 3000);
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
        showMessage(form, sucsess);
      })["catch"](function () {
        return showMessage(form, failed);
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