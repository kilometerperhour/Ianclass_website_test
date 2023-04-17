class Box {
  constructor(x, y, w, h) {
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

    this.eraseState = false;
    this.makeValueState = true;

    this.alpha = 255;

    this.particleX;
    this.particleY;
    this.pvX = [];
    this.pvY = [];

    this.pieces = [];

    this.particleNum = 10;
  }

  show() {
    if (this.eraseState == false) {
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
    else if (this.eraseState == true) {
      //nothing
      this.particleX = this.body.position.x;
      this.particleY = this.body.position.y;
      for (var i = 0; i < this.particleNum; i++) {
        push();
        fill(255, 0, 0);
        rect(this.particleX, this.particleY, 5, 5);
        this.particleX += this.pvX[i];
        this.particleY += this.pvY[i];
        pop();
      }

      //this.makeValueState = false;
    }
  }

  erase() {
    if (this.body.velocity.x > 2.5 || this.body.velocity.x < -2.5
      || this.body.velocity.y > 2.5 || this.body.velocity.y < -2.5
    ) {
      Composite.remove(world, this.body);
      this.makeValue();
    }
  }

  makeValue() {
    if (this.makeValueState == true) {
      for (var i = 0; i < this.particleNum; i++) {
        this.pvX[i] = random(-this.body.velocity.x-2, this.body.velocity.x+2);
        this.pvY[i] = random(-this.body.velocity.y-2, this.body.velocity.y+2);
      }
      this.eraseState = true;
      this.makeValueState = false;
    }
  }

}