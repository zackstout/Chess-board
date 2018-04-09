
let board = [];

function setup() {
  createCanvas(500, 500);
  background(200);
  drawGrid();
}

function drawGrid() {
  for (let i=0; i < 8; i++) {
    let col = [];
    for (let j=0; j < 8; j++) {
      // col.push({})
      // console.log(i, j);

      // white means same parity, black means different parity:
      const same_parity = i % 2 === j % 2;
      const color = same_parity ? 200: 100;
      fill(color);
      rect(i * width/8, j * height/8, width/8, height/8);
    }
  }
}

function draw() {

}
