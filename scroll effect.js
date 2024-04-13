 document.addEventListener("DOMContentLoaded", function(){

    const colors = document.querySelector(":root");

 const flipper = document.getElementById("spinning-transition");

const shape = document.getElementById("spinning-shape");
 
let toggle = false;
console.log(toggle);

colors.style.setProperty('--blue-color', 'hsl(210, 32%, 28%)');

function randomNUM(min, max){
    const minnum = Math.ceil(min);
    const maxnum = Math.floor(max);
    return Math.floor(Math.random() * (maxnum - minnum))
}


function opacityFUN() {
    flipper.style.opacity = 0; 
    flipper.display = "none"
    setTimeout(() => {
        flipper.style.opacity = 0; // Set opacity to 0 after 0.7 seconds
        flipper.display = "none"
        setTimeout(() => {
            flipper.style.opacity = 1;
            shape.setAttribute("d", "M403.8 34.4c12-5 25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V160H352c-10.1 0-19.6 4.7-25.6 12.8L284 229.3 244 176l31.2-41.6C293.3 110.2 321.8 96 352 96h32V64c0-12.9 7.8-24.6 19.8-29.6zM164 282.7L204 336l-31.2 41.6C154.7 401.8 126.2 416 96 416H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H96c10.1 0 19.6-4.7 25.6-12.8L164 282.7zm274.6 188c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V416H352c-30.2 0-58.7-14.2-76.8-38.4L121.6 172.8c-6-8.1-15.5-12.8-25.6-12.8H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H96c30.2 0 58.7 14.2 76.8 38.4L326.4 339.2c6 8.1 15.5 12.8 25.6 12.8h32V320c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64z");
            flipper.display = "block" // Set opacity back to 1 after another 0.7 seconds
        }, 500); // 700 milliseconds = 0.7 seconds
    }, 0); // 700 milliseconds = 0.7 seconds
}

function opacityFUNREV() {
    flipper.style.opacity = 0; 
    flipper.display = "none"
    setTimeout(() => {
        flipper.style.opacity = 0; // Set opacity to 0 after 0.7 seconds
        flipper.display = "none"
        setTimeout(() => {
            flipper.style.opacity = 1;
            shape.setAttribute("d", "M125.7 160H176c17.7 0 32 14.3 32 32s-14.3 32-32 32H48c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32s32 14.3 32 32v51.2L97.6 97.6c87.5-87.5 229.3-87.5 316.8 0s87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3s-163.8-62.5-226.3 0L125.7 160z");
            flipper.display = "block" // Set opacity back to 1 after another 0.7 seconds
        }, 500); // 700 milliseconds = 0.7 seconds
    }, 0); // 700 milliseconds = 0.7 seconds
}


 flipper.addEventListener("click", function(){
    console.log(toggle);

    if(toggle == true){
        toggle = false;
        flipper.style.transform = "rotateX(0deg) rotateY(0deg)";
        flipper.style.scale = "1";
        opacityFUN();
        colors.style.setProperty('--blue-color', 'hsl(210, 32%, 28%)');
    } else {
        toggle = true;
        flipper.style.transform = "rotateX(30deg) rotateY(330deg)";
        flipper.style.scale = "0.5";
        opacityFUNREV();
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