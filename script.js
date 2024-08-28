const player0El=document.querySelector(".player--0")
const player1El=document.querySelector(".player--1")

let score0=document.getElementById("current--0");
let score1=document.getElementById("current--1");
let totalScore0=document.getElementById("score--0");
let totalScore1=document.getElementById("score--1");

let btnRoll=document.querySelector(".btn--roll");
let hold=document.querySelector(".btn--hold")
let newGame=document.querySelector(".btn--new")
let dice=document.querySelector(".dice")

let scores,currentScore,playing,activePlayer;

let init=function(){
    currentScore=0;
    activePlayer=0 // to start a new game with player0 
    scores=[0,0]
    playing=true
    
    dice.classList.add("hidden")
    player0El.classList.remove("player--winner")
    player1El.classList.remove("player--winner")

    player0El.classList.add("player--active") // 
    player1El.classList.remove("player--active")

    totalScore0.textContent=0
    totalScore1.textContent=0
    score0.textContent=0
    score1.textContent=0

}

init();

btnRoll.addEventListener("click",function(){

    if(playing==true){
        dice.classList.remove("hidden")
        let random=Math.ceil(Math.random() * 6);
        document.querySelector("img").setAttribute("src","dice-" + random +".png")
        if(random==1){
            //switch player
            document.getElementById(`current--${activePlayer}`).textContent=0
            currentScore=0
            activePlayer= activePlayer === 0 ? 1:0

            player0El.classList.toggle("player--active") // change the color(see index.html)
            player1El.classList.toggle("player--active")

        }
        else{
            currentScore= currentScore + random;
            document.getElementById(`current--${activePlayer}`).textContent=currentScore
        }
    }

})

hold.addEventListener("click",function(){
    if(playing==true){
        let num=Number(document.getElementById(`score--${activePlayer}`).textContent)
        document.getElementById(`score--${activePlayer}`).textContent=currentScore + num
        score0.textContent=0
        if(document.getElementById(`score--${activePlayer}`).textContent<20){
            //switch
            currentScore=0
            activePlayer= activePlayer === 0 ? 1:0

            player0El.classList.toggle("player--active") // change the color(see index.html)
            player1El.classList.toggle("player--active")
        }
        else{
            // wins
            playing=false // this logic for after winning we can't play the game
            document.querySelector(`.player--${activePlayer}`).classList.add("player--winner")
            document.querySelector(`.player--${activePlayer}`).classList.remove("player--active")
            dice.classList.add("hidden")

        }
    }    
    
})

newGame.addEventListener("click",init)