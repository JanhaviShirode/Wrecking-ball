class Block {
    constructor(x,y){
        var opt = {
            isStatic : false,
            friction : 1,
            restitution : 0
        }
        this.body = Bodies.rectangle(x,y,50,50,opt);
        this.width=50;
        this.height=50;
    
        World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect( 0, 0, this.width, this.height);
        pop();
    }
}