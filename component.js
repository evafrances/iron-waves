
function Component(ctx, canvas){
  this.ctx = ctx;  
  this.canvas = canvas;
  this.x = Math.floor(Math.random() * 650);
  this.y = Math.floor(Math.random() * 400);
  //speed
  this.dy = 0.1;
  this.width = Math.floor(Math.random() * 350);
  this.height = 30;
}

Component.prototype.draw = function() {
    this.img = new Image();
      this.img.src = 'img/wave.png';
      this.ctx.beginPath();
      this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

Component.prototype.move = function(){
    this.y += this.dy;
}

Component.prototype.collision = function(player) {
  if(
    player.x + player.width >= this.x && 
    this.x + this.width >= player.x && 
    player.y + player.height >= this.y && 
    this.y + this.height >= player.y
    ) {
      player.y = this.y + this.height;
      player.points(this);
  }
}

Component.prototype.time = function() {
  if(myGameArea.frame % 10 === 0){
    this.dy = this.dy + 0.1;
  } else {
      this.dy = this.dy;
  }
  this.y += this.dy
  }
