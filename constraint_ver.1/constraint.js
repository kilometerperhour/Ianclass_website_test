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
var LWall, RWall, roof;
var ball;

var world;
var mConstraint;

var defaultCategory = 0x0001,
  ballCategory = 0x0002,
  boxCategory = 0x0004;

var pBallPositionX, pBallPositionY;

function setup() {
  createCanvas(400, 400);
  
  
  var engine = Engine.create({
    positionIterations: 10,
    velocityIterations: 10
  });

  world = engine.world;

  Runner.start(engine);

  engine.timing.delta = 1/60;

  rectMode(CENTER);

  var canvasmouse = Mouse.create(document.body);
  var options = {
    mouse: canvasmouse
  };
  mConstraint = MouseConstraint.create(engine, options);
  Composite.add(world, mConstraint);

  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
      boxes[i*10+j] = new Box(350 - j * 20, 300 - i * 20, 20, 20);
    }
  }

  ball = new Ball(100, 300, 20);

  ground = new Ground(width / 2, height, width, 50);
  LWall = new Ground(0, height / 2, 50, height);
  RWall = new Ground(width, height / 2, 50, height);
  roof = new Ground(width / 2, 0, width, 50);
}

function keyPressed() {
  if (key == ' ') {
    Composite.remove(world, ball.body);
    ball = new Ball(100, 300, 20);
  }
}


function draw() {
  //console.log(boxes[0].body.velocity);

  background(200);

  ball.show();
  ground.show();
  LWall.show();
  RWall.show();
  roof.show();

  for (var box of boxes) {
    box.show();
  }
}