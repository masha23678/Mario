var bg, bgImg
var mario, marioImg
var ground, groundImg
function preload(){
  bgImg = loadImage("bg.png")
  marioImg = loadImage("mario.png")
}

function setup() {
  createCanvas(1500,800);
  ground = createSprite(600,700,1500, 20);
  bg = createSprite(1000,300);
  bg.addImage(bgImg);
  bg.x = bg.width/2
  bg.scale = 1.4
  mario = createSprite(200,600,10,10);
  mario.addImage(marioImg)
  mario.scale = 0.1
  


}

function draw() {
  background(255,255,255);  
  bg.velocityX = -3
  if(bg.x < 100){
    bg.x = bg.width/2
  }
  drawSprites();
}