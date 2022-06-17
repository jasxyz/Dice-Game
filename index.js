var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);


// Image 1
var diceImage = "dice" + randomNumber1 + ".png";

var diceImages = "images/" + diceImage;

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", diceImages);

// Image 2
var diceImage2 = "dice" + randomNumber2 + ".png";

var diceImages2 = "images/" + diceImage2;

var img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src", diceImages2);


if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 won!";
}

else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 won! 🚩";
}

else {
    document.querySelector("h1").innerHTML = "Draw!";
}