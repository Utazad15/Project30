const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,polygon,ground;
var stand1,stand2;
var polygon;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(1000,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(550,330,250,10);
  stand2 = new Stand(850,200,200,10);

  //level one
  block1 = new Block(460,320,30,40);
  block2 = new Block(490,320,30,40);
  block3 = new Block(520,320,30,40);
  block4 = new Block(550,320,30,40);
  block5 = new Block(580,320,30,40);
  block6 = new Block(610,320,30,40);
  block7 = new Block(640,320,30,40);
  //level two
  block8 = new Block(490,290,30,40);
  block9 = new Block(520,290,30,40);
  block10 = new Block(550,290,30,40);
  block11 = new Block(580,290,30,40);
  block12 = new Block(610,290,30,40);
  //level three
  block13 = new Block(520,260,30,40);
  block14 = new Block(550,260,30,40);
  block15 = new Block(580,260,30,40);
  //top
  block16 = new Block(550,230,30,40);

  //set 2 for second stand
  //level one
  blocks1 = new Block(800,175,30,40);
  blocks2 = new Block(830,175,30,40);
  blocks3 = new Block(850,175,30,40);
  blocks4 = new Block(880,175,30,40);
  blocks5 = new Block(910,175,30,40);
  //level two
  blocks6 = new Block(880,135,30,40);
  blocks7 = new Block(850,135,30,40);
  blocks8 = new Block(830,135,30,40);
  //top
  blocks9 = new Block(850,95,30,40);

  //polygon holder with slings
  polygon = Bodies.circle(230,200,20);
  World.add(world,polygon);
  
  slingShot = new Slingshot(this.polygon,{x:230,y:200});

}
function draw() {
  background(56,44,44); 
 
  //Engine.update(engine);
  
  textSize(20);
  fill("lightyellow");
  text("Drag the polygon to destroy the blocks",300,30);
  textSize(20);
  text("Press Space to get a second Chance to Play!!",550 ,360);
  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  
  fill("skyblue");
  
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
  fill("skyblue");
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  fill("turquoise");
  blocks6.display();
  blocks7.display();
  blocks8.display();
  fill("pink")
  blocks9.display();
  fill("gold");
  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,60,60);

  slingShot.display();
  
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
//write code for extra chance of the player
if(keyCode === 32){
  Matter.Body.setPosition(this.polygon,{x:230,y:200});
  slingShot.attach(this.polygon);
 }
}
