class stone {
    constructor(x,y){
        var opt = {
            density : 1.2
        }
        this.body = Bodies.circle(x,y,60,opt);
        World.add(world,this.body)
        
    }
    display(){
        
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,60,60);
        
    }
}