 

function setup() {
  createCanvas(500, 500);
 
  background(100); 
}

function draw() {
 
  fill(200);
  ellipse(250,250,160, 250)
  fill(0);
  triangle(250,125,280,100,220,100) 
  
  var lefteye = map(mouseX, 0, 500,210,230)

  circle(lefteye,200,10,10)
  circle(lefteye+50,200,10,10)
  ellipse(240,300,20,1)
 
}
 