"use strict";
var anchor = document.querySelector('a'); // if sure this exists, add ! to end
//if (anchor) {
console.log(anchor.href);
//}
//const form = document.querySelector('form')!
var form = document.querySelector('.new-item-form');
//console.log(form.children)
// inputs
var type = document.querySelector('#type');
var toFrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
//console.log(type)
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
