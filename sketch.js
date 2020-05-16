const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(900,400,1600,100);
  box1 = new Box(650,315,80,300);
  box2 = new Box(720,315,75,300);
  box3 = new Box(800,315,80,300);
  box4 = new Box(615,315,20,600);
  box5 = new Box(850,315,20,600);
 
 
}

function draw() {
  background(255,255,255);
  Engine.update(engine);
  box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display(); 
    triangle(630,165,730,25,830,165)

  drawSprites();
}