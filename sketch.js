
// CREATE GLOBAL VARIABLES
// For Engine, World, Bodies and any other that you have in mind to make your coding life easier.
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world,bodies;

// remember to create an array of boxes.

 
var boxes = [];
var gSlider;
 
 
function setup() {
    createCanvas(400, 400);
    
    // Create an instance of Engine, World,Bodies
    engine = Engine.create();
    world = engine.world
    // A slider is already created for you here. This slider will dictate the gravity of the world
    gSlider = createSlider(0, 100, 50);
    gSlider.position(40, 365);
    gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);
 
    // Create a ground rectangle that would hold all the boxes and add it to the world.
    ground = new Ground(200,390,400,10);
}
 


 
function draw() {
    // Draw all the elements including the slider that 

    background(51);
    Engine.update(engine);
    // This is the value of your gravity. You can optionally show it to the viewer.
    var fVal = gSlider.value();
    
    // Use a for loop to show all the boxes
    for(var i=0; i< boxes.length; i=i+1) {
         boxes[i].display();
         }

    ground.display();
    
    
}
function mousePressed() {
    if (mouseY < 350) {
        // Every time a mouse press occures create a new box.
        boxes.push(new Box(mouseX,mouseY,random(10,100),random(10,100)));
    }
}

// You can either create a file for the class Box or build a simple function that creates one box at a time.
// I have gone for the second option.
