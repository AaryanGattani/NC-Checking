class BOB
{
    constructor(x, y, radius) {
        var options = {
            'isStatic' : false,
            'restitution':0.4,
            'friction':0.8,
            'density':2,
        }
        this.x=x;
        this.y=y;
        this.rdius=radius;
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.body);
        
        
      }
      display()
      {
        push();
        translate(this.body.position.x, this.body.position.y);
      strokeWeight(3);
      ellipseMode(CENTER);
        fill("red");
	    ellipse(this.x,this.y, this.radius, this.radius);
        pop();
      }
}