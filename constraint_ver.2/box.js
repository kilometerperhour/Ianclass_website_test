class Box{
  constructor(x, y, w, h){
    const options = {
      collisionFilter: {
        category: defaultCategory | boxCategory,
        mask: ballCategory | boxCategory
    },
      restitution: 0.5
    };

    this.body = Bodies.rectangle(x, y, w, h, options);
  Composite.add(world, this.body);
  
  this.w = w;
  this.h = h;

  this.body.r = random(100, 255);
  this.body.g = random(100);
  this.body.b = random(100, 255);

  }

  show(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    noStroke();
    fill(this.body.r, this.body.g, this.body.b);
    translate(pos.x, pos.y);
    rotate(angle);
    rect(0, 0, this.w, this.h);
    pop();
  }
}
