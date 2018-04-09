
let board = [];

function setup() {
  createCanvas(500, 500);
  background(200);
  drawGrid();
  console.log(board);
}

function drawGrid() {
  for (let i=0; i < 8; i++) {
    let col = [];
    for (let j=0; j < 8; j++) {
      const cell = new Cell(i, j);
      board.push(cell);
      cell.draw();
    }
  }
}

function draw() {

}

class Cell {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  // white means same parity, black means different parity:
  draw() {
    const same_parity = this.x % 2 === this.y % 2;
    const color = same_parity ? 200: 100;
    fill(color);
    rect(this.x * width/8, this.y * height/8, width/8, height/8);
  }
}














// chillin
