function setup() {
  createCanvas(500, 500);
  noStroke();
 
}

function draw() {
 
 // 배경이 되는 첫 원 
  fill(200);
  ellipse(300,300,300);

// 첫 원의 반지름 위의 작은 원, 색도 어둡게    
  fill(100);
  arc(375,300,150,150, PI, TWO_PI);

//아래의 큰 원을 그려주는 것  
  arc(300,300,300,300, TWO_PI, PI);

// 색을 바꾸고 작은 원을 그려주기   
  fill(200);
  arc(225,300,150,150,TWO_PI,PI);
 

 }
  

    