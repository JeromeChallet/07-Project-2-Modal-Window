'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btn = document.querySelector('.close-modal');
//when using query selectors to select elements,
//if there are many of them, only the 1st one gets selected
// const btnsOpenModal = document.querySelector('.show-modal');
// console.log(btnsOpenModal);
//this query selector selects them all
const btnsOpenModal = document.querySelectorAll('.show-modal');
const btnsCloseModal = document.querySelector('.close-modal');

const openModal = function () {
  console.log('Button clicked');
  //classList manipulates html classes
  //by removing the class 'hidden' they become visible
  //because hidden has the property of hidden in css
  //important to note we do not use the .
  //the . is only for the selector
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  //this line does the same thing as above but is less efficient
  //it is more efficient to export a style into a class
  //modal.style.display = 'block';
};

const closeModal = function () {
  //this time we add a class to an element
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  //console.log(btnsOpenModal(i).textContent);
  btnsOpenModal(i).addEventListener('click', openModal);
}

btnsCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
