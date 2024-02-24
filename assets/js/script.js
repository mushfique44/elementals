// DOM loading
// button elements and event listeners

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "electric") {
            alert('You Clicked Electric element');
            } else if (this.getAttribute("data-type") === "fire") {
                alert('You Clicked Fire element');
            } else if (this.getAttribute("data-type") === "water") {
                alert('You Clicked Water element');
            } else if (this.getAttribute("data-type") === "earth") {
                alert('You Clicked Earth element');
            }
        })
    }
})


function runGame() {

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
