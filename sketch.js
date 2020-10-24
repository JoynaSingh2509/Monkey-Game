var monkey , monkey_running, ground;
var banana ,bananaImage,  stone, stoneImage;
var foodGroup, obstacleGroup;
var survivaltime=0;

function preload(){

monkey_running =           loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
bananaImage = loadImage("banana.png"); 
stoneImage = loadImage("obstacle.png");
 
}

function setup() {
createCanvas(400,400);
monkey=createSprite(70,325,20,20);
monkey.addAnimation("running",monkey_running);
monkey.scale=0.1;
  
ground=createSprite(200,360,400,10);
ground.shapeColor ="chocolate";
 ground.x = ground.width/2;
ground.velocityX = -4;
  console.log(ground.x); 
  
obstaclesGroup=new Group();
foodGroup=new Group();
}

function draw() {
background("snow");
  fill(0);
  textSize(15);
  textFont("century gothic");
  survivaltime=Math.ceil(frameCount/frameRate())
  text("Survival Time :- "+survivaltime,160,30);
  
  bananas();
  stones();
  if (ground.x < 400) {
  ground.x = ground.width / 2;
}
  
  if(keyDown("space")&& monkey.y >= 100) {
       monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  
  drawSprites();
}

function bananas(){
  if (frameCount % 80=== 0) {
  banana=createSprite(200,200,10,10);
  banana.y = Math.round(random(120,220));
  banana.addImage(bananaImage);
  banana.scale=0.08;
  banana.velocityX=-3;
  banana.lifetime=65;
  foodGroup.add(banana);
}}

function stones(){
  if (frameCount % 300=== 0) {
  stone=createSprite(200,335,10,10);
  stone.addImage(stoneImage);
  stone.scale=0.1;
  stone.velocityX=-2;
  stone.lifetime=100;
  obstaclesGroup.add(stone);
}}
