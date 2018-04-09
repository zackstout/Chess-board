
class Pawn extends Piece {
  // Does the pawn need to keep track of its location? Or can we just use the cells in our board array?
  // It does, so that we can draw it:
  constructor(x, y, col) {
    // how to use this? we get an error if not called:
    super();
    this.color = col;
    this.pos = {
      x: x,
      y: y
    };
    // for the first move shenanigans:
    this.hasMoved = false;
  }

  getMoves() {
    console.log(this.color, board);
    let possibleMoves = [];
    if (this.color == 'W') {
      // Then we need to check *next* row.
      const ind = 8 * this.pos.x + this.pos.y;
      // So we care about the item at ind + 1, its center move:
      possibleMoves.push(board[ind + 1]);

      if (!this.hasMoved) {
        possibleMoves.push(board[ind + 2]);
      }
    } else {
      // Then we need to check *prev* row.
      const ind = 8 * this.pos.x + this.pos.y;
      // We care about the item at ind - 1, its center move:
      possibleMoves.push(board[ind - 1]);

      if (!this.hasMoved) {
        possibleMoves.push(board[ind - 2]);
      }
    }

    console.log(possibleMoves);
  }



// chillin
}
