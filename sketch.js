
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,tree,stone,boyImage,boy;
var mango1,mango2,mango3,mongo4,mango5,mango6;
var rope;

function preload()
{
	boyImage=loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(150, 700, 1500, 50);     
	tree = new Tree(550,390,500,700);
	stone = new Stone(200,200,20,20);
	mango1=new Mango(500,200,60,60);
	mango2=new Mango(600,100,50,50);
	mango3=new Mango(650,200,50,50);
	mango4=new Mango(680,300,50,50);
	mango5=new Mango(400,300,60,70);
	mango6=new Mango(550,300,60,70);
	boy=new Boy(100,540,200,600);
	rope=new Rope(boy,stone);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  drawSprites();
  tree.display();
ground.display();
stone.display();
mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
mango6.display();
boy.display();

}



