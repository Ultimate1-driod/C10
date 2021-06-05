var trex, trex_running, edges;
var groundImage;
var ground
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  ground = loadImage("ground2.png");
}

function setup(){
  createCanvas(600,200);
  groundImage = createSprite(200,180,400,20);
  groundImage.addImage("ground",ground);
  // creating trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();
  
  //adding scale and position to trex
  trex.scale = 0.5;
  trex.x = 50
}


function draw(){
  //set background color 
  background("white");
  
  //logging the y position of the trex
  console.log(trex.y)
  
  //jump when space key is pressed
  if(keyDown("space")){
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.5;
  groundImage.velocityX = -10
  if (groundImage.x < 0)
  {
    groundImage.x = groundImage.width / 2
  }
  //stop trex from falling down
  trex.collide(groundImage)
  drawSprites();
}