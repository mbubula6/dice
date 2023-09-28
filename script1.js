alert("huh?");

const setup1 = document.getElementById("setup1");
const round = document.getElementById("round");
const table = document.getElementById("table");
const body = document.querySelector("body");
const scores = document.getElementById("scores");

let roundNum = 0;
let numberOfPlayers;
let playerScore = [];

setup1.addEventListener("click", () => {
    numberOfPlayers = prompt("Insert number of players",);
    let playerName = [];

    const newRow = document.createElement("tr");
    table.appendChild(newRow);

    const cell = document.createElement("th");
        newRow.appendChild(cell);
        cell.insertAdjacentText("beforeend", "Round");

    for ( row = 0; row < numberOfPlayers; row++) {
        playerName[row] = prompt("Insert player " + (row+1) + " name:", );
        const cell = document.createElement("th");
        newRow.appendChild(cell);
        cell.insertAdjacentText("beforeend", playerName[row]);
        playerScore[row] = 0;
    }

    const cellScore = document.createElement("th");
    scores.appendChild(cellScore);
    cellScore.insertAdjacentText("beforeend", "Score");

    for ( row = 0; row < numberOfPlayers; row++) {
        const cell = document.createElement("th");
        scores.appendChild(cell);
        cell.insertAdjacentText("beforeend", playerScore[row]);
    }

    
    setup1.remove();
});

round.addEventListener("click", () => {
    roundNum++;
    const newRow = document.createElement("tr");
    table.appendChild(newRow);

    const cell = document.createElement("td");
        newRow.appendChild(cell);
        cell.insertAdjacentText("beforeend", roundNum);

    for ( i = 0; i < numberOfPlayers; i++) {
        const cell = document.createElement("td");
        cell.id = "cell-" + roundNum + "-" + i;
        newRow.appendChild(cell);
        const input = document.createElement("input");
        cell.appendChild(input);

    }

    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => {
        input.addEventListener("input", () => {
        
            if ( input.value == "") {
                body.style.backgroundColor = "red";
            } else {
                body.style.backgroundColor = "blue";
            }
        });
    });
});