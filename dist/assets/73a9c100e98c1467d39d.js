// import html from './index.html';
// import './index.css';
// import './img/image2.jpg';
// import './img/image4.jpg';
// import './img/logo.svg';
// import './img/menu.svg';
// import './img/user.svg';
import scrollPage from './js/scroll';
import form from './js/form';
window.addEventListener('DOMContentLoaded', function () {
  scrollPage('.menu__links');
  scrollPage('.buttons__button');
  form('.from');
});