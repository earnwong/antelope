let img;
let cnv;
function preload(){
  img = loadImage('assets/antelope3.jpeg');
}

function setup() {
  cnv = createCanvas(img.width, img.height);
  let newCanvasX = (windowWidth - img.width)/2;
  let newCanvasY = (windowHeight - img.height)/2;
  cnv.position(newCanvasX, newCanvasY);
  
  // access the pixel info of image 
  for(let col = 0; col < img.width; col+=2){
    for(let row = 0; row < img.height; row+=2){
      let xPos = col;
      let yPos = row;
      let c = img.get(xPos,yPos);
      push();
      translate(xPos, yPos);
      rotate(radians(random(30)));
      noFill();
      stroke(color(c));
      strokeWeight(random(3));
      point(xPos, yPos);
      strokeWeight(random(1));
      point(yPos, xPos);
      strokeWeight(random(2));
      
      //curve(x1, y1, x2, y2, x3, y3, x4, y4)
      curve(xPos, yPos, sin(xPos)* random(60), cos(yPos) * sin(xPos) * random(90) , random(80), random(15) , cos(xPos) * sin(yPos) * random(20), cos(yPos) * sin(xPos) * random(260));
      pop();
    }
  }
  
}
