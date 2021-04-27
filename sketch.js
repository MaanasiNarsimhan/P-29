const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,polygon,ground;
var stand;
var polygon;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  

  stand = new Stand(450, 250, 250,10);
 
  //level one
  box1 = new Block(400,220,50,50)
  box2 = new Block(435,220,50,50)
  box3 = new Block(470,220,50,50)

  //row 2
  box4 = new Block(420,176,50,50)
  box5 = new Block(455,176,50,50)

  //row 3
  box6 = new Block(435,135,50,50)


  //polygon holder with slings
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
  
  slingShot = new Slingshot(this.polygon,{x:100,y:200});

}
function draw() {
  background(56,44,44); 
 
  //Engine.update(engine);
  
  textSize(20);
  fill("lightyellow");
  text("Drag the polygon to destroy the blocks",300,30);
  textSize(10);
  text("Press Space to get a second Chance to Play!!",650 ,350);
  ground.display();
  stand.display();
  strokeWeight(2);
  stroke(15);
  fill("brown")
  ground.display();
  fill("blue")
  
  

  fill("purple")
  box1.display();
  box2.display();
  box3.display();

  fill("pink")
  box4.display();
  box5.display();

  fill("orange")
  box6.display();
  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);

  slingShot.display();
  
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(this.polygon);
  }
}