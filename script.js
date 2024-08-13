'use strict'

const header = document.querySelector('header');
const nav = document.querySelector('nav');
const navbarMenuBtn = document.querySelector('.navbar-menu-btn');

const navbarForm = document.querySelector('.navbar-form')
const navbarFormCloseBtn = document.querySelector('.navbar-form-close');
const navbaraSearchBtn = document.querySelector('.navbar-search-btn');


/* navbar menu toggle function */

function navIsActive(){
    header.classList.toggle('active');
    nav.classList.toggle('active');
    navbarMenuBtn.classList.toggle('active');
}

navbarMenuBtn.addEventListener('click',navIsActive);

const searchBarIsActive = () => navbarForm.classList.toggle('active');

navbaraSearchBtn.addEventListener('click',searchBarIsActive);
navbarFormCloseBtn.addEventListener('click', searchBarIsActive);