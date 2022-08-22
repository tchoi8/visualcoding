function setup() {
  createCanvas(500, 500);
  background(220);  
}

function draw() {
  
  rectMode(CENTER);
  rect(250,250,100,100);
  triangle(200,300,300,300,250,200)
  ellipse(250,250,100,100);
  quad(200, 250, 300, 250, 270, 205, 230, 205);
  triangle(220,220,280,220,250,250);
  rectMode(CORNER);
  rect(210,250,80,30) 
  bezier(210,280, 220, 250, 280, 280, 290, 250);

}




