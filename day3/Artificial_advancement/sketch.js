let startColor = 255;
let speedAnimate = 1;
 
function preload(){
  koFont = loadFont('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/InfinitySans-RegularA1.woff')}
//폰트 갖고오기 

function setup() {
  createCanvas(500, 900);
  noStroke();
  textSize(50);
}
 
function draw() {
   
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


  fill(250);
 textFont(koFont);
  text('인공적인', 50, 100);
  text('발전', 50, 200); 

 
  text('Artificial', 50, 300);
  text('Advancement', 50, 400);
 
  }
 / 
}
 