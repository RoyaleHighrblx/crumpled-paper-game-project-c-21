const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var groundObj;
var ball;

function setup() {
  createCanvas(800,700);
  engine = Engine.create();
  world = engine.world;
  
  groundObj= new ground(width/2,670,width,20);
  leftSide = new ground(1100,600,20,120);
  rightSide = new ground(10, 600, 20, 120);

  var ball_options = {
    isStatic: true,
	restitution:0.3,
	friction:0,
	density:1.2
  }

  ball = Bodies.circle(200, 100, 20, ball_options);
  World.add(world, ball);

  Engine.run(engine);

}

function draw() 
{
  background(51);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20);
  groundObj.display();
  Engine.update(engine);
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball, {x:0, y:0}, {x:0.05, y:0});
		
	}
}
