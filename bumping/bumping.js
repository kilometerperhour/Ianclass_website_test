var ians = [];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);
  for(var i = 0; i<ians.length; i++){
    ians[i].move();
    ians[i].display();
    var overlapping = false;
    for(var j = 0; j<ians.length; j++){
      if(ians[i].intersect(ians[j]) && ians[i] !== ians[j]){
        overlapping = true;
      }
    }
    if(overlapping){
      ians[i].changeColor(255);
    } else {
      ians[i].changeColor(0);
    }
  }
}

class JitterBug{
  constructor(){
    this.x = mouseX;
    this.y = mouseY;
    this.diameter = random(50);
    this.speed = 1;
    this.c = 0;
  }
   changeColor(c){
     this.c = c;
   }
  move(){
  this.x += random(-this.speed, this.speed);
  this.y += random(-this.speed, this.speed);
  
 }
  display(){
    fill(this.c);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
  
  intersect(other){
    var d = dist(this.x, this.y, other.x, other.y);
    if(d < this.diameter/2 + other.diameter/2){
      return true;
    } else {
        return false;
      }
  }
  
}

function mousePressed(){
  var i = new JitterBug();
  ians.push(i);
  if(ians.length>100){
    ians.splice(0, 1);
  }
  print(ians.length);
}


