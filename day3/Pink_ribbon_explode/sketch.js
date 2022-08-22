
let s, angle, a, b, n, index;
let colors = ["pink" ];

function setup() {
  createCanvas(600, 600);
  background(0);
  smooth();
  
  n = 100;
  s = 30;
  angle = 10;
  a = 1;
  b = 9;
  index = 0;
}

function draw() {
  noStroke();
  
  b = 1;
  for(let i = 50; i < width-50; i+=n) {
    a = 1;
    for(let j = 50; j < height-50; j+=n) {
      push();
      translate(i+50, j+50);
      
      x = s * cos(radians(angle%360) * a);
      y = s * sin(radians(angle%360) * b);
      
      fill(colors[index%colors.length]);
      ellipse(x, y, 6, 6);
      pop();
      
      a++;
    }
    b++;
    index++;
  }
  angle+=0.5;
}

function mousePressed() {
  setup();
}
/*
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
   

  
}*/