class Box{
  constructor(x, y, w, h){
    const options = {
      category: boxCategory,
      restitution: 0.5
    };
    this.body = Bodies.rectangle(x, y, w, h, options);
    Composite.add(world, this.body);
    this.w = w;
    this.h = h;
  }

  show(){
    const pos = this.body.position;
    const angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rect(0, 0, this.w, this.h);
    pop();
  }
}

/*
function Box(x, y, w, h, options) {
    this.body = Bodies.rectangle(x, y, w, h, options);
    Composite.add(world, this.body);
    
    this.w = w;
    this.h = h;
    
    this.show = function(){
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rect(0, 0, this.w, this.h);
      pop();
    }
  }
  */
