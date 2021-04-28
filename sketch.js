const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var chain1;

var dustbinObj, paperObject,groundObject;	

var BaseClass;

var world;

var bin, binImage, dustbingreen;

var paperobj, paperImage, crumbledpaper;

function preload(){

	binImage = loadImage("dustbingreen.png");

}

function setup() {
	createCanvas(1600, 400);

	engine = Engine.create();
	world = engine.world;

	dustbinObj = new dustbin(1220,350);

    bin = createSprite(1220,290,20,20);
	bin.addImage(binImage);
	bin.scale = 0.5

	paperObject=new paper(100,368,70,70);

	groundObject=new ground(width/2,370,width,20);	

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("grey");

  paperObject.display();
  groundObject.display();

  

  dustbinObj.display();
  bin.display();

}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
    
  	}
}


