
class Shot {
    constructor(x, y, body) {
      const options = {
        pointA: {
          x: x,
          y: y
        },
        bodyB: body,
        stiffness: 0.02,
        length: 40
      };
      this.launch = Constraint.create(options);
      Composite.add(world, this.launch);
    }
  
    fly() {
      this.launch.bodyB = null;
    }
  
    show() {
      if (this.launch.bodyB) {
        stroke(0);
        strokeWeight(4);
        const posA = this.launch.pointA;
        const posB = this.launch.bodyB.position;
        line(posA.x, posA.y, posB.x, posB.y);
      }
    }
  
    attach(body) {
      this.launch.bodyB = body;
    }
  }