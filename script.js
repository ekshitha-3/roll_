let images=["dice-1.jpg",
"dice-2.jpg",
"dice-3.jpg",
"dice-4.jpg",
"dice-5.jpg",
"dice-6.jpg"];
let dice =document.querySelectorAll("img");
var player1 = "Player 1";
var player2 = "Player 2";
    // Function to roll the dice
    function rollTheDice() {
        dice.forEach(function(die){
            die.classList.add("shake");
        });
        setTimeout(function () {
            dice.forEach(function(die){
                die.classList.remove("shake");
            });
        

            var randomNumber1 = Math.floor(Math.random() * 6) ;
            var randomNumber2 = Math.floor(Math.random() * 6) ;
            console.log(randomNumber1,randomNumber2);
  
            document.querySelector("#die-1").setAttribute("src",images[randomNumber1]);
  
            document.querySelector("#die-2").setAttribute("src",images[ randomNumber2]);
  
            if (randomNumber1 === randomNumber2) {
                document.querySelector("h1").innerHTML = "Draw!";
            }
  
            else if (randomNumber1 < randomNumber2) {
                document.querySelector("h1").innerHTML = (player2 + " WINS!");
            }
  
            else {
                document.querySelector("h1").innerHTML = (player1 + " WINS!");
            }
        },1000
        );
    }
    rollTheDice();