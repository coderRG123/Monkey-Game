var PLAY=1;
var END=0;
var gameState;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var jungle, jungle1;
var rest, rest1;
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  jungle1=loadImage("Jungle.jpg");
  rest1=loadImage("re.webp");
  
 
}



function setup() {
  createCanvas(400, 400);
  
   jungle=createSprite(200, 200);
  jungle.addImage("jungle", jungle1);
  jungle.scale=0.9;

  banana=createSprite(500, 250);
  banana.addImage("banana", bananaImage);
  banana.scale=0.1;
  
  monkey=createSprite(100, 380);
  monkey.addAnimation("monkey", monkey_running);
  monkey.scale=0.1;
  
 
  
  obstacle=createSprite(500, 380);
  obstacle.addAnimation("obstacle",obstacleImage);
  obstacle.scale=0.15;
  
  obstacle.velocityX=-3;
  banana.velocityX=-3;
  score=0;
  gameState=1;
}


function draw() {
  background("white");
  if (gameState===1){
  
  if (obstacle.x<0){
    obstacle.x=400;
    banana.x=400;
  }
  if (banana.x<0){
    banana.x=400;
    obstacle.x=400;
  }
  
  if (monkey.isTouching(banana)){
    score=score+1;
    banana.x=400;
  }
  
  if (monkey.y<150){
    monkey.velocityY=+10;
  }
  
  if (monkey.isTouching(obstacle)){
    obstacle.x=400;
    banana.x=400;
    monkey.y=380;
    score=score-1;
  }
  
  if (monkey.y>380){
    monkey.y=380;
  }

  
  if (keyDown("space")&&monkey.y>370){
     monkey.velocityY=-5;
  }
    
    if (score>9){
      gameState=0;
    }
  
  }
  
  if (gameState===0){
    monkey.x=200;
    monkey.y=250;
    monkey.velocityY=0;
    monkey.velocityX=0;
    banana.x=500;
    banana.velocityX=0;
    obstacle.x=500;
    banana.velocityX=0;
    textSize(20);
    text("YOU WIN", 150, 200);
    jungle.visible=false;
    rest=createSprite(200, 300);
    rest.addImage("rest", rest1);
    rest.scale=0.1;
  }
  
  monkey.setCollider("circle", 20, 20);
  monkey.debug=false
  
  obstacle.setCollider("circle", 10, 10);
  obstacle.debug=false
  
  banana.setCollider("circle", 5, 5);
  banana.debug=false

 drawSprites();
  textSize(20);
  text(score, 200, 100);
}






