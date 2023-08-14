function setup() {
    let numberOfPlayers = prompt("Insert number of players",);
    let players = [];
    let winningAmount = prompt("Set the winning amount of points",);
    let input = document.querySelector("#input");
    let btn = document.querySelector("#btn");


    document.getElementsByTagName("main")[0].innerHTML = "<h2>Scores</h2><table id='scoreTable'><tr id='scoreTableHeader'><th>Round</th>";
    
    for ( i = 0; i < numberOfPlayers; i++ ) {
        players[i] = prompt("Insert Player " + (i+1) + " name");
        document.getElementById("scoreTableHeader").innerHTML += ("<th>" + players[i] + "</th>");
    }



    document.getElementsByTagName("main").innerHTML += "</tr></table>";
}

function rounds() {

    for ( let round = 1; round < 3; round++) {
        document.getElementById("scoreTable").innerHTML += "<tr>";

        for ( let i = 0; i < numberOfPlayers; i++ ) {   
            btn.addEventListener("click", () => {
                // players[i][round] = input.value;  
                document.getElementById("scoreTable").innerHTML += "<td>" + 4 + "</td>";
            });   

        }
        document.getElementById("scoreTable").innerHTML += "</tr>"
    }
    
    //document.getElementById("scoreTable").innerHTML = "<th>" + numberOfPlayers + "</th>";

}



