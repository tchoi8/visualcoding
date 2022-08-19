
const Y_AXIS = 1;
const X_AXIS = 2;
let b1, b2, c1, c2;


function setup() {
  createCanvas(710, 400);

  // 색상 정의하기
  b1 = color(205, 110, 168);
  b2 = color(255);
  c1 = color(237, 69, 146);
  c2 = color(0, 102, 153);

  noLoop();
}

function draw() {

   // 배경
  setGradient(0, 0, width / 2, height, b1, b2, X_AXIS);
  setGradient(width / 2, 0, width / 2, height, b2, b1, X_AXIS);
  // 전경
  setGradient(50, 90, 540, 80, c1, c2, Y_AXIS);
  textSize(26);
  text('JavaScript', 200, 200);
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
