
class Rook extends Piece {
  constructor(x, y, col) {
    super();
    this.color = col;
    this.pos = {
      x: x,
      y: y
    };
  }

// This is truly disgusting:
  getMoves() {
    // console.log(this.color, board);
    let possibleMoves = [];
    let ind = 8 * this.pos.x + this.pos.y;

    let x = this.pos.x;
    let y = this.pos.y;

    while (x > 0) {
      ind -= 8;
      possibleMoves.push(board[ind]);
      x--;
    }
    ind = 8 * this.pos.x + this.pos.y;
    x = this.pos.x;
    while (x < 7) {
      ind += 8;
      possibleMoves.push(board[ind]);
      x++;
    }
    ind = 8 * this.pos.x + this.pos.y;
    while (y > 0) {
      ind -= 1;
      possibleMoves.push(board[ind]);
      y--;
    }
    ind = 8 * this.pos.x + this.pos.y;
    y = this.pos.y;
    while (y < 7) {
      ind += 1;
      possibleMoves.push(board[ind]);
      y++;
    }

    console.log(possibleMoves);
  }
  // Need to check it's not blocked.

}
