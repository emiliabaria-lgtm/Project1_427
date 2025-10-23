let myImage;
let xo;
let xo1;
let xo2;
let xo3;

let mySound;

function preload() {
xo = loadImage('/img/xo_left.jpg');
xo1 = loadImage('/img/xo_right.jpg');
xo2 = loadImage('/img/xo_up.jpg');
xo3 = loadImage('/img/xo_down.jpg');

mySound = loadSound('Butterfly - Smile.dk.mp3');
}
//mySound = createAudio('Butterfly - Smile.dk');


function setup() {
  createCanvas(1000, 1000);
  imageMode(CENTER);
  currentImage= xo;
  mySound.loop();
}

function draw() {
  background(220);
  image(currentImage, 0, 0);
  
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    currentImg = xo2;
  } else if (keyCode === DOWN_ARROW) {
    currentImg = xo3;
  } else if (keyCode === LEFT_ARROW) {
    currentImg = xo;
  } else if (keyCode === RIGHT_ARROW) {
    currentImg = xo1;
  }
}
