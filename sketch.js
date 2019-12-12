var parks;
var pNum = 0;
var sNum = 0;
var tNum = 0;
var aNum = 0;
var bNum = 0;
var cNum = 0;
var dNum = 0;
var eNum = 0;
var fNum = 0;


let rad = 60; // Width of the shape
let xpos, ypos; // Starting position of shape

let xspeed = 2.8; // Speed of the shape
let yspeed = 2.2; // Speed of the shape

let xdirection = 1; // Left or Right
let ydirection = 1; // Top to Bottom

function preload() {
  parks = loadTable("BREC_Parks.csv");
}

function setup() {
  createCanvas(800, 600);
  background(0);
  frameRate(30);
  ellipseMode(RADIUS);
  xpos = width / 2;
  ypos = height / 2;

  for (var i = 1; i < parks.getRowCount(); i++) {
    if (parks.get(i, 12) != "") {
      sNum = int(parks.get(i, 12)) + sNum;
    }

    if (parks.get(i, 10) != "") {
      pNum = int(parks.get(i, 10)) + pNum;
    }

    if (parks.get(i, 11) != "") {
      tNum = int(parks.get(i, 11)) + tNum;
    }

    if (parks.get(i, 13) != "") {
      aNum = int(parks.get(i, 13)) + aNum;
    }

    if (parks.get(i, 9) != "") {
      bNum = int(parks.get(i, 9)) + bNum;

      if (parks.get(i, 9) != "") {
        cNum = int(parks.get(i, 9)) + cNum;
      }

      if (parks.get(i, 10) != "") {
        dNum = int(parks.get(i, 10)) + dNum;
      }

      if (parks.get(i, 10) != "") {
        eNum = int(parks.get(i, 10)) + eNum;
      }

      if (parks.get(i, 9) != "") {
        fNum = int(parks.get(i, 9)) + fNum;
      }
    }


  }

  print(pNum);
  print(sNum);

  //playgrouds
  circle(200, height / 2, pNum * 2);

  //swimming pools
  circle(550, height / 2, sNum * 2);
  circle(450, height / 6, tNum * 2);
  circle(450, height / 4, aNum * 2);
  circle(750, height / 8, bNum * 2);
  circle(850, height / 5, cNum * 7);
  circle(150, height / 1, cNum * 7);
  circle(750, height / 4, dNum * 2);
  circle(450, height / 1, dNum * 15);
  circle(850, height / 2, eNum * 2);
  circle(650, height / 7, eNum * 10);
  circle(450, height / 1, fNum * 2);
  circle(450, height / 3, fNum * 5);
  circle(500,500,100,100);
  fill(150);
}

function draw() {
  xpos = xpos + xspeed * xdirection;
  ypos = ypos + yspeed * ydirection;
  if (xpos > width - rad || xpos < rad) {
    xdirection *= -1;
  }
  if (ypos > height - rad || ypos < rad) {
    ydirection *= -1;
  }

  // Draw the shape
  ellipse(xpos, ypos, rad, rad);
}


