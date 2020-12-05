class Tree{
    constructor(x,y)   {
        var options={
            isStatic:true
        }
        this.x=x;
        this.y=y;
        this.width=400;
        this.height=800;
        this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        this.treeImg=loadImage("sprites/tree.png");
        World.add(world,this.body);
    }
    display()   {
        //load position of body
        var pos=this.body.position;
        push()
        rectMode(center);
        //image
        tree=image(treeImg);
        pop()
    }
}