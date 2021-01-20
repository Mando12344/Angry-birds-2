class Chain{
    constructor(bodyA,bodyB){
        var options= {
            bodyA: bodyA,
            bodyB:bodyB,
             length: 1.0,
             stiffness: 0.03
        }
        this.bodyA=bodyA;
        this.bodyB=bodyB;
        var chain=Cons.create(options);
        World.add(world,chain);
    }
    display(){
var posA=this.bodyA.position;
var posB=this.bodyB.position;
strokeWeight(3);
line (posA.x,posA.y,posB.x,posB.y);
    }
    }