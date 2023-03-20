var Engine = Matter.Engine,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite,
    Mouse = Matter.Mouse,
    MouseConstraint = Matter.MouseConstraint;

var engine;
var boxA, boxB, boxC, boxD;
var ground;
var ball;

var world;
var mConstraint;

var defaultCategory = 0x0001,
    ballCategory = 0x0002,
    boxCategory = 0x0004;

function setup() {
    createCanvas(400, 400);
    engine = Engine.create();
    world = engine.world;
    Runner.start(engine);

    ground = Bodies.rectangle(width / 2, height, width, height / 4,
        {
            isStatic: true,
            collisionFilter: {
                category: defaultCategory
            }
        });

    Composite.add(world, ground);

    ball = Bodies.circle(200, 300, 25,
        {
            collisionFilter: {
                category: ballCategory
            }
        });

    Composite.add(world, ball);



    rectMode(CENTER);

    var canvasmouse = Mouse.create(document.body);
    var options = {
        mouse: canvasmouse
    };
    mConstraint = MouseConstraint.create(engine, options);
    Composite.add(world, mConstraint);
    var boxOp = {
        category: boxCategory
    };

    boxA = new Box(50, 100, 50, 50, boxOp);
    boxB = new Box(50, 200, 50, 50, boxOp);
}

function draw() {
    background(200);

    rect(ground.position.x, ground.position.y, width, height / 4);
    
    circle(ball.position.x, ball.position.y, 50);

    //circle(mouseX, mouseY, 25, 25);
    boxA.show();
    boxB.show();
}