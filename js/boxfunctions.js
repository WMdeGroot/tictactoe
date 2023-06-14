function boxOneFunc(){
    if(boxOne.innerHTML == x || boxOne.innerHTML == o){ //als 1 van de 2 waar is dan word hasbeenused true
        hasBeenUsed == true //hasbeen used set to true
    } else{ //als nog niet in gebruikt is dan word boxOne true 
        boxOneUsed = true;
        boxOne.innerHTML = currentPlayer; //zet de currentplayer in het vakje.. x of o dus
        console.log(currentPlayer); //logt de volgende speler
        currentPlayerFunc(); //roept functie aan
        allBeenUsedFunc(); //etc
        winnerChecker()
    }
}

function boxTwoFunc(){
    if(boxTwo.innerHTML == x || boxTwo.innerHTML == o){ //etc 9x
        hasBeenUsed == true
    } else{
        boxTwoUsed = true;
        boxTwo.innerHTML = currentPlayer;
        console.log(currentPlayer);
        currentPlayerFunc();
        allBeenUsedFunc();
        winnerChecker()
    }
}

function boxThreeFunc(){
    if(boxThree.innerHTML == x || boxThree.innerHTML == o){
        hasBeenUsed == true
    } else{
        boxThreeUsed = true;
        boxThree.innerHTML = currentPlayer;
        console.log(currentPlayer);
        currentPlayerFunc();
        allBeenUsedFunc();
        winnerChecker()
    }
}

function boxFourFunc(){
    if(boxFour.innerHTML == x || boxFour.innerHTML == o){
        hasBeenUsed == true
    } else{
        boxFourUsed = true;
        boxFour.innerHTML = currentPlayer;
        console.log(currentPlayer);
        currentPlayerFunc();
        allBeenUsedFunc();
        winnerChecker()
    }
}

function boxFiveFunc(){
    if(boxFive.innerHTML == x || boxFive.innerHTML == o){
        hasBeenUsed == true
    } else{
        boxFiveUsed = true;
        boxFive.innerHTML = currentPlayer;
        console.log(currentPlayer);
        currentPlayerFunc();
        allBeenUsedFunc();
        winnerChecker()
    }
}

function boxSixFunc(){
    if(boxSix.innerHTML == x || boxSix.innerHTML == o){
        hasBeenUsed == true
    } else{
        boxSixUsed = true;
        boxSix.innerHTML = currentPlayer;
        console.log(currentPlayer);
        currentPlayerFunc();
        allBeenUsedFunc();
        winnerChecker()
    }
}

function boxSevenFunc(){
    if(boxSeven.innerHTML == x || boxSeven.innerHTML == o){
        hasBeenUsed == true
    } else{
        boxSevenUsed = true;
        boxSeven.innerHTML = currentPlayer;
        console.log(currentPlayer);
        currentPlayerFunc();
        allBeenUsedFunc();
        winnerChecker()
    }
}

function boxEightFunc(){
    if(boxEight.innerHTML == x || boxEight.innerHTML == o){
        hasBeenUsed == true
    } else{
        boxEightUsed = true;
        boxEight.innerHTML = currentPlayer;
        console.log(currentPlayer);
        currentPlayerFunc();
        allBeenUsedFunc();
        winnerChecker()
    }
}

function boxNineFunc(){
    if(boxNine.innerHTML == x || boxNine.innerHTML == o){
        hasBeenUsed == true
    } else{
        boxNineUsed = true;
        boxNine.innerHTML = currentPlayer;
        console.log(currentPlayer);
        currentPlayerFunc();
        allBeenUsedFunc();
        winnerChecker()
    }
}

function allBeenUsedFunc(){
    if (boxOneUsed == true && boxTwoUsed == true && boxThreeUsed == true && boxFourUsed == true && boxFiveUsed == true && boxSixUsed == true && boxSevenUsed == true && boxEightUsed == true && boxNineUsed == true){ //als alles op true is voert ie het uit
        allBoxesAreUsed = true; //alle boxes zijn in gebruik
        console.log("AllBoxesAreUsed = " + allBoxesAreUsed); //logt dat alle boxes in gebruikt zijn
        playerText.innerHTML = "Player = ";  //player = ""
        winnerText.innerHTML = "Winner = no one!"; //alle boxes zijn gebruikt en niemand wint dan veranderd de tekst
        setTimeout(restartGame, 3000); //na 3 seconden voert ie de functie uit
    }
}

function restartGame(){
    document.querySelector("#boxone").innerHTML = ""; //zet alles leeg
    document.querySelector("#boxtwo").innerHTML = ""; //etc 9x
    document.querySelector("#boxthree").innerHTML = "";
    document.querySelector("#boxfour").innerHTML = "";
    document.querySelector("#boxfive").innerHTML = "";
    document.querySelector("#boxsix").innerHTML = "";
    document.querySelector("#boxseven").innerHTML = "";
    document.querySelector("#boxeight").innerHTML = "";
    document.querySelector("#boxnine").innerHTML = "";

    boxOneUsed = false; //zorgt dat alle variabelen weer op false staan
    boxTwoUsed = false; //etc 9x
    boxThreeUsed = false;
    boxFourUsed = false;
    boxFiveUsed = false;
    boxSixUsed = false;
    boxSevenUsed = false;
    boxEightUsed = false;
    boxNineUsed = false;
    allBoxesAreUsed = false;

    currentPlayer = x; //start player is x
    playerText.innerHTML = "Player = " + currentPlayer; //player begint op x in html
    winnerText.innerHTML = ""; //winnertext is leeg

    boxOne.style.backgroundColor = "red"; //zet de box kleur allemaal op rood
    boxTwo.style.backgroundColor = "red";
    boxThree.style.backgroundColor = "red";
    boxFour.style.backgroundColor = "red";
    boxFive.style.backgroundColor = "red";
    boxSix.style.backgroundColor = "red";
    boxSeven.style.backgroundColor = "red";
    boxEight.style.backgroundColor = "red";
    boxNine.style.backgroundColor = "red";
}