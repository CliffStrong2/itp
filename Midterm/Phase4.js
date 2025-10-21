
//FOR THE 5x5 GRID//
function setup() {
  createCanvas(400, 400); 
  noStroke();
}

function drawObject(x, y, s) {
  push();
  translate(x, y);
  scale(s);
  fill(0); 
  rect(40, 10,  60, 10);
  rect(40, 20, 20, 10);
  rect(80, 20, 20, 10);
  stroke('black')
  strokeWeight(5);
  line(60, 50, 80, 50);
  line(40, 40, 60, 50);
  line(100, 40, 80, 50);
  ellipse(70, 40, 5, 5);
  pop();
}

function draw() {
  drawObject(0, 0, 1);
  drawObject(0, 50, 1);
  drawObject(0, 100, 1);
  drawObject(0, 150, 1);
  drawObject(0, 200, 1);
  drawObject(80, 0, 1);
  drawObject(160, 0, 1);
  drawObject(240, 0, 1);
  drawObject(320, 0, 1);
  drawObject(400, 0, 1);
  drawObject(80, 50, 1);
  drawObject(160, 50, 1);
  drawObject(240, 50, 1);
  drawObject(320, 50, 1);
  drawObject(400, 50, 1);
  drawObject(80, 100, 1);
  drawObject(160, 100, 1);
  drawObject(240, 100, 1);
  drawObject(320, 100, 1);
  drawObject(400, 100, 1);
  drawObject(80, 150, 1);
  drawObject(160, 150, 1);
  drawObject(240, 150, 1);
  drawObject(320, 150, 1);
  drawObject(400, 150, 1);
  drawObject(80, 200, 1);
  drawObject(160, 200, 1);
  drawObject(240, 200, 1);
  drawObject(320, 200, 1);
  drawObject(400, 200, 1);
}