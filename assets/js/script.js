// DOM loading
// button elements and event listeners

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            let elementChoice = this.getAttribute("data-type");
            console.log(elementChoice);
            runGame(elementChoice);
            
        })
            
    }

    runGame();
})


function runGame(elementChoice) {
    let randSelect = Math.floor(Math.random()* 4 + 1);
    console.log(randSelect);
    if (elementChoice === "electric"){
        if (randSelect === 3) {
            alert("Win");
        } else if (randSelect === 4) {
            alert("Lose");
        } else {
            alert("Draw");
        }
    } else if (elementChoice === "fire"){
        if (randSelect === 4) {
            alert("Win");
        } else if (randSelect === 3) {
            alert("Lose");
        } else {
            alert("Draw");
        }
    } else if (elementChoice === "water"){
        if (randSelect === 2) {
            alert("Win");
        } else if (randSelect === 3) {
            alert("Draw");
        } else {
            alert("Lose");
        }
    } else if (elementChoice === "earth"){
        if (randSelect === 3) {
            alert("Win");
        } else if (randSelect === 2) {
            alert("Lose");
        } else {
            alert("Draw");
        }
    }




}

function playerSelection() {

}

function compRandSelection() {
    
}



function whoWinsRound() {

}

function playerWins() {

}

function draw() {

}

function compWins() {

}

function whoWins() {

}

function incrementRound() {

}

function incrementWins() {

}

function incrementLosses() {

}

function restartGame() {

}

function helpScreen() {

}
