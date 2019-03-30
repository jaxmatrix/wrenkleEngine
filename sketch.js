let alpha = 0;
let R = 100;
let e = 20;

function setup(){
  createCanvas(400,400);
  angleMode(DEGREES);
  frameRate(30);
}

function draw(){
  background('rgb(226, 226, 226)');
  push();
  translate(200,200);
  fill('rgb(44, 50, 207)');

  alpha = (alpha+1)%360
  let ex = e*cos(3*alpha-90);
  let ey = e*sin(3*alpha-90);

  for(let i = 0 ; i < 360; i++){
    let x = e*cos(3*i) + R*cos(i);
    let y = e*sin(3*i) + R*sin(i)

    circle(x,y,2)

  }
  circle(ex,ey,4);
  tr(ex,ey,alpha+180)

  pop();
}

function tr(x,y,r){
  translate(x,y)
  rotate(r);
  line(-1*R*cos(30),R*sin(30),R*cos(30),R*sin(30));
  line(R*cos(30),R*sin(30),0,-R);
  line(0,-R,-1*R*cos(30),R*sin(30))
}
