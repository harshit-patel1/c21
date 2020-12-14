var fixedRect, movingRect, obj1, obj2, obj3, obj4;

function setup() {
  createCanvas(1200,800);

  edges = createEdgeSprites();

  obj1 = createSprite(200, 100, 50, 50);
  obj2 = createSprite(400, 100, 50, 50);
  obj3 = createSprite(600, 100, 50, 50);
  obj4 = createSprite(800, 100, 50, 50);

  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);
  
  bounceOff(fixedRect, edges[0]);
  bounceOff(fixedRect, edges[1]);
  bounceOff(fixedRect, edges[2]);
  bounceOff(fixedRect, edges[3]);

  movingRect.x =  World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect, fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  bounceOff(movingRect, fixedRect);
  drawSprites();
}

