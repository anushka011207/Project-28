class Mango{
    constructor(x,y,r)   {
        var options={
            isStatic:true,
            restitution:0,
            friction:1
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x,this.y,this.r/2,options);
		this.body = loadImage("sprites/mango.png");
        World.add(world,this.body);
    }
    display()   {
		push()
		rectMode(CENTER)
		ellipse(this.x,this.y,this.r, this.r);
		pop()
    }
}