
function Component(ctx, canvas){
  this.ctx = ctx;  
  this.canvas = canvas;
  this.x = Math.floor(Math.random() * 650);
  this.y = Math.floor(Math.random() * 400);
//asigno velocidad
  this.dy = 0.1;
  this.width = Math.floor(Math.random() * 350);
  this.height = 40;
  this.color = 000066;
}

Component.prototype.draw = function() {
    this.img = new Image();
      this.img.src = 'img/wave.png';
      this.ctx.beginPath();
      //this.ctx.fillRect();
      this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    //this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)
    }

Component.prototype.move = function(){
    this.y += this.dy;
}

//arrastra elemento al player
//a los obstacles, les pasamos el player nuevo que estamos creando
Component.prototype.collision = function(player) {
  
  if(
    player.x + player.width >= this.x && 
    this.x + this.width >= player.x && 
    player.y + player.height >= this.y && 
    this.y + this.height >= player.y
    ) {
      player.y = this.y + this.height;
      //disparamos función  de puntos al hacer colisión con la ola
      player.points(this);
  }
}

Component.prototype.time = function() {
  //jugando con el tiempo, el frame
  if(myGameArea.frame % 10 === 0){
    this.dy = this.dy + 0.1;
  } else {
      this.dy = this.dy;
  }
  //va a ir sumando 0.1
  this.y += this.dy
  }
