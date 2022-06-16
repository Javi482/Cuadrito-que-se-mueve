
var cuadrado; 

function setup() {
  createCanvas(400,400);
  cuadrado = createSprite(200,200,30,30)
  
}

function draw() 
{
  
  background(30);
  if (keyIsDown(RIGHT_ARROW)){
     cuadrado.position.x = cuadrado.position.x + 3;
  }
  if (keyIsDown(UP_ARROW)){
    cuadrado.position.y = cuadrado.position.y - 3;
 }
 if (keyIsDown(DOWN_ARROW)){
  cuadrado.position.y = cuadrado.position.y + 3;
}
if (keyIsDown(LEFT_ARROW)){
  cuadrado.position.x = cuadrado.position.x - 3;
}
  drawSprites();
}




