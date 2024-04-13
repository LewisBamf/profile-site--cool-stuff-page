const NAV = document.getElementById("navbar");

let NAVheight = NAV.clientHeight;

const grid = document.getElementById("page-layout");



grid.style.transform = "translate(0px, " + -NAVheight + "px)";

window.onresize = function(){
    
    NAVheight = NAV.clientHeight;

    grid.style.transform = "translate(0px, " + -NAVheight + "px)";
}
