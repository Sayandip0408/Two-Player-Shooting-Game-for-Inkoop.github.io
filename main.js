var g_count = 0;
var p1_won = p2_won = 0;


function start() {
    var p1_health = p2_health = 100;
    var g_no = document.getElementById('g_no')
    p1_out = document.getElementById('p1_out');
    p2_out = document.getElementById('p2_out');
    var ins = document.getElementById('instructions')

    while (p1_health > 0 && p2_health > 0) {
        var x = Math.floor((Math.random() * 5) + 1);
        var y = Math.floor((Math.random() * 5) + 1);
        p1_health = p1_health - x;
        p2_health = p2_health - y;
        console.log(p1_health + " " + p2_health);
        if (p1_won == 3) {
            // p2_out.innerHTML = "Player 2 won : " + p2_won;
            // p1_out.innerHTML = "Player 1 won : " + p1_won;
            // ins.innerHTML = "As per instruction given: When a player wins 3 games, show the winner of the match.";
            break;
        }
        if (p2_won == 3) {
            // p1_out.innerHTML = "Player 1 won : " + p1_won;
            // p2_out.innerHTML = "Player 2 won : " + p2_won;
            // ins.innerHTML = "As per instruction given: When a player wins 3 games, show the winner of the match.";
            break;
        }

        if (p1_health <= 0 && p2_health <= 0) {
            p1_out.innerHTML = "Player 1 won : " + p1_won;
            p2_out.innerHTML = "Player 2 won : " + p2_won;
            alert("Both players died together...");
        }
        else {
            if (p1_health <= 0) {
                p2_won++;
                p1_out.innerHTML = "Player 1 won : " + p1_won;
                p2_out.innerHTML = "Player 2 won : " + p2_won;
            }
            if (p2_health <= 0) {
                p1_won++;
                p2_out.innerHTML = "Player 2 won : " + p2_won;
                p1_out.innerHTML = "Player 1 won : " + p1_won;
            }
        }
    }

    g_count++;
    g_no.innerHTML = g_count;
    console.log(g_count);

    if (g_count == 5 || p1_won == 3 || p2_won == 3) {
        var start_btn = document.getElementById('start_btn');
        start_btn.style.display = "none";
        if (p1_won == 3 || p2_won == 3)
            ins.innerHTML = "*** As per instruction given the organization: <br> 1. There are 5 such rounds, the player with the most game wins, wins the match/tournament. <br> 2. When a player wins 3 games, show the winner of the match. ***";
        var winner = document.getElementById('winner');
        if (p1_won > p2_won)
            winner.innerHTML = "Player1 won the match!";
        else if (p2_won > p1_won)
            winner.innerHTML = "Player2 won the match!";
        else
            winner.innerHTML = "Match is drawn";
    }

}