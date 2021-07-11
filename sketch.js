var background_img;
var chappy;
var chappy_img;
var coin_img;
var coin;
var stone_img;

function preload(){
  background_img = loadImage("backgroundImg.jpg");
  chappy_img = loadAnimation("robotImg1.png","robotImg2.png","robotImg3.png","robotImg4.png","robotImg5.png","robotImg6.png");
  coin_img = loadImage("coinImg.png");
  stone_img = loadImage("stoneImg.png");
}

function setup() {
  createCanvas(800,400);
  chappy = createSprite(65, 192, 50, 50);
  chappy.addAnimation("run",chappy_img);
  chappy.scale = 1.5;
}

function draw() {
  background(background_img);  
  spawnCoins();
  drawSprites();
}

function spawnCoins(){
  if(frameCount % 160 === 0){
    coin = createSprite(800, 230, 50, 50); 
    coin.addImage(coin_img);  
    coin.velocityX = -3;
    coin.scale = 0.1;
  }
}