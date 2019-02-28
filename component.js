
function Component(ctx, canvas){
  this.ctx = ctx;  
  this.canvas = canvas;
  this.x = Math.floor(Math.random() * 650);
  this.y = Math.floor(Math.random() * 400);
//no entiendo *2 +1
  this.dy = Math.floor((Math.random()*2)+1);

  this.width = Math.floor(Math.random() * 350);
  this.height = 10;
  this.color = "pink";
}


Component.prototype.draw = function() {
        this.ctx.beginPath();
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
        this.ctx.closePath();
        //this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)
        
    }

Component.prototype.move = function(){
    this.y += this.dy;
}

