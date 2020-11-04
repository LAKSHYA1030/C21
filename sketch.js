function setup() {
  createCanvas(400,400);
  FixedRect = createSprite(200, 100, 20, 20);
  FixedRect.shapeColor = "Green";

  MovingRect = createSprite(300, 100, 20, 20);
  MovingRect.shapeColor = "Green";

  ABC = createSprite(100, 200, 20, 20);
  ABC.shapeColor = "Blue";

  Bablu = createSprite(300, 200, 20, 20);
  Bablu.shapeColor = "Orange";


}

function draw() {
  background(255,255,255);  

  Bablu.x = World.mouseX;
  Bablu.y = World.mouseY;
  
  if (isTouching(Bablu, ABC)) {
    Bablu.shapeColor = "Red";
    ABC.shapeColor = "Red";
  }

  else {
    Bablu.shapeColor = "Green";
    ABC.shapeColor = "Green";
  }
  drawSprites();
}
 
function isTouching(object1, object2) {
  if (object1.x - object2.x < object1.width/2 + object2.width/2 && object1.y - object2.y < object1.height/2 + object2.height/2  && object2.y - object1.y < object2.height/2 + object1.height/2 && object2.x - object1.x < object2.width/2 + object1.width/2) {
    return true;
  } 
 
  else {
    return false;
  }
 }