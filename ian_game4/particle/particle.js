var particles = [];
var particleNum = 10;

function setup(){
    createCanvas(400, 400);
}

function draw(){
    background(100);
    for(var i = 0; i<particles.length; i++){
        particles[i].move();
        particles[i].show();
    }
}

class Particle{
    constructor(){
        this.x = mouseX;
        this.y = mouseY;
        this.w = random(20, 40);
        this.h = random(20, 40);
        this.speed = 2;
        this.speedX = random(-this.speed, this.speed);
        this.speedY = random(-this.speed, this.speed);
    }

    move(){
        this.x += this.speedX;
        this.y += this.speedY;
    }

    show(){
        rect(this.x, this.y, this.w, this.h);
    }
}

function mousePressed(){
    for(var i = 0; i<particleNum; i++){
        var p = new Particle();
        particles.push(p);
    }
}