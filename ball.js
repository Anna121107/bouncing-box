//class is a blueprint;design of an object
class Ball{
    constructor(x,y){
        var ball_options ={
            restitution: 0.6
        }
        this.body = Bodies.rectangle(x,y,50,50, ball_options);
        //assigns the variable for the width
        this.width=50
        this.height=50
    World.add(world,this.body);
    
    }
    display(){
        fill("red")
   rectMode(CENTER)
   rect(this.body.position.x,this.body.position.y,this.width,this.height)
    }
}