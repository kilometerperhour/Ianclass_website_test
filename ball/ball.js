var sketch_1 = function(tril){
     var xspeed = 3;
    var yspeed = 5;
    var d = 25;
    var x = d;
    var y = d;

    tril.setup = function() {
        var can = tril.createCanvas(500, 500);
        can.position(0, 100);
    }
    
    tril.draw = function() {
        tril.background(220);
      
        tril.ellipse(x,y,d,d);
      
        x = x + xspeed;
        y = y + yspeed;
      
        if(x > tril.width-d/2 || x < d/2){
            xspeed = xspeed *-1;
      }
      if(y > tril.height-d/2 || y < d/2){
        yspeed = yspeed *-1;
      }
      
    }
}
var sketch_2 = function(tril){
    var xspeed = 3;
   var yspeed = 5;
   var d = 25;
   var x = d;
   var y = d;

   tril.setup = function() {
       var can = tril.createCanvas(500, 250);
       can.position(500, 100);
   }
   
   tril.draw = function() {
       tril.background(0);
     
       tril.ellipse(x,y,d,d);
     
       x = x + xspeed;
       y = y + yspeed;
     
       if(x > tril.width-d/2 || x < d/2){
           xspeed = xspeed *-1;
     }
     if(y > tril.height-d/2 || y < d/2){
      yspeed = yspeed *-1;
     }
     
   }
}

var trilp5_1 = new p5(sketch_1);
var trilp5_2 = new p5(sketch_2);