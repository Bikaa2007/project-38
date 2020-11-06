var bananaImage,obstacle_img,Monkey,obstacleGroup,background,score;



function preload() {
  backgroundImage=loadImage("jungle.jpg");
  monkey_running =
  loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png","Monkey_06.png", "Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  bananaImage=loadImage("Banana.png");
  obstacle_img=loadImage("stone.png");
}

function setup() {
  createCanvas(400, 400);
  background.addImage= "jungle.png";
  background.velocityX=-4;
  
}

function draw() {
 if(obstacleGroup.isTouching(Monkey)){
   Monkey.scale=0.2;
 }

  
  switch(score){
      case 10:Monkey.scale=0.12;
      break;
      case 20:Monkey.scale=0.14;
      break;
      case 30:Monkey.scale=0.16;
      break;
      case 40:Monkey.scale=0.18;
    default: break;
  }
drawSprites();
  
  stroke("white");
  textsize(20);
  fill("white");
  text("score:"+score,500,500);
}