class Monster {
    constructor(x,y,r)
      {
        var options = { 
            density: 5, 
            frictionAir: 0
        };
        
        this.r=r;
        this.body=Bodies.circle(x, y, (this.r)/2, options)
        this.image=loadImage("images/Monster-01.png");
        World.add(world, this.body);
  
      }
      display()
      {
        var monsterPos=this.body.position;		
        push();
        translate(monsterPos.x, monsterPos.y-100);
        rectMode(CENTER);
        fill(255,0,255);
        imageMode(CENTER);
        image(this.image, 0,0,this.r, this.r)
        pop()
              
      }
  }
  