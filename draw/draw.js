var ian = [];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(230);
 for(var i = 0; i < ian.length; i++){
   ian[i].move();
   ian[i].display();
 }
}

function mousePressed(){
  var i = new JitterBug();
  ian.push(i);
  print(ian.length);
}

class JitterBug{
  
constructor(){
  this.x = mouseX;
  this.y = mouseY;
  this.diameter = random(30, 100);
  this.speed = 1;
  }

 move(){
   
  this.x += random(-this.speed, this.speed);
  this.y += random(-this.speed, this.speed);
  fill(random(255));
 }
 display(){
  ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}



