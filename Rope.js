class Rope{
    constructor(bodyA,body2){
 
        var options={
            bodyA:bodyA,
            bodyB:body2,
            stiffness:0.04,
            length:1
        }
        this.rope=Matter.Constraint.create(options);
        World.add(world,this.rope);
    }
    display(){
        if(this.rope.bodyA){
            var pointA=this.rope.bodyA.position;
            var pointB=this.rope.bodyB.position;
            push();
            stroke(48,22,8);
                strokeWeight(7);
                line(pointA.x,pointA.y,pointB.x,pointB.y);
            pop();
        }
    }
    fly(){
        this.rope.bodyA=null;
        //World.remove(world,this.rope);
    }

}


