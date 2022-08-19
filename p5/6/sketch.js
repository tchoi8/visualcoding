function setup() {
  createCanvas(500, 500);
 
 
 }

function draw() {
       background(220);
  text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);
 
 beginShape();
  strokeWeight(2);
 vertex(100,250);
 bezierVertex(mouseX, mouseY, mouseX, mouseY, 400, 250);
 //bezierVertex(mouseY, mouseX, mouseX, mouseY, 200, 250);
 endShape(CLOSE);
 
  }
 /*
strokeWeight(10);
strokeCap(SQUARE);
line(0,10,200,10)
line(0,30,200,30)
line(0,50,200,50)

translate(100,400);
rotate(QUARTER_PI);
line(0,10,200,10)
line(0,30,200,30)
line(0,50,200,50)
 
translate(400,-200);
rotate(PI+HALF_PI);
line(0,10,200,10)
line(0,30,200,30)
line(0,50,200,50)

translate(350,100);
rotate(HALF_PI);
line(0,10,200,10)
line(0,30,200,30)
line(0,50,200,50)

*/
///rotate(PI/12);
/*

 noStroke();
   fill("red");
  ellipse(300,300,300);
  fill("blue");
  arc(300+75,300,150,150,PI,TWO_PI);
  arc(300,300,300,300, TWO_PI, PI);
  fill("red")
  arc(300-75,300,150,150,TWO_PI,PI);
 fill("green") 
*/
 





/*
  noFill();
  strokeWeight(5);
  ellipse(300,300,300);
  arc(300+75,300,150,150,PI,TWO_PI);
  arc(300,300,300,300, TWO_PI, PI);
  arc(300-75,300,150,150,TWO_PI,PI);
*/
/*
  noFill();
  strokeWeight(1);
  ellipse(300,300,300);
  strokeWeight(2);
  fill(100,0,200);
  arc(300,300,300,300,TWO_PI, QUARTER_PI-0.1);
  fill(100,100,200); 
  arc(300,300,300,300,QUARTER_PI,HALF_PI-0.1);
  fill(100,200,200); 
  arc(300,300,300,300,HALF_PI,HALF_PI+QUARTER_PI);


  arc(300,300,300,300,HALF_PI,HALF_PI+QUARTER_PI);
*/
  

   // arc(300,300,300,300,PI+HALF_PI,HALF_PI);
 // fill("red")
 // arc(300,300+75,150,150,HALF_PI,PI+HALF_PI);
 