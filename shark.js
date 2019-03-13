function Shark(ctx, canvas) {
    this.ctx = ctx;  
    this.canvas = canvas;
    this.x = Math.floor(Math.random() * 650);
    this.y = Math.floor(Math.random() * 400);
    //speed
    this.dx = 0.1;
    this.width = 20;
    this.height = 20;
    this.kiss = true;
  }
  
  Shark.prototype.draw = function(){
         if(this.y > 200){ 
          this.img = new Image();
          this.img.src = 'img/shark2.png';
          this.ctx.beginPath();
          this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        }else{
            this.img = new Image();
            this.img.src = 'img/shark.png';
            this.ctx.beginPath();
            this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height); 
        }
      }
  
  Shark.prototype.move = function(){
    if(this.y > 200){
      this.x -= this.dx;
    }else{
      this.x += this.dx; 
    }
      
  }
  
  Shark.prototype.collision = function(player) {  
  if(
    player.x + player.width >= this.x && 
    this.x + this.width >= player.x && 
    player.y + player.height >= this.y && 
    this.y + this.height >= player.y
    ) {
      if( this.kiss == true){  
        if(player.y = this.y + this.height)
        player.y = this.y + this.height;
        player.points(this);
        lives(player)
        if(player.howlives == 0){   
          player.gameOver();
        }
      }
      this.kiss = false;
  }
}

  Shark.prototype.time = function() {
    if(myGameArea.frame % 30 === 0){
      this.dx = this.dx+ 0.4
    }
  if(this.y > 200){
    this.x -= this.dx;
  }else{
    this.x += this.dx; 
  }
}


  