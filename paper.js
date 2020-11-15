class paperBall{
    constructor() {
        var options={
            restitution: 0.3,
            friction: 1.1,
            density: 1.1
        }

        this.body=Bodies.circle(150,400,60,options);
        this.image=loadImage("paperIMG.jpg");

        World.add(world,this.body);
    }

    display() {
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        //ellipseMode(CENTER);
        //ellipse(this.body.position.x,this.body.position.y,40);
        image(this.image,0,0,50,60);
        pop();
    }
} 
