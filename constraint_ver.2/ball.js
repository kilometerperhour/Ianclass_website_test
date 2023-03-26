class Ball {
    constructor(x, y, r) {
      const options = {
        restitution: 0.5,
        collisionFilter: {
                category: ballCategory,
            }
        };
      this.body = Bodies.circle(x, y, r, options);
      //Bodies.setMass(this.body, this.body.mass * 2);
      Composite.add(world, this.body);
      this.r = r;
    }
  
    show() {
      const pos = this.body.position;
      const angle = this.body.angle;
      push();
      fill(0);
      translate(pos.x, pos.y);
      rotate(angle);
      circle(0,0,this.r*2);
      pop();
    }
  }