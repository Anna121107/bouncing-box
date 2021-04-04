const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

var b1, b2, b3
var g1

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    

    
//object is desgined using the class and means the character
//object name = new class name()
//class has property and functions
//property is inside constructor and function is what the object is going to do
   b1 = new Ball(200,300)
   b2 = new Ball(240,100)
   b3 = new Ball(180,200)
   g1 = new Ground(200,390,400,20)

    

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
   
b1.display()
b2.display()
b3.display()
g1.display()
}