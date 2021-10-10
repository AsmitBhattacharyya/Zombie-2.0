
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var zombie;
var stone;
var wood;
var axe;
var bg;


function preload() {
  zombie = loadImage("zombie.png");
  wood = loadImage("wood.png");
  stone = loadImage("stone.png");
  axe = loadImage("axe.png");
  bg = loadImage("backgorung.png")
}




function setup() {
  createCanvas(400,400);

  zombie = createSprite(width/2, height - 110);
  zombie.addAnimation("leftoright", zombie1)
  zombie.scale = 0,1;
  zombie.velocityX = 10;

  breakButton = createButton("");
  breakButton.position(width - 200, height / 2 - 50);
  breakButton.class("brakbutton");
  breakButton.mousePressed(handleButtonPress);

  engine = Engine.create();
  world = engine.world;
  
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
}

function handleButtonPress() {
  jointLink.detach();
  setTimeout(() => {
    bridge.braek();
  }, 1500); 
}

