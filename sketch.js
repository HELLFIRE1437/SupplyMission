//creating sprites as bodies can't takes images..
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;

//creating bodies as sprites won't have that bouncy effect..
var packageBody,ground ;
//creating engine and other formalities..
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//body formalities..
	rectMode(CENTER);

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	 
	Engine.run(engine);

	//sprite formalities..
	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage("package" , packageIMG );
	//packageSprite.visible = false;
	packageSprite.scale=0.2;
	console.log(packageSprite);

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage("helicopter", helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;
  console.log(packageSprite.y);
  fill("red");
  //text("X : " + mouseX + " Y : " + mouseY , mouseX , mouseY );
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Body.setStatic(packageBody,false);
  }
}


