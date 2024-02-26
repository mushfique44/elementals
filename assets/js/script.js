
//Declaring a variable to equal the electric button from HTML
const electicButton = document.querySelector('.btn_electric');

//Declaring the posible outcomes of which elements win
const outcomes = [{
    name: "electric",
    beats: "water",
    lossTo: "earth",
    drawTo: "fire",
    num: 1
},{
    name: "fire",
    beats: "earth",
    lossTo: "water",
    drawTo: "electric",
    num: 2
},{
    name: "water",
    beats: "fire",
    lossTo: "electric",
    drawTo: "earth",
    num: 3
},{
    name: "earth",
    beats: "electric",
    lossTo: "fire",
    drawTo: "water",
    num: 4
},
];

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
})


function runGame(playerSelects) {
    let compSelects = compRandSelection();
    console.log(compSelects['name']);
    console.log(compSelects['beats']);

    
    

    const result = whoWinsRound(playerSelects, compSelects);

    alert(result);
    

}

function playerSelection(elementChoice, electicButton) {
    let playerSelects = elementChoice;
    document.getElementById('player_element').textContent = elementChoice;

}

function compRandSelection() {
    let randSelect = outcomes[Math.floor(Math.random()* outcomes.length)];
    return randSelect;
    //document.getElementById('comp_element').textContent = ;
    // if (randSelect === 1) {
    //     document.getElementById('comp_element').textContent = "Electric";
    // } else if (randSelect === 2) {
    //     document.getElementById('comp_element').textContent = "Fire";
    // } else if (randSelect === 3) {
    //     document.getElementById('comp_element').textContent = "Water";
    // } else if (randSelect === 4) {
    //     document.getElementById('comp_element').textContent = "Earth";
    // }
}



function whoWinsRound(playerSelects, compSelects) {
    

    if (playerSelects === compSelects['name']) {
        return "Draw";
    } else if (playerSelects === compSelects['lossTo']) {
         return "Win";
    } else if (playerSelects === compSelects['drawTo']){
        return "Draw";
    } else {
        return "Lose";
    }
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
