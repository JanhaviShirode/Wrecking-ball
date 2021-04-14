
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boy,ground,rock,tree,m1,m2,m3,m4,m5,m6,m7,chain;



function setup() {
	createCanvas(1280, 620);


	engine = Engine.create();
	world = engine.world;

	
	ground = Bodies.rectangle(640,600,1290,20,{isStatic:true});
	World.add(world,ground);
	b1=new Block(600,100);
	b2=new Block(600,150);
		b3=new Block(600,200);
	b4=new Block(600,250);
	b5=new Block(600,300);
		b6=new Block(600,350);
		b7=new Block(600,400);	
		b8=new Block(600,450);
		rock= new stone(400,500);
		chain=new SlingShot(rock.body,{x:400,y:10});




	Engine.run(engine);
	  
}	
function mouseDragged(){
    Matter.Body.setPosition(rock.body,{x:mouseX,y:mouseY});
}



function draw() {
	background("white");
	
	rectMode(CENTER);
	rect(640,600,1290,20);
	b1.display();
	b2.display();
	b3.display();
	b4.display();
	b5.display();
	b6.display();
	b7.display();
	b8.display();
	rock.display();
	chain.display();




}
