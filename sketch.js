const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(1100,600);

	engine = Engine.create();
	world = engine.world; 

	roof1 = new Roof(600,50,2000,10);

	ground = new Ground(600,height,2000,20);

	bob1 = new Bob( 970,90,180);
	bob2 = new Bob( 990,90,180,);
	bob3 = new Bob(1010,90,180);
	bob4 = new Bob(1030,90,180);
	bob5 = new Bob(1050,90,180);

	rope1 = new Rope(bob1.body, roof1.body, -35*2.5, 0);
	rope2 = new Rope(bob2.body, roof1.body, -35*2, 0);
	rope3 = new Rope(bob3.body, roof1.body, -35*1.5, 0);
	rope4 = new Rope(bob4.body, roof1.body, -35*1, 0);
	rope5 = new Rope(bob5.body, roof1.body, -35*0.5, 0);


	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("white");

  Engine.update(engine);

 
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display(); 

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();


  ground.display();
  
  roof1.display();

}

function keyPressed(){
	if(keyCode === RIGHT_ARROW){
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x:60,y:-60});
	}
	else if (keyCode === LEFT_ARROW){
		Matter.Body.applyForce(bob5.body, bob5.body.position, {x:-60,y:-60});
	}
}