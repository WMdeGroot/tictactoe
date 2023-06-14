let playerOneDefined = false; //zet player defined op false
let playerTwoDefined = false; //zet player defined op falsev
let PlayersDefined = false; //zet beide players defined op false

let playerOneName; //laat player name leeg staan
let playerTwoName; //laat player name leeg staan
let scoreOne = 0; //score staat op 0, moet nog worden bepaald..
let scoreTwo = 0; //score staat op 0, moet nog worden bepaald..

const x = "x"; //in de variable x word een string van x opgeslagen
const o = "o"; //in de variable o word een string van o opgeslagen
let currentPlayer = x; //standaard begin speler is x
let hasBeenUsed = false; //box is nog niet gebruikt

let boxOneUsed = false; //box 1 nog niet in gebruik door x of o
let boxTwoUsed = false; //etc
let boxThreeUsed = false;
let boxFourUsed = false;
let boxFiveUsed = false;
let boxSixUsed = false;
let boxSevenUsed = false;
let boxEightUsed = false;
let boxNineUsed = false; 

let allBoxesAreUsed = false; //op standaard zijn de boxes nog niet in gebruik

let gameWinner; //bepaald de game winner

let playerText = document.querySelector(".currentplayer"); //speler text word opgehaald
playerText.innerHTML += "Player = " + currentPlayer; //zet in html de currentplayer

let playerOne = document.querySelector(".p1"); //p1 opgehaald
playerOne.addEventListener('click', playerOneFunc);
let playerTwo = document.querySelector(".p2"); //p2 opgehaald
playerTwo.addEventListener('click', playerTwoFunc);

let tableElement = document.querySelector(".table-el"); //tabel word opgehaald
let winnerText = document.querySelector(".winnertext");

function playerOneFunc(){
    playerOneName = prompt("Wat is uw naam?", "vul een naam in"); //vraagt naam op die op word geslagen in playerOneName
    localStorage.setItem(playerOneName, scoreOne); //slaat op in localstorage de spelernaam en de current score (0)
    playerOneDefined = true; //player defined = true

    if(playerOneDefined == true && playerTwoDefined == true){ //kijkt of het allebij klopt
        PlayersDefined = true; //als beide waar is zijn de players defined
        tableElement.innerHTML += `<th>${playerOneName}</th> <th>${playerTwoName}</th>` //zet table in html met daarin beide speler namen
        printLeaderFunc() //roept functie aan
    }
}

function playerTwoFunc(){
    playerTwoName = prompt("Wat is uw naam?", "vul een naam in"); //hetzelfde als hierboven
    localStorage.setItem(playerTwoName, scoreTwo);
    playerTwoDefined = true;

    if(playerOneDefined == true && playerTwoDefined == true){
        PlayersDefined = true;
        tableElement.innerHTML += `<th>${playerOneName + ' = x'}</th> <th>${playerTwoName + ' = o'}</th>`
        printLeaderFunc()
    }
}

function currentPlayerFunc(){
    if (currentPlayer == x){ //als current player x is dan veranderd die naar o
        currentPlayer = o;
        playerText.innerHTML = "Player = " + currentPlayer; //veranderd de tekst in html
    } else{
        currentPlayer = x; //etc
        playerText.innerHTML = "Player = " + currentPlayer;
    }
}

function printLeaderFunc(){
    tableElement.innerHTML += `<td>${scoreOne}</td> <td>${scoreTwo}</td>` //print de score uit onder de speler in html
}

document.querySelector(".back").onclick = function () {
    location.href = "index.html"; //verwijst je naar indexhtml als je op back drukt
};