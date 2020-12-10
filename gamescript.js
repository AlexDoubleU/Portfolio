var playerImage;
var circle;

function load() {
  //allocate new image to the variable to store
  playerImage = new Image();
  circle = new Image();

  // Set the src (the path of the image). This will be loaded by the
  // browser but may not be loaded immediately
  playerImage.src = "Images/player.png";
  circle.src = "Images/redcircle.png";
}

function main() {
  // Get a reference to our canvas by the specified ID
  var canvas = document.getElementById("canvas");

  // Set the width and height
  canvas.width = 648;
  canvas.height = 480;

  // Create 2D drawing context
  var ctx = canvas.getContext('2d');
  ctx.font = "48px sans-serif";
  ctx.textAlign = "center";
  

  // Call draw function, pass the context
  load();
  draw(ctx);
}

var playerx = 0;
var circley = 0;
var circleyoffset = 20;
var circlex = Math.floor(Math.random() * 13); // 0 - 12
var i = 0;
var score = 0;

function draw(ctx) {

  ctx.fillStyle = 'grey';
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  ctx.fillStyle = "green"; // grass
  ctx.fillRect(0,460,ctx.canvas.width,20);

  ctx.fillStyle = "yellow";
  ctx.fillText(score, 610, 50)

  circley = (Math.floor(i/100));

  
  if(circley == 8 && playerx == circlex)
  {
    score = score + 1;
    circley = 0;
    circlex = Math.floor(Math.random() * 13);
    i = 0;
  }

  //if the ball reaches y position 9, reset it back to the top with a random x position
  if(circley == 9)
  {
    circley = 0;
    circlex = Math.floor(Math.random() * 13);
    i = 0;
  }

  // image, sourcex, sourcey,sourcewidth, sourceheight,
  // destx, desty, destwidth, destheight
  ctx.drawImage(circle, circlex * 50 +10, circley*50+circleyoffset, 30, 30);
  ctx.drawImage(playerImage, 36, 352,30, 71,playerx * 50 + 10, 400, 30, 71);

  i++;
  //ask the browser to call this function asap
  window.requestAnimationFrame(function(){draw(ctx);});
}

function keydown(event) {
  if(event.key == "ArrowLeft" && playerx != 0)
  {
    playerx = playerx - 1;
  }
  else if (event.key == "ArrowRight" && playerx != 12)
  {
    playerx = playerx + 1;
  }
}
window.onload = main;
window.addEventListener("keyup", keydown);