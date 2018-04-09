
// The board will contain all of our Cells:
let board = [];

function setup() {
  createCanvas(500, 500);
  background(200);
  drawGrid();
  // Always struck me as funny that this updates to show current state of object -- won't record its history -- i guess that's the idea behind immutable data types!
  // console.log(board);
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
  // Add both players' pawns:
  for (let i=0; i < 8; i++) {
    // 8 times the column number plus the row number (1, in this case) gives the index in the board array:
    const ind = 8 * i + 1;
    const ind2 = 8 * i + 6;
    // just want i here, not 8*i:
    const white_pawn = new Pawn(i, 1, 'W');
    const black_pawn = new Pawn(i, 6, 'B');
    board[ind].piece = white_pawn;
    board[ind2].piece = black_pawn;

    // pawn.getMoves();
    white_pawn.drawPiece('P');
    black_pawn.drawPiece('P');
  }

  // const wk1 = {x: 1, y:0};
  // const wk2 = {x: 6, y:0};
  // const bk1 = {x: 1, y:7};
  // const bk2 = {x: 6, y:7};



  const knight_indices = [{x: 1, y: 0}, {x: 6, y: 0}, {x: 1, y: 7}, {x: 6, y: 7}];
  knight_indices.forEach(pos => {
    const knight = pos.y > 0 ? new Knight(pos.x, pos.y, 'B') : new Knight(pos.x, pos.y, 'W');
    const ind = 8 * pos.x + pos.y;
    board[ind].piece = knight;
    knight.drawPiece('K');
  });
}

function mousePressed() {
  // Grabbing the position of the cell that was clicked:
  const x = Math.floor(mouseX / (width/8));
  // console.log(x);
  const y = Math.floor(mouseY / (height/8));
  // console.log(y);

  // Grabbing index of our cell in the Board array:
  const ind = 8 * x + y;
  // board[ind].active = true;

  if (board[ind].piece) {
    board[ind].activate();

    board[ind].piece.getMoves();
  }


}














// chillin
