
class Rook extends Piece {
  constructor(x, y, col) {
    super();
    this.color = col;
    this.pos = {
      x: x,
      y: y
    };
  }


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

    console.log(possibleMoves);
  }
  // Need to check it's not blocked.

}
