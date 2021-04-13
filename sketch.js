const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine, world;
var backgroundImage;

function preload(){
  backgroundImage = loadImage("p5.play-boilerplate-master/gamingbackground1.jpg")
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = Engine.world

  backgroundImage = createSprite(400, 200, 400, 100);


}

function draw() {
  background("Black");
  Engine.update(engine);
  drawSprites();
}
