function setup() {
  createCanvas(600, 600);
}

function draw() {
  

background(200);
for (var y = 0; y <= height; y += 100){
for (var x = 50; x <= width; x += 100){
noFill();
 
strokeWeight(3)
arc(y,300,50,50,PI, TWO_PI);
arc(x,300,50,50,TWO_PI,PI);
arc(y+50,400,50,50,PI,TWO_PI);
arc(x-50,400,50,50,TWO_PI,PI);

}
}


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
  }













   // arc(300,300,300,300,PI+HALF_PI,HALF_PI);
 // fill("red")
 // arc(300,300+75,150,150,HALF_PI,PI+HALF_PI);
 