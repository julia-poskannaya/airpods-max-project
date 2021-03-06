import html from './index.html';
import './index.css';
import './img/image2.jpg';
import './img/image4.jpg';
import './img/logo.svg';
import './img/menu.svg';
import './img/user.svg';

window.addEventListener('DOMContentLoaded', () => {
      
    //Form
    const form = document.querySelector('form'),
    sucsess = document.querySelector('.form__ok-message'),
    failed = document.querySelector('.form__fail-message');
    const baseURL = 'https://jsonplaceholder.typicode.com';

    function postData(url, data){
        return fetch(`${url}/posts`, {
            method: 'POST',
            headers: {
                'Content-type':'application/json'
            },
            body: data
        });
    }

    function showMessage(formSelector, classSelector){
        formSelector.classList.toggle('hide');
        classSelector.classList.toggle('hide');
        setTimeout(() => {
            formSelector.classList.toggle('hide');
            classSelector.classList.toggle('hide'); 
        }, 3000);
    }

    function bindData(form){
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = new FormData(form);
            const json = JSON.stringify(Object.fromEntries(formData.entries()));
            
            postData(baseURL, json)
            .then(response => checkResponse(response))
            .then(response => {
                console.log(response);
                showMessage(form, sucsess);
            })
            .catch(() => showMessage(form, failed))
            .finally(() => form.reset());
        });
    }

    function checkResponse(response){
        if(!response.ok){
            throw new Error(`Somethig wrong. Error: ${response.status}`);
        } else{
            return response.json();
        }
    }

    bindData(form);
});