function setup() {
    let numberOfPlayers = prompt("Insert number of players",);
    let players = [];
    let winningAmount = prompt("Set the winning amount of points",);

    document.getElementsByTagName("main")[0].innerHTML = "<h2>Scores</h2><table><tr id='scoreTableHeader'><th>Round</th>";
    
    for ( i = 0; i < numberOfPlayers; i++ ) {
        players[i] = prompt("Insert Player " + (i+1) + " name");
        document.getElementById("scoreTableHeader").innerHTML += ("<th>" + players[i] + "</th>");
    }



    document.getElementsByTagName("main").innerHTML += "</tr></table>";
}




