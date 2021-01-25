var fixedRect, movingRect;

function setup(){
  createCanvas(800,400);
  fixedRect = createSprite(700,200,30,300);
  movingRect = createSprite(200,200,100,30);

  box1 = createSprite(100,100,30,30);
  box1.velocityX = 3;

  box2 = createSprite(100,200,30,30);
  box2.velocityX = 3;

  movingRect.debug = true;
  fixedRect.debug = true;

  movingRect.shapeColor = "yellow";
  fixedRect.shapeColor = "yellow";
}



function draw() {
  
  background("white");

  movingRect.x = mouseX;
  movingRect.y = mouseY;
  
  //isTouching function being called, movingRect and fixedRect are called parameters
  if(isTouchings(movingRect,fixedRect)){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else{
    fixedRect.shapeColor = "yellow";
    movingRect.shapeColor = "yellow";
  }
  
  //bounceOff
  bouncey(fixedRect,box1);
  //bounceOff(fixedRect,box2);

  //collide
  collidey(fixedRect,box2);

  drawSprites()
}
