var player = '';

var componentsArray = [];


var myGameArea = {
    canvas : document.createElement("canvas"),
    frame: 1,
    start : function() {
      this.canvas.width = 650;
      this.canvas.height = 400;
      this.ctx = this.canvas.getContext("2d");
      console.log(this.ctx)
      this.canvas.style.border = "1px solid blue";
      document.getElementById('game-board').appendChild(this.canvas);
      // this.frameNo = 0;
      //this.interval = setInterval(updateCanvas(this.context, this.canvas), 20);
      this.interval = setInterval(game, 20);
    },
    clear: function() {
      this.grd = this.ctx.createLinearGradient(0, 0, 0, 170);
      this.grd.addColorStop(0.4, "#074684");
      this.grd.addColorStop(0.7, "#0EA5C6");
      this.grd.addColorStop(0.9, "#A0EDF7");
      this.grd.addColorStop(1, "#F2EFB6");

      this.ctx.fillStyle = this.grd;
      this.ctx.fillRect(0,0,650,400);
      //this.context.drawImage(image,0,0, this.canvas.width, this.canvas.height); 
      }
  }
  
window.onload = function(){
  myGameArea.start();
  myGameArea.clear();
  player = new Player(myGameArea.ctx);
  console.log(myGameArea.ctx)
  // console.log('josue')
}

  function game() {
    
    player.draw()
    //Pause()
     myGameArea.frame += 1;
    if(myGameArea.frame % 40 === 0)componentsArray.push(new Component(myGameArea.ctx));
    player.movePlayer()
    componentsArray.forEach(function(component) {
      component.draw();
      component.move();
    })
  }
  


