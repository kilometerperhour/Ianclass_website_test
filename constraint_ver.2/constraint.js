var Engine = Matter.Engine,
  Runner = Matter.Runner,
  Bodies = Matter.Bodies,
  Composite = Matter.Composite,
  Mouse = Matter.Mouse,
  MouseConstraint = Matter.MouseConstraint,
  Constraint = Matter.Constraint;

var engine;
var boxes = [];
var ground;
var ball;
var shot;

var world;
var mConstraint;

var defaultCategory = 0x0001,
  ballCategory = 0x0002,
  boxCategory = 0x0004;

var pBallPositionX, pBallPositionY;

function setup() {
  createCanvas(400, 400);
  engine = Engine.create();
  world = engine.world;
  Runner.start(engine);

  ground = Bodies.rectangle(width / 2, height, width, height / 4,
    {
      isStatic: true,
      collisionFilter: {
        category: defaultCategory | ballCategory
      }
    });

  Composite.add(world, ground);

  rectMode(CENTER);

  var canvasmouse = Mouse.create(document.body);
  var options = {
    mouse: canvasmouse
  };
  mConstraint = MouseConstraint.create(engine, options);
  Composite.add(world, mConstraint);

  for (var i = 0; i < 5; i++) {
    boxes[i] = new Box(350, 300 - i * 20, 20, 20);
  }

  ball = new Ball(100, 300, 25);
  shot = new Shot(100, 250, ball.body);
}

function keyPressed() {
  if (key == ' ') {
    Composite.remove(world, ball.body);
    ball = new Ball(100, 300, 25);
    shot.attach(ball.body);
  }
  console.log(ball); 
  console.log(boxes[0]); 
}


function mouseReleased() {
    setTimeout(() => {
      if (ball.body.speed>1) {
      shot.fly();
      }
    }, 100);
  }


function draw() {
  //console.log(boxes[0].body.velocity); 
  background(200);
  noStroke();
  fill(100);
  rect(ground.position.x, ground.position.y, width, height / 4);

  ball.show();
  shot.show();

  for (var box of boxes) {
    box.show();
  }
}