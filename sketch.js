var box;

function setup() {
  createCanvas(800,400);

  box = createSprite(400,200,50,50)
  box.shapeColor = "slateblue"
}

function draw() 
{
  background("powderblue");

  if(keyDown(RIGHT_ARROW)){
    background("cadetblue");
  }
  
  if(keyDown(LEFT_ARROW)){
    background("cornflowerblue");

  }

  if(keyDown(UP_ARROW)){
    background("purple");
  }
  
  if(keyDown(DOWN_ARROW)){
    background("purple");
  }

  if(keyDown("space")){
    background("midnightblue");
  }

  drawSprites()
}