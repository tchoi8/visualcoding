 
let startColor = 255;
let speedAnimate = 5;
 
function preload(){
  koFont = loadFont('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/InfinitySans-RegularA1.woff')}
//폰트 갖고오기 

function setup() {
  createCanvas(500, 900);
  noStroke();
  textSize(50);
}
 
function draw() {
  background(255,192,203);
  
  if(startColor > width + 255 || startColor < 255) {
    speedAnimate *= -1;
  }
 
//간단한 에니메이션 엔진 
  startColor += speedAnimate;
  
  let gap = 1;
  let numRectangles = 200;
  let rectWidth = width/100
//  let rectWidth = width / numRectangles;

  for (let x = 0; x < width; x += gap + rectWidth) {
    let green = startColor - x;
    let red = (255,192,203);
    fill(255, green, 203);
    rect(10, x, 400, height)
  }
 //조금더 복잡한 for 루프로 
 //배경 색을 에니메이션

 
 textFont(koFont);
  text('인공적인', 50, 100);
  text('발전', 50, 200); 

 //앗 아직 영어폰트 없네요!
   text('Artificial', 50, 300);
   text('Advancement', 50, 400);

 
 fill(0);
  ellipse(200,200,100,100);
  fill(255);
 ellipse(225,200,50,50);
}

 /*

const Y_AXIS = 1;
const X_AXIS = 2;
let b1, b2, c1, c2;

function setup() {
  createCanvas(500, 900);

  // 색상 정의하기
  b1 = color(255);
  b2 = color(0);
  c1 = color(204, 102, 0);
  c2 = color(0, 102, 153);

  noLoop();
}

function draw() {
  // 배경
  setGradient(0, 0, 1000, height, b1, b2, Y_AXIS);
 // setGradient(width / 2, 0, width / 2, height, b2, b1, Y_AXIS);
  // 전경
//  setGradient(50, 90, 540, 80, c1, c2, Y_AXIS);
//  setGradient(50, 190, 540, 80, c2, c1, X_AXIS);
}

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();

  if (axis === Y_AXIS) {
    // 위에서 아래 방향 그래디언트
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } else if (axis === X_AXIS) {
    // 왼쪽에서 오른쪽 방향 그래디언트
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }
}

*/