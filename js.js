var changePoints = document.getElementsByClassName("points")[0];
var changelives = document.querySelector(".surfer-lives");

//change score
function change(player){
    changePoints.innerHTML = player.howPoints;
}

//subtract lives
function lives(player){
    player.howlives --;
    changelives.innerHTML = player.howlives;
}

