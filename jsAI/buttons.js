let boxOne = document.body.querySelector("#boxone"); //zelfde als in js map
boxOne.addEventListener('click', hasBeenUsedFuncOne);

let boxTwo = document.body.querySelector("#boxtwo");
boxTwo.addEventListener('click', hasBeenUsedFuncTwo);

let boxThree = document.body.querySelector("#boxthree");
boxThree.addEventListener('click', hasBeenUsedFuncThree);

let boxFour = document.body.querySelector("#boxfour");
boxFour.addEventListener('click', hasBeenUsedFuncFour);

let boxFive = document.body.querySelector("#boxfive");
boxFive.addEventListener('click', hasBeenUsedFuncFive);

let boxSix = document.body.querySelector("#boxsix");
boxSix.addEventListener('click', hasBeenUsedFuncSix);

let boxSeven = document.body.querySelector("#boxseven");
boxSeven.addEventListener('click', hasBeenUsedFuncSeven);

let boxEight = document.body.querySelector("#boxeight");
boxEight.addEventListener('click', hasBeenUsedFuncEight);

let boxNine = document.body.querySelector("#boxnine");
boxNine.addEventListener('click', hasBeenUsedFuncNine);

function hasBeenUsedFuncOne(){
    if (boxOneUsed == false && playerTurn == true){ //zelfde als in js map
        boxOne.innerHTML = normalPlayer;
        setTimeout(aiPlayerFunc, 1000) //runt aiPlayer func nog een keer want deze is al in gebruik
        boxOneUsed = true;
        allBeenUsedFunc();
        currentPlayerFunc()

        playerTurn = false;
        winnerChecker();
    }
}

function hasBeenUsedFuncTwo(){
    if (boxTwoUsed == false && playerTurn == true){
        boxTwo.innerHTML = normalPlayer;
        setTimeout(aiPlayerFunc, 1000)
        boxTwoUsed = true;
        allBeenUsedFunc();
        currentPlayerFunc()

        playerTurn = false;
        winnerChecker();
    }
}

function hasBeenUsedFuncThree(){
    if (boxThreeUsed == false && playerTurn == true){
        boxThree.innerHTML = normalPlayer;
        setTimeout(aiPlayerFunc, 1000)
        boxThreeUsed = true;
        allBeenUsedFunc();
        currentPlayerFunc()

        playerTurn = false;
        winnerChecker();
    }
}

function hasBeenUsedFuncFour(){
    if (boxFourUsed == false && playerTurn == true){
        boxFour.innerHTML = normalPlayer;
        setTimeout(aiPlayerFunc, 1000)
        boxFourUsed = true;
        allBeenUsedFunc();
        currentPlayerFunc()

        playerTurn = false;
        winnerChecker();
    }
}

function hasBeenUsedFuncFive(){
    if (boxFiveUsed == false && playerTurn == true){
        boxFive.innerHTML = normalPlayer;
        setTimeout(aiPlayerFunc, 1000)
        boxFiveUsed = true;
        allBeenUsedFunc();
        currentPlayerFunc()

        playerTurn = false;
        winnerChecker();
    }
}

function hasBeenUsedFuncSix(){
    if (boxSixUsed == false && playerTurn == true){
        boxSix.innerHTML = normalPlayer;
        setTimeout(aiPlayerFunc, 1000)
        boxSixUsed = true;
        allBeenUsedFunc();
        currentPlayerFunc()

        playerTurn = false;
        winnerChecker();
    }
}

function hasBeenUsedFuncSeven(){
    if (boxSevenUsed == false && playerTurn == true){
        boxSeven.innerHTML = normalPlayer;
        setTimeout(aiPlayerFunc, 1000)
        boxSevenUsed = true;
        allBeenUsedFunc();
        currentPlayerFunc()

        playerTurn = false;
        winnerChecker();
    }
}

function hasBeenUsedFuncEight(){
    if (boxEightUsed == false && playerTurn == true){
        boxEight.innerHTML = normalPlayer;
        setTimeout(aiPlayerFunc, 1000)
        boxEightUsed = true;
        allBeenUsedFunc();
        currentPlayerFunc()

        playerTurn = false;
        winnerChecker();
    }
}

function hasBeenUsedFuncNine(){
    if (boxNineUsed == false && playerTurn == true){
        boxNine.innerHTML = normalPlayer;
        setTimeout(aiPlayerFunc, 1000)
        boxNineUsed = true;
        allBeenUsedFunc();
        currentPlayerFunc()

        playerTurn = false;
        winnerChecker();
    }
}