function setup() {
  createCanvas(500, 500);
 
}

function draw() {
 background(220);  
 line(100,250,400,250);
 line(mouseX,mouseY,400,250);
 line(100,250, mouseX,mouseY);
}




