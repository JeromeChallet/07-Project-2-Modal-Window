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
console.log(btnsOpenModal);

for (leti = 0; i < btnsOpenModal.length; i++) {
  //console.log(btnsOpenModal(i).textContent);
  console.log(btnsOpenModal(i).textContent);
}
