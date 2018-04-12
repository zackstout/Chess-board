
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
    console.log(this.color, board);
    let possibleMoves = [];

    for (let i=0; i < 7; i++) {

    }

    for (let j=0; j < 7; j++) {

    }

    console.log(possibleMoves);
  }
  // Need to check it's not blocked.

}
