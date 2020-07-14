
var randomNumber1 = Math.floor(Math.random()*6)+1;//1-6 

var randomDiceImage = "dice"+randomNumber1 + ".png";//dice1.png-dice6.png

var randomImageSource = "images/"+randomDiceImage;

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random()*6)+1;//1-6 

var randomDiceImage2 = "dice"+randomNumber2 + ".png";//dice1.png-dice6.png

var randomImageSource2 = "images/"+randomDiceImage2;

var img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src", randomImageSource2);

if(randomNumber1 > randomNumber2){

    document.querySelector("h1").innerHTML = "player1 wins";

}
else if(randomNumber1 , randomNumber2){
    document.querySelector("h1").innerHTML = "player2 wins";
}
else {
    document.querySelector('h1').innerHTML = "Draw!";
}



var playbutton = document.getElementById("playbutton");
function play(){
    window.location.reload(true)
}
playbutton.addEventListener("click", play)


