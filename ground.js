class Ground{
    constructor(x,y,width,height){
        var ground_options ={
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,ground_options);
        this.width = width
        this.height = height
    World.add(world,this.body);
    }
    display(){
        //stores the this.body.position in variable b
        var b=this.body.position
        //push means start
        push()
        //translate means from point a to point b. moving a thing
        translate(b.x,b.y)
        //rotate means to rotate it
        //rotate(body.angle)
        //whenever you are going to translate a thing the first translate will be from 0 to the body y or x position
        rotate(this.body.angle)
        fill("brown")
        rectMode(CENTER)
        //var b=this.body.position
        rect(0,0,this.width,this.height);
        pop()
    }
}