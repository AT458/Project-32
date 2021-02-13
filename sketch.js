const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var basketImg, basket;
var ground;
var fruitImg, fruit, fruitX;


function preload() {
  basketImg = loadImage("Images/Basket.png");
  fruitImg = loadImage("Images/Apple.png");
}


function setup() {
  createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  basket = createSprite(windowWidth/2, windowHeight/2 + 975, 1, 1);
  basket.addImage(basketImg);
  basket.scale = 0.5;

  ground = new Ground(windowWidth/2, windowHeight/2 + 1120, windowWidth, 50);
}


function draw() {
  background(0);

  Engine.update(engine);

  if (keyDown("left")) {
    basket.x = basket.x - 20;
  }

  if (keyDown("right")) {
    basket.x = basket.x + 20;
  }

  ground.display();

  spawnFruit();

  drawSprites();
}

function spawnFruit() {
  if (frameCount === 60) {
    fruitX = random(100, 5000);

    fruit = createSprite(fruitX, windowHeight/2, 1, 1);
    fruit.addImage(fruitImg);
    fruit.scale = 0.09;
    fruit.velocityY = 10
    fruit.lifeTime = 180;
  }
}