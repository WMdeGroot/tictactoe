function winnerChecker(){
    if(boxNine.innerHTML == x && boxEight.innerHTML == x && boxSeven.innerHTML == x){ //bepaald winnaar.
        console.log("x wint"); //x wint
        gameWinner = "x"; //gamewinner is x
        winnerText.innerHTML = "Winner = " + gameWinner; //laat in html zien
        boxNine.style.backgroundColor = "green"; //maakt de boxes groen als er een winnaar is
        boxEight.style.backgroundColor = "green";
        boxSeven.style.backgroundColor = "green";
        stopButtons(); //roept stop buttons aan
        setTimeout(restartGame, 3000); //restart game 
    } else if(boxNine.innerHTML == o && boxEight.innerHTML == o && boxSeven.innerHTML == o){ //zelfde als hierboven maar dan voor o
        console.log("o wint");
        gameWinner = "o";
        winnerText.innerHTML = "Winner = " + gameWinner;
        boxNine.style.backgroundColor = "green";
        boxEight.style.backgroundColor = "green";
        boxSeven.style.backgroundColor = "green";
        stopButtons();
        setTimeout(restartGame, 3000);
    }

    if(boxOne.innerHTML == x && boxFour.innerHTML == x && boxSeven.innerHTML == x){ //etc x9
        console.log("x wint");
        gameWinner = "x";
        winnerText.innerHTML = "Winner = " + gameWinner;
        boxOne.style.backgroundColor = "green";
        boxFour.style.backgroundColor = "green";
        boxSeven.style.backgroundColor = "green";
        stopButtons();
        setTimeout(restartGame, 3000);
    } else if(boxOne.innerHTML == o && boxFour.innerHTML == o && boxSeven.innerHTML == o){
        console.log("o wint");
        gameWinner = "o";
        winnerText.innerHTML = "Winner = " + gameWinner;
        boxOne.style.backgroundColor = "green";
        boxFour.style.backgroundColor = "green";
        boxSeven.style.backgroundColor = "green";
        stopButtons();
        setTimeout(restartGame, 3000);
    }

    if(boxOne.innerHTML == x && boxTwo.innerHTML == x && boxThree.innerHTML == x){
        console.log("x wint");
        gameWinner = "x";
        winnerText.innerHTML = "Winner = " + gameWinner;
        boxOne.style.backgroundColor = "green";
        boxTwo.style.backgroundColor = "green";
        boxThree.style.backgroundColor = "green";
        stopButtons();
        setTimeout(restartGame, 3000);
    } else if(boxOne.innerHTML == o && boxTwo.innerHTML == o && boxThree.innerHTML == o){
        console.log("o wint");
        gameWinner = "o";
        winnerText.innerHTML = "Winner = " + gameWinner;
        boxOne.style.backgroundColor = "green";
        boxTwo.style.backgroundColor = "green";
        boxThree.style.backgroundColor = "green";
        stopButtons();
        setTimeout(restartGame, 3000);
    }

    if(boxThree.innerHTML == x && boxSix.innerHTML == x && boxNine.innerHTML == x){
        console.log("x wint");
        gameWinner = "x";
        winnerText.innerHTML = "Winner = " + gameWinner;
        boxThree.style.backgroundColor = "green";
        boxSix.style.backgroundColor = "green";
        boxNine.style.backgroundColor = "green";
        stopButtons();
        setTimeout(restartGame, 3000);
    } else if(boxThree.innerHTML == o && boxSix.innerHTML == o && boxNine.innerHTML == o){
        console.log("o wint");
        gameWinner = "o";
        winnerText.innerHTML = "Winner = " + gameWinner;
        boxThree.style.backgroundColor = "green";
        boxSix.style.backgroundColor = "green";
        boxNine.style.backgroundColor = "green";
        stopButtons();
        setTimeout(restartGame, 3000);
    }

    if(boxTwo.innerHTML == x && boxFive.innerHTML == x && boxEight.innerHTML == x){
        console.log("x wint");
        gameWinner = "x";
        winnerText.innerHTML = "Winner = " + gameWinner;
        boxTwo.style.backgroundColor = "green";
        boxFive.style.backgroundColor = "green";
        boxEight.style.backgroundColor = "green";
        stopButtons();
        setTimeout(restartGame, 3000);
    } else if(boxTwo.innerHTML == o && boxFive.innerHTML == o && boxEight.innerHTML == o){
        console.log("o wint");
        gameWinner = "o";
        winnerText.innerHTML = "Winner = " + gameWinner;
        boxTwo.style.backgroundColor = "green";
        boxFive.style.backgroundColor = "green";
        boxEight.style.backgroundColor = "green";
        stopButtons();
        setTimeout(restartGame, 3000);
    }

    if(boxOne.innerHTML == x && boxFive.innerHTML == x && boxNine.innerHTML == x){
        console.log("x wint");
        gameWinner = "x";
        winnerText.innerHTML = "Winner = " + gameWinner;
        boxOne.style.backgroundColor = "green";
        boxFive.style.backgroundColor = "green";
        boxNine.style.backgroundColor = "green";
        stopButtons();
        setTimeout(restartGame, 3000);
    } else if(boxOne.innerHTML == o && boxFive.innerHTML == o && boxNine.innerHTML == o){
        console.log("o wint");
        gameWinner = "o";
        winnerText.innerHTML = "Winner = " + gameWinner;
        boxOne.style.backgroundColor = "green";
        boxFive.style.backgroundColor = "green";
        boxNine.style.backgroundColor = "green";
        stopButtons();
        setTimeout(restartGame, 3000);
    }

    if(boxSeven.innerHTML == x && boxFive.innerHTML == x && boxThree.innerHTML == x){
        console.log("x wint");
        gameWinner = "x";
        winnerText.innerHTML = "Winner = " + gameWinner;
        boxSeven.style.backgroundColor = "green";
        boxFive.style.backgroundColor = "green";
        boxThree.style.backgroundColor = "green";
        stopButtons();
        setTimeout(restartGame, 3000);
    } else if(boxSeven.innerHTML == o && boxFive.innerHTML == o && boxThree.innerHTML == o){
        console.log("o wint");
        gameWinner = "o";
        winnerText.innerHTML = "Winner = " + gameWinner;
        boxSeven.style.backgroundColor = "green";
        boxFive.style.backgroundColor = "green";
        boxThree.style.backgroundColor = "green";
        stopButtons();
        setTimeout(restartGame, 3000);
    }

    if(boxFour.innerHTML == x && boxFive.innerHTML == x && boxSix.innerHTML == x){
        console.log("x wint");
        gameWinner = "x";
        winnerText.innerHTML = "Winner = " + gameWinner;
        boxFour.style.backgroundColor = "green";
        boxFive.style.backgroundColor = "green";
        boxSix.style.backgroundColor = "green";
        stopButtons();
        setTimeout(restartGame, 3000);
    } else if(boxFour.innerHTML == o && boxFive.innerHTML == o && boxSix.innerHTML == o){
        console.log("o wint");
        gameWinner = "o";
        winnerText.innerHTML = "Winner = " + gameWinner;
        boxFour.style.backgroundColor = "green";
        boxFive.style.backgroundColor = "green";
        boxSix.style.backgroundColor = "green";
        stopButtons();
        setTimeout(restartGame, 3000);
    }
}

