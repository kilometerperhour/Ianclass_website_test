let objects = [];

function setup() {
  createCanvas(400, 400);

  // Create some objects to destroy
  for (let i = 0; i < 5; i++) {
    objects.push(new DestroyableObject(random(width), random(height)));
  }
}

function draw() {
  background(220);

  // Update and draw the objects
  for (let i = 0; i < objects.length; i++) {
    objects[i].update();
    objects[i].draw();
  }
}

function mousePressed() {
  // Check if the mouse is pressing on any of the objects
  for (let i = 0; i < objects.length; i++) {
    if (objects[i].isOver(mouseX, mouseY)) {
      objects[i].destroy();
      break;
    }
  }
}

class DestroyableObject {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 50;
    this.pieces = [];
  }

  update() {
    // Update the pieces if the object has been destroyed
    if (this.pieces.length > 0) {
      for (let i = 0; i < this.pieces.length; i++) {
        this.pieces[i].update();
      }
    }
  }

  draw() {
    // Draw the object or its pieces if it has been destroyed
    if (this.pieces.length > 0) {
      for (let i = 0; i < this.pieces.length; i++) {
        this.pieces[i].draw();
      }
    } else {
      fill(255, 0, 0);
      rect(this.x, this.y, this.size, this.size);
    }
  }

  isOver(px, py) {
    // Check if the given coordinates are inside the object
    return px > this.x && px < this.x + this.size && py > this.y && py < this.y + this.size;
  }

  destroy() {
    // Create pieces to simulate the object being destroyed
    for (let i = 0; i < 10; i++) {
      this.pieces.push(new Piece(this.x, this.y));
    }
  }
}

class Piece {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 5;
    this.vx = random(-5, 5);
    this.vy = random(-5, 5);
  }

  update() {
    // Update the position of the piece based on its velocity
    this.x += this.vx;
    this.y += this.vy;
  }

  draw() {
    // Draw the piece
    fill(0, 0, 255);
    rect(this.x, this.y, this.size, this.size);
  }
}