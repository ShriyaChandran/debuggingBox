class Box {
    constructor (x, y, w, h, options){
    // add options such as friction and restitution. Experiment with the values
        var options = {
            'restitution':0.02,
            'friction': 1,
            'density': 1 
        }
 
    // create your box using the function arguments
    this.body = Bodies.rectangle(x,y,w,h,options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
    
  
    }

    // Create a show method which will draw the box every time it is called inside the draw method.
    // remember to push and pop.
    display () {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate (pos.x,pos.y);;
    rectMode(CENTER);
    rect(0,0,this.w,this.h);
    pop();
    }
} 