function stopButtons(){
    if(gameWinner === "o"){
        document.querySelector("#boxone").innerHTML = " o"; //als o wint veranderen alle vakjes naar o
        document.querySelector("#boxtwo").innerHTML = " o"; //etc x9
        document.querySelector("#boxthree").innerHTML = " o";
        document.querySelector("#boxfour").innerHTML = " o";
        document.querySelector("#boxfive").innerHTML = " o";
        document.querySelector("#boxsix").innerHTML = " o";
        document.querySelector("#boxseven").innerHTML = " o";
        document.querySelector("#boxeight").innerHTML = " o";
        document.querySelector("#boxnine").innerHTML = " o";
        if(PlayersDefined == true){ //als de spelers zijn opgegeven
            scoreTwo++; //o is player 2 dus o krijgt een punt 
            printLeaderFunc(); //print de score uit
        }
    } else if(gameWinner === "x"){ 
        document.querySelector("#boxone").innerHTML = " x"; //x wint dus veranderd alles naar x
        document.querySelector("#boxtwo").innerHTML = " x";
        document.querySelector("#boxthree").innerHTML = " x";
        document.querySelector("#boxfour").innerHTML = " x";
        document.querySelector("#boxfive").innerHTML = " x";
        document.querySelector("#boxsix").innerHTML = " x";
        document.querySelector("#boxseven").innerHTML = " x";
        document.querySelector("#boxeight").innerHTML = " x";
        document.querySelector("#boxnine").innerHTML = " x";
        if(PlayersDefined == true){ //zelfde maar voor x
            scoreOne++; //etc
            printLeaderFunc();
        }
    }
}