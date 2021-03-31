const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var sWorld, sEngine;
var ground, ball;
function setup() {
  createCanvas(800,800);
  sEngine = Engine.create();  
  sWorld = sEngine.world;

  grdOptions = {
    isStatic : true
  }

  ground = Bodies.rectangle(400, 700, 800, 20, grdOptions);
  World.add(sWorld, ground);

  console.log(ground.position.x);

  ballOptions = {
    isStatic : false,
    restitution : 0.5
  }

  ball = Bodies.circle(400, 100, 50, ballOptions);
  World.add(sWorld, ball);
  

  //createSprite(400, 200, 50, 50);
  
}

function draw() {
  background("blue"); 

  Engine.update(sEngine);
  rectMode(CENTER) ;
  ellipseMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);

  ellipse(ball.position.x,ball.position.y,100,100);

  //drawSprites();
}