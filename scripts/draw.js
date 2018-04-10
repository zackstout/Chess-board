
// The board will contain all of our Cells:
let board = [];

function setup() {
  createCanvas(500, 500);
  background(200);
  drawGrid();
  // Always struck me as funny that this updates to show current state of object -- won't record its history -- i guess that's the idea behind immutable data types!
  // console.log(board);
  initPieces();
  console.log(board);
}

// Populate the board array with cells that draw themselves:
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

// Add all pieces to the board in their initial state:
function initPieces() {
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

  curryPieces([{x: 1, y: 0}, {x: 6, y: 0}, {x: 1, y: 7}, {x: 6, y: 7}], Knight);
  curryPieces([{x: 2, y: 0}, {x: 5, y: 0}, {x: 2, y: 7}, {x: 5, y: 7}], Bishop);
  curryPieces([{x: 0, y: 0}, {x: 7, y: 0}, {x: 0, y: 7}, {x: 7, y: 7}], Rook);
  curryPieces([{x: 3, y: 0}, {x: 3, y: 7}], King);
  curryPieces([{x: 4, y: 0}, {x: 4, y: 7}], Queen);
}

function curryPieces(arr, type) {
  arr.forEach(pos => {
    // All right, this is a fine way to pass in variable variable names:
    const piece = pos.y > 0 ? new type(pos.x, pos.y, 'B') : new type(pos.x, pos.y, 'W');
    const ind = 8 * pos.x + pos.y;
    board[ind].piece = piece;

    if (type == King) {
      piece.drawPiece("#");
    } else {
      // Kind of ugly but it's all right:
      piece.drawPiece(String(type)[6]);
    }
  });
}

// Handle user input:
function mousePressed() {
  // Grabbing the position of the cell that was clicked:
  const x = Math.floor(mouseX / (width/8));
  const y = Math.floor(mouseY / (height/8));

  // Grabbing index of our cell in the Board array:
  const ind = 8 * x + y;
  // board[ind].active = true;

  if (board[ind].piece) {
    board[ind].activate();
    board[ind].piece.getMoves();
  }
}














// chillin
