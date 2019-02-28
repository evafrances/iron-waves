
function Player(ctx) {
    console.log(ctx)
    this.ctx = ctx;
    this.x = 50;
    this.y = 50;
    this.isMovingRight = false;
    this.isMovingLeft = false;
    this.isMovingUp = false;
    this.isMovingDown = false;
  
    this.width = 50;
    this.height = 50;
    this.color = 'black'
  }
  
  Player.prototype.movePlayer = function() {
  
    document.onkeydown = function(e) {
      switch(e.keyCode){
        case 39:
          this.isMovingRight = true;
          break
        case 37:
          this.isMovingLeft = true;
          break
        case 38:
          this.isMovingUp = true;
          break
        case 40:
          this.isMovingDown = true;
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
    this.ctx.beginPath();
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height)
    this.ctx.closePath()
}