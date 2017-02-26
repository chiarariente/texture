function setup() {
  createCanvas(890,330);
  colorMode(RGB,200);
  frameRate(3);
}

function draw() {
  stroke(50);
  
  for(var x=-25; x<width; x+=20) {
    for (var y=0; y<height; y+=20){
      
      if (random()<0.5) {
        fill(255);
      } else { fill(random()*255,random()*255,255);
        }

      beginShape(TRIANGLES);
        vertex(x, y+20);
        vertex(x+10, y);
        vertex(x+20, y+20);
        vertex(x+30, y);
        vertex(x+40, y+20);
        vertex(x+50, y);
      endShape();
    }
  }
}