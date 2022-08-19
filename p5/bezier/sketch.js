function setup() {
  createCanvas(500, 500);
 
 
 }

function draw() {
 background(220); 
 beginShape();
 strokeWeight(1);
 vertex(0,250);
 noFill();
 bezierVertex(mouseX, mouseY, mouseX, mouseY, 500, 250);
// bezierVertex(300, 250, 200, 550, 400, 250);

 fill(100);
 text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);

line(0,250,mouseX,mouseY);
line(500,250,mouseX,mouseY);

endShape(CLOSE);
 
  }
  