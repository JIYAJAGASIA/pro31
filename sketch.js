const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var Ground;

function setup(){
    var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;
    Ground = new ground(600,height,1200,20);
}
var particle=[];
var plinko=[];
var division=[];
var divisionHeight=300;
function draw(){
 
        background(0);
    
        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
    
    Engine.update(engine);
    ground.display();
}
if(frameCount%60===0){
  particle.push(new Particle(random(width/2-10, width/2+10),10,10));
}
for (var k=0;k<=width; k=k+80)
{
 division.push(new Division(k,height- divisionHeight/2, 10, divisionHeight)) ;
}
