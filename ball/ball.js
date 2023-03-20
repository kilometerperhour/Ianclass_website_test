    
  var sketch1 = function(p) {
    var xspeed = p.random(1, 10);
    var yspeed = p.random(1, 10);
    var d = p.random((p.windowWidth+p.windowHeight)/48, (p.windowWidth+p.windowHeight)/32);
    var x = d;
    var y = d;
    var c = p.random(255);
    var w = p.random(p.windowWidth/8, p.windowWidth/4);
    var h = p.random(p.windowHeight/8, p.windowHeight/3);

    p.setup = function(){
      var cvs1 = p.createCanvas(w, h);
      cvs1.position(p.windowWidth/10,p.windowHeight/8);
    }
    
    p.draw = function(){
      p.background(c);
      p.fill(255-c);
      p.noStroke();
      p.ellipse(x,y,d,d);
      
      x = x + xspeed;
      y = y + yspeed;
      
      if(x > p.width-d/2 || x < d/2){
        xspeed = xspeed *-1;
        c=p.random(255);
      }
      if(y > p.height-d/2 || y < d/2){
        yspeed = yspeed *-1;
        c=p.random(255);
      }
    }
  }
    
  var sketch2 = function(p) {
    var xspeed = p.random(1, 10);
    var yspeed = p.random(1, 10);
    var d = p.random(50, 100);
    var x = d;
    var y = d;
    var c = p.random(255);
    var w = p.random(200, 500);
    var h = p.random(150, 300);

    p.setup = function(){
      var cvs2 = p.createCanvas(w, h);
      cvs2.position(500,200);
    }
    
    p.draw = function(){
      p.background(c);
      p.fill(255-c);
      p.noStroke();
      p.ellipse(x,y,d,d);
      
      x = x + xspeed;
      y = y + yspeed;
      
      if(x > p.width-d/2 || x < d/2){
        xspeed = xspeed *-1;
        c=p.random(255);
      }
      if(y > p.height-d/2 || y < d/2){
        yspeed = yspeed *-1;
        c=p.random(255);
      }
    }
  }

  var sketch3 = function(p) {
    var xspeed = p.random(1, 10);
    var yspeed = p.random(1, 10);
    var d = p.random(50, 100);
    var x = d;
    var y = d;
    var c = p.random(255);

    p.setup = function(){
      var cvs3 = p.createCanvas(500, 200);
      cvs3.position(500,400);
    }
    
    p.draw = function(){
      p.background(c);
      p.fill(255-c);
      p.noStroke();
      p.ellipse(x,y,d,d);
      
      x = x + xspeed;
      y = y + yspeed;
      
      if(x > p.width-d/2 || x < d/2){
        xspeed = xspeed *-1;
        c=p.random(255);
      }
      if(y > p.height-d/2 || y < d/2){
        yspeed = yspeed *-1;
        c=p.random(255);
      }
    }
  }

  var sketch4 = function(p) {
    var xspeed = p.random(1, 10);
    var yspeed = p.random(1, 10);
    var d = p.random(50, 100);
    var x = d;
    var y = d;
    var c = p.random(255);

    p.setup = function(){
      var cvs4 = p.createCanvas(1000, 400);
      cvs4.position(0,600);
    }
    
    p.draw = function(){
      p.background(c);
      p.fill(255-c);
      p.noStroke();
      p.ellipse(x,y,d,d);
      
      x = x + xspeed;
      y = y + yspeed;
      
      if(x > p.width-d/2 || x < d/2){
        xspeed = xspeed *-1;
        c=p.random(255);
      }
      if(y > p.height-d/2 || y < d/2){
        yspeed = yspeed *-1;
        c=p.random(255);
      }
    }
  }

  var myp5_1 = new p5(sketch1);
  var myp5_2 = new p5(sketch2);
var myp5_3 = new p5(sketch3);
  var myp5_4 = new p5(sketch4);