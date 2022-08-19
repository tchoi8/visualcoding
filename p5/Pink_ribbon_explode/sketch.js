let x = 10;
let y = 10;
let a = 0;
let b = 0;

function setup() {
  createCanvas(600, 600);
  background(200);
  noStroke();
  smooth();
}

function draw() {  
  
 
  if (x < 500){  
    x = x + 1;
    y = y + 1;
    a = a + 0.05;
    b = b + 0.1;

 
  } else

  {
    x = x - .1;
    y = y - 4 ;
    a = a + 8;
    b = b + 8;

  }

   
  let x2 = sin(a) * 50;
  let y2 = cos(a) * 50;

    
  fill('Pink');
  ellipse(x + x2,y+y2, 10, 10);
   

  
}