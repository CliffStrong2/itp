function setup() {
  createCanvas(150, 150); 
  noStroke(); 
}

function draw() {
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
}