// https://www.moma.org/collection/works/37166
// Jean (Hans) Arp, Untitled (Squares Arranged According to the Laws of Change), 1917

let grid_unit = 50;
let scaled_height;
let clrs = ['#725E46', '#C2AE7C', '#757C5D', '#2F2F2D'];
let bg;

function setup() {
  
  createCanvas(windowWidth, windowHeight); 
  //background('#AD885C');
  background(random(255));
	bg = get(0, 0);
  textSize(20);
  fill('black');
  frameRate(1);
  //grid();


}

function draw() { //trace your image in the draw function
  let x = random(width);
  let y = random(height);
  //let size = random(100, 300); // arp style
let size = random(width); // random style
  noStroke();
  almostSquare(x, y, size);	

}

function mousePressed(){
	size = random(100, 300);
	//almostSquare(mouseX, mouseY, size);
}

// adds offsets to some corners of a square to make an organic feeling shape
function almostSquare(x, y, size){
// random fill
// fill(random(clrs)); // arp style
fill(random(255), random(255), random(255)); //random style
// see if approx square is empty on canvas
let offset = createVector(random(-size/5, size/5), random(-size/5, size/5));
 let crnr_clrs = [get(x+size/2, y+size/2), get(x, y), get(x + size, y - offset.y), get(x + size + offset.x, y + size), get(x - offset.x, y + size + offset.y)];
// if (compareFunc(crnr_clrs, [bg, bg, bg, bg, bg])){
  beginShape()
    vertex(x, y);
    vertex(x + size, y - offset.y);
    vertex(x + size + offset.x, y + size);
    vertex(x - offset.x, y + size + offset.y);
  endShape(CLOSE);
 // }

}

function compareFunc(arr1, arr2){
	return JSON.stringify(arr1) === JSON.stringify(arr2);
}

function grid(){
  //draw vertical gridlines
  for(var i = 0; i < width; i+=grid_unit){ //move across the screen
    stroke('red');
    line(i, 0, i, height); //draw line from top to bottom 
    noStroke();
    text(i, i, 10);
  }
  //draw horizontal gridlines
  for(var j = 0; j < height; j+=grid_unit){ //move down the screen
     stroke('red');
     line(0, j, width, j);  //draw line from left to right
     noStroke(); 
      text(j, 2, j);
  }
} 
