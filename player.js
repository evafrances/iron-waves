
function Player(ctx, canvas) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.x0 = this.canvas.width * 0.3;
    this.x = this.x0;
    this.vx = 0;
    this.y0 = this.canvas.height * 0.3;
    this.y = this.y0;
    this.vy = 0;
    this.isMovingRight = false;
    this.isMovingLeft = false;
    this.isMovingUp = false;
    this.isMovingDown = false;
    this.changeSpeed = 0;
    this.width = 30;
    this.height = 30;
    this.color = 'black';
    this.howPoints = 0;
    this.howlives = 3;
  }
  
  Player.prototype.movePlayer = function() {
    document.onkeydown = function(e) {
      switch(e.keyCode){
        case 39:
          this.isMovingRight = true;
          this.changeSpeed+=5;
          break
        case 37:
          this.isMovingLeft = true;
          this.changeSpeed+=5;
          break
        case 38:
          this.isMovingUp = true;
          this.changeSpeed+=5;
          break
        case 40:
          this.isMovingDown = true;
          this.changeSpeed+=5;
          break
        }
    }.bind(this)
  
    document.onkeyup = function(e) {
      this.isMovingRight = false;
      this.isMovingLeft = false;
      this.isMovingUp = false;
      this.isMovingDown = false;
      this.vx = 0;
      this.vy = 0;
    }.bind(this)
  
    if(this.isMovingRight === true){
        if(this.changeSpeed > 20) {
            this.vx = this.vx + 0.2;
        } else {
            this.vx = this.vx;
        }
        this.x += this.vx;
    };
    if(this.isMovingLeft === true){
        if(this.changeSpeed > 20) {
            this.vx = this.vx + 0.2;
        } else {
            this.vx = this.vx;
        }
        this.x -= this.vx 
    };
    if(this.isMovingUp === true){
       if(this.changeSpeed > 20) {
            this.vy = this.vy + 0.2;
        } else {
            this.vy = this.vy;
        }
        this.y -= this.vy;  
    };
    if(this.isMovingDown === true){
        if(this.changeSpeed > 20) {
            this.vy = this.vy + 0.2;
        } else {
            this.vy = this.vy;
        }
        this.y += this.vy  
    };
  }
  
Player.prototype.draw = function() {
  //out of the canvas 
  if(this.x > this.canvas.width || this.x < -this.width || this.y > this.canvas.height || this.y < -this.height) {
       this.gameOver();
  } 
    this.ctx.beginPath();
    this.img = new Image();
    this.img.src = 'img/surf.png';
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    this.ctx.closePath()
    this.drawScore(); 
    this.nextLevel();
}

Player.prototype.points = function() {  
    this.howPoints += 0.5;
    change(this)
}

Player.prototype.gameOver = function() {
  this.ctx.beginPath()
  this.ctx.font = "40px Roboto-Regular";
  this.ctx.fillStyle = '#E75D7A'
  this.ctx.fillText('GAME OVER!', this.canvas.width / 3, this.canvas.height / 2)
  this.ctx.closePath()
  myGameArea.stop()
}

Player.prototype.nextLevel = function() {
  if(score <= points && this.howPoints == 100){
    
    this.ctx.beginPath()
    this.ctx.font =  "40px Roboto-Regular";
    this.ctx.fillStyle = '#E75D7A'
    this.ctx.fillText('NEXT LEVEL!', this.canvas.width / 3, this.canvas.height / 2)
    this.ctx.closePath()
    myGameArea.stop()

    setTimeout(function () {
      myGameArea.start()
    }, 5000);
    this.timeLevel2();
    this.howPoints = 0;

  }else{
    this.gameOver;
  }
}

Player.prototype.timeLevel2 = function() {
  myGameArea.difficult = 20;
  points = 300;
}

Player.prototype.drawScore = function() {
  this.ctx.font = "30px Roboto-Regular";;
  this.ctx.fillStyle = '#E75D7A';
  this.ctx.fillText(Math.floor(score), 50, 50);
}




