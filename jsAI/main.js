const x = "x"; //zelfde als in main.js
const o = "o";
let normalPlayer = x; //jij bent x
let aiPlayer = o; //de ai is o
let playerTurn = true;
let hasBeenUsed = false;

let currentPlayer = x;

let aiSelectedBox;

let boxOneUsed = false;
let boxTwoUsed = false;
let boxThreeUsed = false;
let boxFourUsed = false;
let boxFiveUsed = false;
let boxSixUsed = false;
let boxSevenUsed = false;
let boxEightUsed = false;
let boxNineUsed = false;

let allBoxesAreUsed = false;

let gameWinner;

let playerText = document.querySelector(".currentplayer");
playerText.innerHTML += "Player = " + currentPlayer;

let winnerText = document.querySelector(".winnertext");

document.querySelector(".back").onclick = function () {
    location.href = "/index.html";
};


function currentPlayerFunc(){ //main.js
    if (currentPlayer == x){
        currentPlayer = o;
        playerText.innerHTML = "Player = " + currentPlayer;
    } else{
        currentPlayer = x;
        playerText.innerHTML = "Player = " + currentPlayer;
    }
}

function aiPlayerFunc(){  //stopt een getal van 0 tot 8 ub aiselectedbox
    aiSelectedBox = Math.floor(Math.random() * 9);
    console.log(aiSelectedBox); //logt
    playerTurn = true; //playerturn = true
    aiBoxDecission(); //voert functie uit
}


function aiBoxDecission(){
    if(aiSelectedBox == 0){ //als uit selected box 0 komt dan voert ie dit uit

        if(allBoxesAreUsed == true){ //als alles al in gebruik is 
            console.log("All boxes are used.."); //logt alles is in gebruik
            winnerChecker(); //roept winnercheck aan
        } else{
            avaibleCheckOne(); //roept functie aan
        }

    } else if(aiSelectedBox == 1){ //etc dit 9 keer
        
        if(allBoxesAreUsed == true){
            console.log("All boxes are used..");
        } else{
            avaibleCheckTwo();
        }

    } else if(aiSelectedBox == 2){

        if(allBoxesAreUsed == true){
            console.log("All boxes are used..");
        } else{
            avaibleCheckThree();
        }

    } else if(aiSelectedBox == 3){
     
        if(allBoxesAreUsed == true){
            console.log("All boxes are used..");
        } else{
            avaibleCheckFour();
        }

    } else if(aiSelectedBox == 4){

        if(allBoxesAreUsed == true){
            console.log("All boxes are used..");
        } else{
            avaibleCheckFive();
        }

    } else if(aiSelectedBox == 5){
        
        if(allBoxesAreUsed == true){
            console.log("All boxes are used..");
        } else{
            avaibleCheckSix();
        }

    } else if(aiSelectedBox == 6){
        
        if(allBoxesAreUsed == true){
            console.log("All boxes are used..");
        } else{
            avaibleCheckSeven();
        }

    } else if(aiSelectedBox == 7){
        
        if(allBoxesAreUsed == true){
            console.log("All boxes are used..");
        } else{
            avaibleCheckEight();
        }

    } else if(aiSelectedBox == 8){
        
        if(allBoxesAreUsed == true){
            console.log("All boxes are used..");
        } else{
            avaibleCheckNine();
        }
    }}