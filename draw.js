
// The board will contain all of our Cells:
let board = [];

function setup() {
  createCanvas(500, 500);
  background(200);
  drawGrid();
  console.log(board);
  addPieces();
  console.log(board);
}

// Draw the grid:
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

function addPieces() {
  for (let i=0; i < 8; i++) {
    // 8 times the column number plus the row number (1, in this case) gives the index in the board array:
    const ind = 8 * i + 1;
    const ind2 = 8 * i + 6;
    const pawn = new Pawn(8*i, 1);
    const other_pawn = new Pawn(8*i, 6);
    board[ind].piece = pawn;
    board[ind2].piece = other_pawn;
  }
}

class Cell {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.piece = null;
  }

  // White means same parity, black means different parity:
  draw() {
    const same_parity = this.x % 2 === this.y % 2;
    const color = same_parity ? 200 : 100;
    const other_color = same_parity ? 100 : 200;
    // how do we pass in more arguments here?
    fill(color);
    rect(this.x * width/8, this.y * height/8, width/8, height/8);
    // Outputting text to make sure we know what's going on:
    fill(other_color);
    text(`${this.x}, ${this.y}`, this.x * width/8, this.y * height/8 + height/8);
  }
}

class Piece {
  constructor(color) {
    this.color = color;
  }
}

class Pawn extends Piece {
  // Does the pawn need to keep track of its location? Or can we just use the cells in our board array?
  constructor(x, y) {
    // how to use this?
    super();
    this.pos = {
      x: x,
      y: y
    };
    // this.pos.x = x;
    // this.pos.y = y;
  }
}














// chillin
