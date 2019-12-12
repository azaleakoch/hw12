let linee = -400;
let lineX = 195;
let lef = 200;
let rig = 100;
let prizeHeight1 = 490;
let prizeHeight2 = 490;
let prizeHeight3 = 490;
let goodPrize = 510

let ball1 = 120;
let ball2 = 210;
let ball3 = 320;
let ballHard = 60

function setup() {
  createCanvas(400, 600);
}

function draw() {
  background(255, 204, 193);
  noStroke();
  fill(250, 90, 80);
  rect(0, 0, 400, 75);
  rect(0, 0, 30, 600);
  rect(370, 0, 50, 600);
  rect(0, 500, 400, 200);

  fill(160, 200, 255);
  ellipse(ball1, prizeHeight1, 60);
  ellipse(ball2, prizeHeight2, 54);
  ellipse(ball3, prizeHeight3, 70);
  fill(204, 191, 0);
  ellipse(ballHard, goodPrize, 20);

  fill(255, 255, 255);
  rect(lineX, linee, 10, 550);

  fill(250, 90, 80);
  rect(0, 0, 400, 75);

  fill(0, 0, 0);
  textSize(20);
  text('claw game: the claw is a ball', 70, 50);

  fill(255, 255, 255);
  ellipse(lef, rig, 50);

  if (keyIsDown(LEFT_ARROW)) {
    lef -= 5;
    lineX -= 5;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    lef += 5;
    lineX += 5;
  }

  if (lef >= 360, lineX >= 360) {
    lef = 360;
    lineX = 355;
  }
  if (lef <= 40, lineX <= 40) {
    lef = 40;
    lineX = 35;
  }
  if (rig >= 460) {
    rig = 460;
  }
  if (rig <= 40) {
    rig = 40;
  }
  if (linee >= -50) {
    linee = -60;
  }
}

function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    rig += 350;
    linee = -60;
    noLoop();
  }

  if (linee === -60) {
    if (lef >= 110 && lef <= 130) {
      fill(255, 200, 190);
      rect(0, 0, 400, 600);
      fill(255, 255, 255);
      textSize(35);
      text('you win!', 150, height / 2);
    } else {

      if (lef >= 190 && lef <= 220) {
        fill(255, 200, 190);
        rect(0, 0, 400, 600);
        fill(255, 255, 255);
        textSize(35);
        text('you win!', 150, height / 2);
      } else {
        if (lineX >= 290 && lineX <= 330) {
          fill(255, 200, 190);
          rect(0, 0, 400, 600);
          fill(255, 255, 255);
          textSize(35);
          text('you win!', 150, height / 2);
        } else {
          if (lineX >= 50 && lineX <= 60) {
            fill(200, 191, 0);
            rect(0, 0, 400, 600);
            fill(0, 0, 0);
            textSize(25);
            text('you got the tiny ball!! yay!', 60, height / 2)
          } else {
            fill(50, 0, 0, 200);
            rect(0, 0, 400, 600);
            fill(255, 255, 255);
            textSize(35);
            text(':/// you lost.', 120, height / 2);
          }
        }
      }
    }
  }
}
