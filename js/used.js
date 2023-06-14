let boxOne = document.body.querySelector("#boxone"); //haalt box 1 op 
boxOne.addEventListener('click', hasBeenUsedFuncOne); //maakt een onclick even aan

let boxTwo = document.body.querySelector("#boxtwo"); //etc
boxTwo.addEventListener('click', hasBeenUsedFuncTwo); //etc

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
    if(hasBeenUsed == false){ //als box nog niet in gebruik is dan word ie gebruikt
        boxOneFunc()
    } 
}

function hasBeenUsedFuncTwo(){
    if(hasBeenUsed == false){ //etc
        boxTwoFunc()
    } 
}

function hasBeenUsedFuncThree(){
    if(hasBeenUsed == false){
        boxThreeFunc()
    } 
}

function hasBeenUsedFuncFour(){
    if(hasBeenUsed == false){
        boxFourFunc()
    } 
}

function hasBeenUsedFuncFive(){
    if(hasBeenUsed == false){
        boxFiveFunc()
    } 
}

function hasBeenUsedFuncSix(){
    if(hasBeenUsed == false){
        boxSixFunc()
    } 
}

function hasBeenUsedFuncSeven(){
    if(hasBeenUsed == false){
        boxSevenFunc()
    } 
}

function hasBeenUsedFuncEight(){
    if(hasBeenUsed == false){
        boxEightFunc()
    } 
}

function hasBeenUsedFuncNine(){
    if(hasBeenUsed == false){
        boxNineFunc()
    } 
}