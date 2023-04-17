var particles = [];
var particleNum = 10;

function setup() {
  createCanvas(windowWidth-20, windowHeight-150);
}

function draw() {
  background(100);
  for(var i = 0; i<particles.length; i++){
    particles[i].move();
    particles[i].display();
  }
}

class Particle{
  constructor(){
    this.x = mouseX;
    this.y = mouseY;
    this.diameter = random(50);
    this.speed = 2;
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.moveX = random(-this.speed, this.speed);
    this.moveY = random(-this.speed, this.speed);
  }
  
   changeColor(r, g, b){
     this.r = r;
     this.g = g;
     this.b = b;
   }
  
  move(){
  this.x += this.moveX;
  this.y += this.moveY;
  }
  
  display(){
    fill(this.r, this.g, this.b);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }  
}

function mousePressed(){
  for(var i = 0; i < this.particleNum; i++){
  var p = new Particle();
  particles.push(p);
  }
  
  if(particles.length>100){
    particles.splice(0, 100);
  }
  print(particles.length);
}


