class SlingShot{
    constructor(bodyA,pointB){
        var options= {
            bodyA: bodyA,
            pointB:pointB,
             length: 1.0,
             stiffness: 0.03
        }
        this.bodyA=bodyA;
        this.pointB=pointB;
        this.sling=Cons.create(options);
        World.add(world,this.sling);
    }
    fly(){
        this.sling.bodyA=null;

    }
    display(){
        if(this.sling.bodyA){
            var posA=this.sling.bodyA.position;
            var posB=this.pointB;
            strokeWeight(3);
            line (posA.x,posA.y,posB.x,posB.y);
        }
    }
}