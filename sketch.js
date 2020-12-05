
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var tree, treeImage;
var boy, boyImage;
var stone, stoneImage;
var mango1, mango2, mango3, mango4, mango5;

function preload()
{
	boyImage = loadImage("sprites/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	var options={
		isStatic:true
	}

	ground = new Ground(400,680,800,40);

	tree = new Tree(450,500);

	stone = new Stone(140,360,20);

	mango1 = new Mango(300,300,30);
	mango2 = new Mango(650,350,30);
	mango3 = new Mango(650,400,30);
	mango4 = new Mango(680,320,30);
	mango5 = new Mango(550,370,30);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");
  image(boyImage,100,600,60,100);


  ground.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  
  drawSprites();
 
}

function mouseDragged() {
    Matter.Body.setPosition(stone.Body,{x:mouseX, y:mouseY});
}

function mouseReleased()  {
    stone.fly();
}

function detectCollision(lstone,lmango)	{
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if(distance<=lmango.r+lstone.r)	{
		Matter.Body.setStatic(lmango.body,false);
	}
}

function keyPressed()	{
	if(keyCode === 32)	{
		Matter.body.setPosition(stone.body,{x:235,y:420});
		launcherObject.attach(stone.body);
	}
}
