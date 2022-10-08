var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector(".button");


body.style.background="linear-gradient(to right,"+color1.value+","+color2.value+")";
css.textContent=body.style.background + ";";



function randomColors(){
    var color11 ="#"+ Math.floor(Math.random()*16777215).toString(16);
    var color22 = "#" +Math.floor(Math.random()*16777215).toString(16);
    color1.value= color11;
    color2.value= color22;
}

function randomGradient(){
    randomColors();
    changeGradiantColor();
}


function changeGradiantColor(){

    body.style.background="linear-gradient(to right,"+color1.value+","+color2.value+")";
    css.textContent=body.style.background + ";";
}

color1.addEventListener("input",changeGradiantColor);
color2.addEventListener("input",changeGradiantColor);
button.addEventListener("click",randomGradient);