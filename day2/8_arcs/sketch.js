function setup() {
  createCanvas(500, 500);
  noStroke();
 
}

function draw() {
 
 // 배경이 되는 첫 원 
  fill(200);
  ellipse(300,300,300);

  fill(100);
  arc(375,300,150,150, PI, TWO_PI);
   
   fill(100);
  arc(375,300,150,150, PI, TWO_PI);
 
//아래의 큰 원을 그려주는 것  
  arc(300,300,300,300, TWO_PI, PI);
 
// 밝은 색으로 바꿔서, 0에서 180으로 이어지는
   
  fill(200);
  arc(225,300,150,150,TWO_PI,PI);
  

 }
  

    