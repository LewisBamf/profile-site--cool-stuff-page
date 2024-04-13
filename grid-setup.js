document.addEventListener("DOMContentLoaded", function(){

const NAV = document.getElementById("navbar");

let NAVheight = NAV.clientHeight;
console.log(NAVheight)

const grid = document.getElementById("page-layout");



grid.style.transform = "translate(0px, " + NAVheight + "px)";

window.onresize = function(){

    NAVheight = NAV.clientHeight;
    console.log(NAVheight)

    grid.style.transform = "translate(0px, " + NAVheight + "px)";
};

});