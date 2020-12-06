var monkey , monkey_running, ground
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var survivalTime  = 0;

function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaclesImage = loadImage("obstacle.png");
 
}

function setup() {
  
  monkey = createSprite(80,315,20,20)
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  
  ground = createSprite(400,350,900,10);
  
   obstacleGroup = new Group();
  
  bananaGroup = new Group();
  
}


function draw() {
createCanvas(600,600);

  b();
  o();
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time: "+ survivalTime, 100,50);
  
  ground.x = ground.width/2;
  ground.velocityX = -4;
  console.log(ground.x);
  
  if(keyDown("space")) {
    monkey.velocityY = -18.5;
  }
  
   monkey.velocityY = monkey.velocityY + 0.8;
   monkey.collide(ground);
  
  console.log(frameCount);
  
  drawSprites();
}

function b() {
  if(frameCount % 80 === 0) {
  banana = Math.round(random(120,200));
  banana = createSprite(120,120,10,10);
  banana.addImage(bananaImage);
  banana.velocityY = -6;
  banana.Lifetime = 100;
  banana.scale = 0.1;
  bananaGroup.add(banana);
}
}

function o() {
  if(frameCount %300 === 0) {
  obstacle = createSprite(550,305,20,20);
  obstacle.addImage(obstaclesImage);
  obstacle.velocityX = -6;
  obstacle.scale = 0.2;
  obstacle.Lifetime = 10;
  obstacleGroup.add(obstacle);
  }
}