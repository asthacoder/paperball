class paper 
{
  constructor(x,y,r)
{
      var options = {
          isStatic:false,
          restitution:0.2,
          friction:0.5,
          density:1.2
      }

      this.x=x;
      this.y=y;
      this.r=r
      this.body=Bodies.circle(x,y,r,options)
      World.add(world,this.body);

}

display(){
    var paperpos=this.body.position;
    push()
 ellipseMode(RADIUS);
 
    fill("green")
    ellipse(paperpos.x,paperpos.y,this.r,this.r);
    pop()

}
}