 document.addEventListener("DOMContentLoaded", function(){

    const colors = document.querySelector(":root")

 const flipper = document.getElementById("spinning-transition")
let toggle = false;
console.log(toggle);

colors.style.setProperty('--blue-color', 'hsl(210, 32%, 28%)');

function randomNUM(min, max){
    const minnum = Math.ceil(min);
    const maxnum = Math.floor(max);
    return Math.floor(Math.random() * (maxnum - minnum))
}

 flipper.addEventListener("click", function(){
    console.log(toggle);

    if(toggle == true){
        toggle = false;
        flipper.style.transform = "rotateX(0deg)";
        colors.style.setProperty('--blue-color', 'hsl(210, 32%, 28%)');
    } else {
        toggle = true;
        flipper.style.transform = "rotateX(180deg)";
        let H = randomNUM(0, 360);
        let S = randomNUM(20, 100);
        let L = randomNUM(20, 80);
        console.log(H);
        console.log(S);
        console.log(L);

        colors.style.setProperty('--blue-color', 'hsl(' + H + ',' + S + '%,' + L + '%)');
    }
    


 });

});