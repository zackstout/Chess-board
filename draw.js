
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
    // just want i here, not 8*i:
    const pawn = new Pawn(i, 1, 'W');
    const other_pawn = new Pawn(i, 6, 'B');
    board[ind].piece = pawn;
    board[ind2].piece = other_pawn;

    pawn.drawPiece('P');
    other_pawn.drawPiece('P');
  }
}
















// chillin
