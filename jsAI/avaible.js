function avaibleCheckOne(){ 
    if(boxOneUsed == false){ //als box 1 false is(on gebruikt) voert ie dit uit
        boxOneUsed = true; //zet boxone op true
        boxOne.innerHTML = aiPlayer; //innerhtml word de aiplayer
        currentPlayer = x; //zet player naar x 
        playerText.innerHTML = "Player = " + currentPlayer; //veranderd tekst
        winnerChecker(); //checkt winnaar
    } else{
        console.log("Rerolling.."); //als box 1 in gebruik is dan logt ie rerolling
        aiPlayerFunc(); //pakt een nieuw randomated getal
    }
}

function avaibleCheckTwo(){ //etc x9
    if(boxTwoUsed == false){
        boxTwoUsed = true;
        boxTwo.innerHTML = aiPlayer;
        currentPlayer = x;
        playerText.innerHTML = "Player = " + currentPlayer;
        winnerChecker();
    } else{
        console.log("Rerolling..");
        aiPlayerFunc();
    }
}

function avaibleCheckThree(){
    if(boxThreeUsed == false){
        boxThreeUsed = true;
        boxThree.innerHTML = aiPlayer;
        currentPlayer = x;
        playerText.innerHTML = "Player = " + currentPlayer;
        winnerChecker();
    } else{
        console.log("Rerolling..");
        aiPlayerFunc();
    }
}

function avaibleCheckFour(){
    if(boxFourUsed == false){
        boxFourUsed = true;
        boxFour.innerHTML = aiPlayer;
        currentPlayer = x;
        playerText.innerHTML = "Player = " + currentPlayer;
        winnerChecker();
    } else{
        console.log("Rerolling..");
        aiPlayerFunc();
    }
}

function avaibleCheckFive(){
    if(boxFiveUsed == false){
        boxFiveUsed = true;
        boxFive.innerHTML = aiPlayer;
        currentPlayer = x;
        playerText.innerHTML = "Player = " + currentPlayer;
        winnerChecker();
    } else{
        console.log("Rerolling..");
        aiPlayerFunc();
    }
}

function avaibleCheckSix(){
    if(boxSixUsed == false){
        boxSixUsed = true;
        boxSix.innerHTML = aiPlayer;
        currentPlayer = x;
        playerText.innerHTML = "Player = " + currentPlayer;
        winnerChecker();
    } else{
        console.log("Rerolling..");
        aiPlayerFunc();
    }
}

function avaibleCheckSeven(){
    if(boxSevenUsed == false){
        boxSevenUsed = true;
        boxSeven.innerHTML = aiPlayer;
        currentPlayer = x;
        playerText.innerHTML = "Player = " + currentPlayer;
        winnerChecker();
    } else{
        console.log("Rerolling..");
        aiPlayerFunc();
    }
}

function avaibleCheckEight(){
    if(boxEightUsed == false){
        boxEightUsed = true;
        boxEight.innerHTML = aiPlayer;
        currentPlayer = x;
        playerText.innerHTML = "Player = " + currentPlayer;
        winnerChecker();
    } else{
        console.log("Rerolling..");
        aiPlayerFunc();
    }
}

function avaibleCheckNine(){
    if(boxNineUsed == false){
        boxNineUsed = true;
        boxNine.innerHTML = aiPlayer;
        currentPlayer = x;
        playerText.innerHTML = "Player = " + currentPlayer;
        winnerChecker();
    } else{
        console.log("Rerolling..");
        aiPlayerFunc();
    }
}