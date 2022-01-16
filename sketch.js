var ballx = 300;
var bally = 300;
var ballsize = 40;
var score = 0;
var gamestate = "L1";


function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
}//einde setup

function draw() {
  background(220);
  if (gamestate=="L1"){
      levelEen();
  }
    if (gamestate=="L2"){
      levelTwee();
  }
     if (gamestate=="L3"){
      levelDrie();
  }
   if (gamestate=="L4"){
      levelVier();
   }
   if (gamestate=="L5"){
      levelVijf();
   }
  if (gamestate=="L6"){
      levelZes();
   }
  if (gamestate=="L7"){
      levelZeven();
   }
  if (gamestate=="L8"){
      levelAcht();
   }
  if (gamestate=="L9"){
      levelNegen();
   }
  if (gamestate=="L10"){
      levelTien();
   }
  if (gamestate=="einde"){
    einde();
  }
  text(("SCORE: " + score ), width/2, 40);
}//einde draw


function levelEen(){
  text("level 1", width/2, height-20)
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballsize/2){
  ballx = random(width);
  bally = random(height);
  score = score + 1;
      
  }
  if (score>=5){
    gamestate = "L2";
  }
  line(ballx, bally, mouseX, mouseY);
  ellipse(ballx, bally, ballsize, ballsize)
}//einde level 1

function levelTwee(){
  background(200,0,0)
  text("level 2", width/2, height-20)
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballsize/2){
  ballx = random(width);
  bally = random(height);
  score = score + 1;
      
  }
  if (score>=10){
   // background(random(255));
    gamestate = "L3";
  }
  ellipse(ballx, bally, ballsize, ballsize)
} //einde level 2

function levelDrie(){
  background(0,200,0)
  text("level 3", width/2, height-20)
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballsize/2){
  ballx = random(width);
  bally = random(height);
  score = score + 1;
    ballsize = ballsize-1
      
  }
  if (score>=15){
   gamestate ="L4";
  }
  ellipse(ballx, bally, ballsize, ballsize)
} //einde level 3

function levelVier(){
  background(0,0,200)
  text("level 4", width/2, height-20)
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballsize/2){
  ballx = random(width);
  bally = random(height);
  score = score + 1;
    ballsize = ballsize-1
      
  }
  if (score>=20){
gamestate = "L5"  }
  ellipse(ballx, bally, ballsize, ballsize)
} //einde level 4

function levelVijf(){
  background(100,100,0)
  text("level 5", width/2, height-20)
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballsize/2){
  ballx = random(width);
  bally = random(height);
  score = score + 1;
    ballsize = ballsize-1
      
  }
  if (score>=25){
  gamestate="L6";
  }
  ellipse(ballx, bally, ballsize, ballsize)
} //einde level 5

function levelZes(){
  background(0,100,100)
  text("level 6", width/2, height-20)
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballsize/2){
  ballx = random(width);
  bally = random(height);
  score = score + 1;
    ballsize = ballsize-1
      
  }
  if (score>=30){
   gamestate = "L7";
  }
  ellipse(ballx, bally, ballsize, ballsize)
} //einde level 6

function levelZeven(){
  background(100,0,100)
  text("level 7", width/2, height-20)
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballsize/2){
  ballx = random(width);
  bally = random(height);
  score = score + 1;
    ballsize = ballsize-1
      
  }
  if (score>=35){
   gamestate = "L8";
  }
  ellipse(ballx, bally, ballsize, ballsize)
} //einde level 7

function levelAcht(){
  background(200,100,200)
  text("level 8", width/2, height-20)
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballsize/2){
  ballx = random(width);
  bally = random(height);
  score = score + 1;
    ballsize = ballsize-1
      
  }
  if (score>=40){
  gamestate ="L9"
  }
  ellipse(ballx, bally, ballsize, ballsize)
} //einde level 8

function levelNegen(){
  background(100,100,100)
  text("level 9", width/2, height-20)
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballsize/2){
  ballx = random(width);
  bally = random(height);
  score = score + 1;
    ballsize = ballsize-1
      
  }
  if (score>=45){
   gamestate = "L10";
  }
  ellipse(ballx, bally, ballsize, ballsize)
} //einde level 9

function levelTien(){
  background(200,100,100)
  text("level 10", width/2, height-20)
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballsize/2){
  ballx = random(width);
  bally = random(height);
  score = score + 1;
    ballsize = ballsize-0.75
      
  }
  if (score>=49){
    gamestate = "einde"
    ballsize=40
  }
                                
  ellipse(ballx, bally, ballsize, ballsize)
} //einde level 10

function einde(){
  background(200,100,100)
  text("PROFICIAT!", width/2, height/2)
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballsize/2){
  ballx = 300;
  bally = 300;
  score = score + 1;
    ballsize = ballsize+40
      
  }
  if (score>=50){
    gamestate = "L1"
    score= 0
    ballsize= 40
  }
                                
  ellipse(ballx, bally, ballsize, ballsize)
} //einde
  