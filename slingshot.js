class Slingshot{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            length:10,
            stifness:0.3
        }
        this.pointB=pointB
        this.chain=Constraint.create(options);
        World.add(world,this.chain);
        
        
    }
    display(){
        if (this.chain.bodyA){
            var pointA = this.chain.bodyA.position;
            var pointB = this.pointB;
            line(pointA.x, pointA.y,pointB.x, pointB.y);
        }
        
    }
    fly(){
        this.chain.bodyA=null;
    }
}