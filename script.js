var player = '';

var componentsArray = [];
var sharksArray = [];
//score nos va a marcar el tiempo
var score = 0;
var points = 100;

//pista de juego
var myGameArea = {
    canvas : document.createElement("canvas"),
    frame: 1,
    stop: false,
    difficult: 40,
    start : function() {
      this.canvas.width = 800;
      this.canvas.height = 400;
      this.ctx = this.canvas.getContext("2d");
      this.canvas.style.border = "1px solid blue";
      document.getElementById('game-board').appendChild(this.canvas);
      this.interval = setInterval(game, 20);
    },
    clear: function() {
      this.grd = this.ctx.createLinearGradient(0, 0, 0, 170);
      this.grd.addColorStop(0.4, "#182E37");
      this.grd.addColorStop(0.9, "#3A5964");
      this.grd.addColorStop(1, "#527884");

      this.ctx.fillStyle = this.grd;
      this.ctx.fillRect(0,0,800,400);
      //this.context.drawImage(image,0,0, this.canvas.width, this.canvas.height); 
      },
      stop : function() {
        clearInterval(this.interval);
    }
  }

  //pintamos componentes and player
function game() {
  // myGameArea.ctx.clearRect(0,0,650,400)
  myGameArea.clear();
  
  player.draw();
  //Pause()
    myGameArea.frame += 1;
  if(myGameArea.frame % myGameArea.difficult === 0)componentsArray.push(new Component(myGameArea.ctx, myGameArea.canvas));
  
  // if(myGameArea.difficult == 20)
  //   debugger

  componentsArray.forEach(function(component) {
    component.draw();
    component.move();
    component.collision(player);
    component.time();
  })

  if(myGameArea.frame % (myGameArea.difficult * 2) === 0)sharksArray.push(new Shark(myGameArea.ctx, myGameArea.canvas));
  sharksArray.forEach(function(shark) {
    shark.draw();
    shark.move();
    shark.collision(player);
    shark.time();
  })
  //player.move()
  player.movePlayer()
  //queremos que nos mida el tiempo según segundos
  score += 0.01;
}
  
//ejecutamos estas funciones las PRIMERAS
window.onload = function(){
  myGameArea.start();
  player = new Player(myGameArea.ctx, myGameArea.canvas);
} 

  


