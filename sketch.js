var path,pathImg;
var runner, runnerImg;
var invisible_boundary_1, invisible_boundary_2;

function preload(){
  //pre-load image
  pathImg = loadImage("path.png");
  runnerImg = loadAnimation("Runner-1.png","Runner-2.png");

}

function setup(){
  createCanvas(400,400);
  //create sprites here
  
  path = createSprite(200,200);
  path.addImage("path",pathImg);
  path.scale = 1.2;

  runner = createSprite(200,300);
  runner.addAnimation("runner",runnerImg);
  runner.scale = 0.05;

  invisible_boundary_1 = createSprite(50,200,10,400);
  invisible_boundary_1.visible = false;

  invisible_boundary_2 = createSprite(355,200,10,400);
  invisible_boundary_2.visible = false;

}

function draw() {
  background("white");
  
  path.velocityY = 4;
  if(path.y>400){
    path.y= height/2;
  }

  runner.x = mouseX;
  runner.collide(invisible_boundary_1);
  runner.collide(invisible_boundary_2);

  drawSprites();
}
