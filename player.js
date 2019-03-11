
function Player(ctx, canvas) {
    console.log(ctx)
    this.ctx = ctx;
    this.canvas = canvas;
    console.log(canvas)
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
    this.changeSpeed = 0; //asignamos una velocidad que va a incrementar
    this.width = 10;
    this.height = 10;
    this.color = 'black';
    this.howPoints = 0;
    this.howlives = 3;
  }
  
  Player.prototype.movePlayer = function() {
  
    document.onkeydown = function(e) {
      switch(e.keyCode){
        case 39:
          this.isMovingRight = true;
          //cambiamos velocidad
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
      //velocidad vuelve a cero cuando se deja de pulsar la tecla
      this.vx = 0;
      this.vy = 0;
    }.bind(this)
  
    if(this.isMovingRight === true){
        //llega al tiempo e incremento velocidad de 0,1 en 0,1
        if(this.changeSpeed > 20) {
            this.vx = this.vx + 0.2;
        } else {
            this.vx = this.vx;
        }
        //va a ir sumando 0.1
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
  //cuando se sale el surfer del mar 
  if(this.x > this.canvas.width || this.x < -this.width || this.y > this.canvas.height || this.y < -this.height) {
       this.gameOver();
  } 
    this.ctx.beginPath();
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height)
    this.ctx.closePath()
    this.drawScore(); 
    this.nextLevel();
}

//cada vez que surfeo, me va a suma puntos, la ejecuto en component.collision()
Player.prototype.points = function() {  
    this.howPoints += 0.5;
    //this.howPoints += player.vy;
    //disparo la función change en el momento que cambia de puntuación
    change(this)
}


//la voy a utilizar varias veces, por lo que la pongo aparte para llamarla cuando quiera
Player.prototype.gameOver = function() {
  this.ctx.beginPath()
  this.ctx.font = "20px Helvetica";
  this.ctx.fillStyle = 'Black'
  this.ctx.fillText('GAME OVER!!', this.canvas.width / 2, this.canvas.height / 2)
  this.ctx.closePath()
  myGameArea.stop()
}

Player.prototype.nextLevel = function() {
  if(score <= points && this.howPoints == 100){
    
    this.ctx.beginPath()
    this.ctx.font = "20px Helvetica";
    this.ctx.fillStyle = 'Black'
    this.ctx.fillText('NEXT LEVEL!', this.canvas.width / 2, this.canvas.height / 2)
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

//solo se ejecuta en NEXT LEVEL
Player.prototype.timeLevel2 = function() {
  // this function receive an array of sharks
  //jugando con el tiempo, el frame
  myGameArea.difficult = 20;
  points = 300;
  // componentsArray.forEach(function(component) {
  //   shark.dx = shark.dx + 0.4
  // })
}

//pintamos tiempo en segundos
Player.prototype.drawScore = function() {
  this.ctx.font = "30px sans-serif";
  this.ctx.fillStyle = "green";
  this.ctx.fillText(Math.floor(score), 50, 50);
}




