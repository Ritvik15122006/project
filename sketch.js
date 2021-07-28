var bg,bg2,form,system,code,security;
var score=0;
var gameState=1
function preload() {
  bg = loadImage("./img/Game start.jpg");
  bg2 = loadImage("img/BG-1.jpg")
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
//  clue=new Clue()
}

function draw() {
  background(255);
  image(bg, 0, 0, width, height);
  //clue.display();
  security.display();

  if(score === 3) {
    clear()
    background("img/BG-4.jpg ")
    fill("black")
    textSize(40);
    text("TREASURE UNLOCKED",250, 200);
  }
  if(gameState===1||gameState===2||gameState===3){
    security.display();
 }

  drawSprites()
 if(gameState===1||gameState===2||gameState===3){
    textSize(30);
    fill("black");
    a=text("Score: " + score, 450, 50);
    
 }
  console.log(a)
    
}