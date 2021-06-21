var fixSprite1,fixedSprite2,fixedSprite3,fixedSprite4;
var movingSprite;
var music;

function preload(){
  music=loadSound("music.mp3");
}

function setup(){
  createCanvas(800,600);

  movingSprite=createSprite(random(10,750),300,20,20);
  movingSprite.shapeColor="white";
  movingSprite.velocityX=3;
  movingSprite.velocityY=3;

  fixSprite1=createSprite(100,590,180,20);
  fixSprite1.shapeColor="red";

  fixSprite2=createSprite(300,590,180,20);
  fixSprite2.shapeColor="green";

  fixSprite3=createSprite(500,590,180,20);
  fixSprite3.shapeColor="blue";

  fixSprite4=createSprite(700,590,180,20);
  fixSprite4.shapecolor="yellow";
}

function draw(){
  background(rgb(10,10,10));

  if(movingSprite.x<0){
    music.stop()
    movingSprite.velocityX=3
  }else if(movingSprite.x>800){
    music.stop()
    movingSprite.velocity=-3
  }

  if(isTouching(movingSprite,fixSprite4)){
    music.play()
    movingSprite.shapeColor="yellow";
    bounceoff(movingSprite,fixSprite4)
  }

  else if(isTouching(movingSprite,fixSprite3)){
  music.stop()
  movingSprite.shapeColor="blue";
  bounceoff(movingSprite,fixSprite3)  
  }
  else if(isTouching(movingSprite,fixSprite2)){
    music.stop()
    movingSprite.shapeColor="green";
    bounceoff(movingSprite,fixSprite2)
    movingSprite.velocityX=0;
    movingSprite.velocityY=0;
  }
else if(isTouching(movingSprite,fixSprite1)){
  music.stop()
  movingSprite.shapeColor="red";
  bounceoff(movingSprite,fixSprite1)
}
if(movingSprite.y<0){
  music.stop()
  movingSprite.velocityY=3
}

drawSprite()
}