// JavaScript Document
console.log("hi");

var deButton = document.querySelector("header button");
deButton.onclick = openMenu;

function openMenu() {
    var deNav = document.querySelector('nav:nth-of-type(2)');
    deNav.classList.toggle('open');
}

function doeIets(){
    this.classList.toggle("anders");
}

var deButtons = document.querySelectorAll('section button');
var i = 0;
while(i < deButtons.length) {
    deButtons[i].onclick = doeIets;
    i++;
}