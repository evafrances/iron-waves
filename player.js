
function Player(ctx, canvas) {
    console.log(ctx)
    this.ctx = ctx;
    this.canvas = canvas;
    console.log(canvas)
    this.x0 = this.canvas.width * 0.3;
    this.x = this.x0;
    this.vx = 1;
    this.y0 = this.canvas.height * 0.3;
    this.y = this.y0;
    this.vy = 1;
    this.isMovingRight = false;
    this.isMovingLeft = false;
    this.isMovingUp = false;
    this.isMovingDown = false;
  
    this.width = 50;
    this.height = 50;
    this.color = 'black';
    setTimeout(function(){  }, 3000);
  }
  
  Player.prototype.movePlayer = function() {
  
    document.onkeydown = function(e) {
      switch(e.keyCode){
        case 39:
          this.isMovingRight = true;
          var gravity = 0.4;
          if (this.y >= this.y0 ) {
            this.vy = 1;
          } else {
            this.vy += gravity;
            this.y += this.vy;
          }
          this.vy += gravity;
          console.log(gravity)
          break
        case 37:
          this.isMovingLeft = true;
          var gravity = 0.4;
          if (this.y >= this.y0 ) {
            this.vy = 1;
          } else {
            this.vy += gravity;
            this.y += this.vy;
          }
          this.vy += gravity;
          break
        case 38:
          this.isMovingUp = true;
          var gravity = 0.4;
          if (this.y >= this.y0 ) {
            this.vy = 1;
          } else {
            this.vy += gravity;
            this.y += this.vy;
          }
          this.vy += gravity;
          break
        case 40:
          this.isMovingDown = true;
          var gravity = 0.4;
          if (this.y >= this.y0 ) {
            this.vy = 1;
          } else {
            this.vy += gravity;
            this.y += this.vy;
          }
          this.vy += gravity;
          break
        }
    }.bind(this)
  
    document.onkeyup = function(e) {
      this.isMovingRight = false;
      this.isMovingLeft = false;
      this.isMovingUp = false;
      this.isMovingDown = false;
    }.bind(this)
  
    if(this.isMovingRight === true)this.x += 5;
    if(this.isMovingLeft === true)this.x -= 5;
    if(this.isMovingUp === true)this.y -= 5;
    if(this.isMovingDown === true)this.y += 5;
  }
  
Player.prototype.draw = function() {
    this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)
    this.ctx.beginPath();
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height)
    this.ctx.closePath()
}

/*Player.prototype.move = function() {
    // Aumenta la velocidad en el eje y.
    var gravity = 9;
  
    // solo salta cuando el personaje está en el suelo
    if (this.y >= this.y0 ) {
      this.vy = 1;
    } else {
      this.vy += gravity;
      this.y += this.vy;
    }
    this.vy += gravity;
  };*/


