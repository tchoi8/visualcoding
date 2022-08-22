function setup() {
  createCanvas(500, 500);
  
  }

function draw() {
   background(220); 
 
  strokeWeight(10);
  point(250,250);
  
  point(mouseX, mouseY);

  text("(" + mouseX + ", " + mouseY + ")", mouseX + 50, mouseY + 50);


}




