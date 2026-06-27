function changeColor(){

let heart = document.querySelector(".heart");

let colors = [
"red",
"pink",
"purple",
"blue",
"orange",
"yellow"
];

let random = Math.floor(Math.random()*colors.length);

heart.style.background = colors[random];

document.getElementById("message").innerHTML = "I Love You Delicate 💖";

}
