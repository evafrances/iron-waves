var changePoints = document.getElementsByClassName("points")[0];
var changelives = document.querySelector(".surfer-lives");

//función para cambiar puntuación
function change(player){
    changePoints.innerHTML = player.howPoints;
}


//function vidas que van restando al colisionar con tiburón
function lives(player){
    player.howlives --;
    changelives.innerHTML = player.howlives;
    console.log('pp')
}
//}
