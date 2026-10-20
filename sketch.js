 let bugX = 300;
  let bugY = 310;
let sX = 55
let sY = 55

function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(79, 195, 247);
  
  fill (104, 159, 56);
  rect (-1, 300, 410, 100);
  fill ("yellow");
  circle (sX, sY, 100);
  if(keyIsDown ("n")) {
    sX = sX + 1;} else {
    sX = sX -1
    }
  if (sX <= 55) {
    sX = 55
  }
 
//ears
   fill ("white");
   triangle (150, 190, 180, 154, 140, 150);
    triangle (250, 190, 220, 154, 260, 150);
//inner ear  
  fill ("pink")
  triangle (153, 180, 175, 157, 145, 155);
  triangle (246, 180, 225, 157, 255, 155);
  //fluff
fill ("white")
  triangle (177, 245, 145, 240, 160, 200)
   triangle (215, 245, 260, 240, 235, 200);
//head
  circle(200,200,100);
//eyes
  fill (0,0,0);
  let px = 170;
  let py = 185;
  let offsetVector = createVector (px - mouseX, py - mouseY);
  offsetVector.normalize();
  offsetVector.mult(6);
  if (mouseButton.left){
    line(px -10, py +5, px+10, py +10);
    line(px -10, py +15, px+10, py +10);
  } else{
    circle(px - offsetVector.x, py - offsetVector.y , 30)
  }
  
  let fx = 230;
  let fy = 200;
  let offsettVector = createVector (fx - mouseX, fy - mouseY);
  offsettVector.normalize();
  offsettVector.mult(6); 
  if (mouseButton.left){
     line(fx +10, fy +5, fx -10, fy +10);
    line(fx + 10, fy +15, fx - 10, fy + 10);
  } else{
  circle(fx - offsettVector.x, fy - offsettVector.y , 30)
  }

  //:3
  
  if (mouseY >= 0 ){
  line (180, 220, 190, 230);
  line (220, 220, 210, 230);
  }
  line (190, 230, 200, 220);
  line (200, 220, 210, 230);
  fill ("white");
  circle (160,250,20);
  circle (250, 250, 20);
 
  
  //drool
  if (keyIsDown ("x")){
  fill ("Aqua");
  rect (180, 223, 10 ,30 ,10, 10, 10);
  }
  


   //test for movement
  
  
 fill ("green")
  rect (bugX, bugY, 20)
  fill ("white")
  circle (bugX + 5, bugY + 5, 5)
  circle (bugX + 15, bugY + 5 , 5)
  fill ("pink")
  rect (bugX + 5, bugY + 10, 10, )
 fill ("black")
  rect (bugX -10, bugY +5, 10, 1)
  rect (bugX -10, bugY +10, 10, 1)
  rect (bugX -10, bugY +15, 10, 1)
  rect (bugX +20, bugY +5, 10, 1)
  rect (bugX +20, bugY +10, 10, 1)
  rect (bugX +20, bugY +15, 10, 1)
  
if (keyIsDown ("d")){
  bugX = bugX +1;
}
  if (keyIsDown("a")){
    bugX = bugX -1;
  }
if (keyIsDown ("w")){
  bugY = bugY - 1;
}
  if (keyIsDown ("s")){
    bugY = bugY + 1;
  }

  //barrier

  if (bugX <= 0){
    bugX = 0
  }
  if (bugX >= 380){
    bugX = 380
  }
  if (bugY <= 300){
    bugY = 300
  }
if (bugY >= 380){
  bugY = 380
   }


}