// JavaScript Document
console.log("hi");

var deButton = document.querySelector("section:nth-of-type(4) button");
deButton.onclick = doeIets;

function doeIets(){
    this.classList.toggle("anders");
}

var deButtons = document.querySelectorAll('section button');
var i = 0;
while(i < deButtons.length) {
    deButtons[i].onclick = doeIets;
    i++;
}