
var player = '';
var componentsArray = [];
var sharksArray = [];
var score = 0;
var points = 100;

//game track
var myGameArea = {
    canvas : document.createElement("canvas"),
    frame: 1,
    stop: false,
    difficult: 40,
    start : function() {
      this.canvas.width = 800;
      this.canvas.height = 550;
      this.ctx = this.canvas.getContext("2d");
      this.canvas.style.border = "1px solid #4590CE";
      document.getElementById('game-board').appendChild(this.canvas);
      this.interval = setInterval(game, 20);
    },
    clear: function() {
      this.grd = this.ctx.createLinearGradient(0, 0, 0, 170);
      this.grd.addColorStop(0.4, "#182E37");
      this.grd.addColorStop(0.9, "#3A5964");
      this.grd.addColorStop(1, "#527884");
      this.ctx.fillStyle = this.grd;
      this.ctx.fillRect(0,0,800,550);
      },
      stop : function() {
        clearInterval(this.interval);
    }
  }


function game() {
  myGameArea.clear();
  player.draw();
    myGameArea.frame += 1;
  if(myGameArea.frame % myGameArea.difficult === 0)componentsArray.push(new Component(myGameArea.ctx, myGameArea.canvas));
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
 
  player.movePlayer()
  score += 0.01;
}
  
//calling functions
window.onload = function(){
  myGameArea.start();
  player = new Player(myGameArea.ctx, myGameArea.canvas);
} 

  


