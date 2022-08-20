function setup() {
  createCanvas(500, 500);
  noStroke();
 
}

function draw() {
 
  fill("red");
  ellipse(300,300,300);
  fill("blue");
  arc(300+75,300,150,150,PI,TWO_PI);
  arc(300,300,300,300, TWO_PI, PI);
  fill("red");
  arc(300-75,300,150,150,TWO_PI,PI);
  
 }





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
 