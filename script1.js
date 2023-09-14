    alert("huh?");
    
    const setup1 = document.getElementById("setup1");
    const round = document.getElementById("round");
    const table = document.getElementById("table");
    let roundNum = 0;
    let numberOfPlayers;


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
            newRow.appendChild(cell);


        }



    });

   