let x = 5;
let y = 10;
let a = 0;
let b = 0;


function setup() {
  createCanvas(500, 500);
 
  background(100); 
}

function draw() {
 
  fill(200);
  ellipse(250,250,160, 250)
  fill(0);
  triangle(250,125,280,100,220,100) 
  circle(220,200,10,10)
  circle(270,200,10,10)
  ellipse(240,300,20,1)

 
  x = width / 2;
  y = height / 2;
  
  let x2 = sin(a) * 100;
  let y2 = cos(a) * 50;
  
  let x3 = sin(b) * 200;
  let y3 = cos(b) * 200;
    
  fill(0);
  ellipse(x + x2 + x3, y + y2 + y3, 15, 15);
  
  a = a + 0.01;
  b = b + 0.1;
   
}


 
 let x = 10;
let y = 10;
let a = 0;
let b = 0;

function setup() {
  createCanvas(600, 600);
  background("orange");
  noStroke();
  smooth();
}

function draw() {  
  x = x + 1;
  y = y + 1;
  
  let x2 = sin(a) * 50;
  let y2 = cos(a) * 50;

    
  fill(255, 0, 0);
  ellipse(x + x2, y + y2, 15, 15);
  
  a = a + 0.1;
  b = b + 0.01;
}
 
 