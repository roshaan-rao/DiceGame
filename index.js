alert("Please Refresh Before Entering The Player Names.");
var playerOne=prompt("Enter Player 1 Name: ");
var playerSecond=prompt("Enter Player 2 Name: ");

var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".PNG"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".PNG";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩  "+playerOne.toUpperCase()+" Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "🚩  "+playerSecond.toUpperCase()+" Wins!";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
