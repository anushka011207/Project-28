class Stone{
    constructor(x,y,r)   {
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x,this.y,this.r/2,options);
        World.add(world,this.body);
    }
    display()   {	
		push()
		rectMode(CENTER)
		this.body = loadImage("sprites/stone.png");
		ellipse(this.x,this.y,this.r, this.r);
		pop()
    }
    fly()   {
       this.sling.bodyA = null;
    }
}