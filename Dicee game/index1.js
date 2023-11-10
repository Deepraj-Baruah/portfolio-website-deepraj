//Another way to of solving this problem
// var pics1 = ["./images/dice1.png", "./images/dice2.png", "./images/dice3.png", "./images/dice4.png", "./images/dice5.png", "./images/dice6.png"];
// var pics2 = ["./images/dice1.png", "./images/dice2.png", "./images/dice3.png", "./images/dice4.png", "./images/dice5.png", "./images/dice6.png"];

           
var randomNumber1 = Math.floor(Math.random() * 6) + 1; 
var randomImages1 = "dice"+ randomNumber1 +".png";
var randomSrcImg1 = "images/"+ randomImages1;
var images1 = document.querySelectorAll("img")[0].setAttribute("src", randomSrcImg1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1; 
var randomImages2 = "dice"+ randomNumber2 +".png";
var randomSrcImg2 = "images/"+ randomImages2;
var images2 = document.querySelectorAll("img")[1].setAttribute("src", randomSrcImg2);


if (randomSrcImg1 > randomSrcImg2){
    document.querySelector("h1").innerHTML = "Player1 Win!🥳";
}
else if (randomSrcImg2 > randomSrcImg1) {
    document.querySelector("h1").innerHTML = "🥳Player2 Win!";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}