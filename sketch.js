const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground1
var division1,division2,division3,division4;
var division5,division6,division7,division8;
var division9,division10,division11,division12;
var division13,plinko1;
var plinkos = [];
var particles = [];
function preload()
{
	
}

function setup() {
	createCanvas(480,800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground1 = new Ground(240,800,480,20);

    division1 = new Division(0,800,5,400);
    division2 = new Division(40,800,5,400);
    division3 = new Division(80,800,5,400);
    division4 = new Division(120,800,5,400);
    division5 = new Division(160,800,5,400);
    division6 = new Division(200,800,5,400);
    division7 = new Division(240,800,5,400);
    division8 = new Division(280,800,5,400);
    division9 = new Division(320,800,5,400);
    division10 = new Division(360,800,5,400);
    division11 = new Division(400,800,5,400);
    division12 = new Division(440,800,5,400);
    division13 = new Division(480,800,5,400);
    
    plinko1 = new Plinko(200,200)

  


    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0,0,0);
 for (var j = 40; j<=width; j=j+50){

   plinkos.push(new Plinko(j,75))
  
   }

  ground1.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();
  division8.display();
  division9.display();
  division10.display();
  division11.display();
  division12.display();
  division13.display();

  plinkos.display();


  drawSprites();
 
}

  
 
  
  
 









