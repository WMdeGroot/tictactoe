function allBeenUsedFunc(){
    if (boxOneUsed == true && boxTwoUsed == true && boxThreeUsed == true && boxFourUsed == true && boxFiveUsed == true && boxSixUsed == true && boxSevenUsed == true && boxEightUsed == true && boxNineUsed == true){ //zelfde als in de js map        allBoxesAreUsed = true;
        console.log(allBoxesAreUsed);
        winnerText.innerHTML = "Winner = No one!";
        setTimeout(restartGame, 3000);
    }
}

function restartGame(){ //zelfde als in js map
    document.querySelector("#boxone").innerHTML = "";
    document.querySelector("#boxtwo").innerHTML = "";
    document.querySelector("#boxthree").innerHTML = "";
    document.querySelector("#boxfour").innerHTML = "";
    document.querySelector("#boxfive").innerHTML = "";
    document.querySelector("#boxsix").innerHTML = "";
    document.querySelector("#boxseven").innerHTML = "";
    document.querySelector("#boxeight").innerHTML = "";
    document.querySelector("#boxnine").innerHTML = "";

    boxOneUsed = false;
    boxTwoUsed = false;
    boxThreeUsed = false;
    boxFourUsed = false;
    boxFiveUsed = false;
    boxSixUsed = false;
    boxSevenUsed = false;
    boxEightUsed = false;
    boxNineUsed = false;
    allBoxesAreUsed = false;

    currentPlayer = x;
    playerText.innerHTML = "Player = " + currentPlayer;
    winnerText.innerHTML = "";

    boxOne.style.backgroundColor = "orange"; //zet alles naar orange
    boxTwo.style.backgroundColor = "orange";
    boxThree.style.backgroundColor = "orange";
    boxFour.style.backgroundColor = "orange";
    boxFive.style.backgroundColor = "orange";
    boxSix.style.backgroundColor = "orange";
    boxSeven.style.backgroundColor = "orange";
    boxEight.style.backgroundColor = "orange";
    boxNine.style.backgroundColor = "orange";
}