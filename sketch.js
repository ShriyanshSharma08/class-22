//they are the objects of library file
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

//own engine and world
var myEngine, myWorld;
//own bodies
var ground;
var ball;

function setup() 
{
  createCanvas(400,400);
  
  //to declare my engine in the reference of original engine 
  myEngine = Engine.create();
  //to own world and that world should be in reference to my engine
  myWorld = myEngine.world;
  
  //static means to be at one place by giving true
  var obj = 
  {
    isStatic:true
  }
  
  //ground sprite in the reference of original (bodies)
  ground = Bodies.rectangle(200,390,400,20,obj);
  //add it to my world
  World.add(myWorld,ground);
  console.log(ground);
  
  //to make the ball bounce by giving the restitution value
  var bl = 
  {
    restitution:1.0
  }
  
  //sprite of ball in the reference of Bodies (original)
  ball = Bodies.circle(200,100,20,bl);
  //add it to my world
  World.add(myWorld,ball);
}

function draw() 
{
  background(0); 
  
  //always update the engine when we do any change
  Engine.update(myEngine);
  
  //to make the rectangle align in the center
  rectMode(CENTER); 
  //we have to use the p5 library functions to display it on the screen
  rect(ground.position.x,ground.position.y,400,20);
  
  //to make the ellipse in the centre
  ellipseMode(RADIUS);
  //to create the ellipse or circle
  //to display it on the screen we use ball.position.x and y 
  ellipse(ball.position.x,ball.position.y,20,20);
}