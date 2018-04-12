
class Bishop extends Piece {
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
    const ind = 8 * this.pos.x + this.pos.y;
    // console.log(ind);

    // this is a strange idea but i'll run with it:
    // Yeah this is a bit more complicated than we thought:
    // Need to check if it's on the edge. And need to add *each* cell on the diagonal, until we're beyond the grid.
    // That's not even taking into account blocking. But maybe that won't be too hard in the end.

    // One idea is that we don't have to use the flattened 64-array: we could use the nested 8-arrays and use our coordinate system to find patterns as well.
    // for (let i=0; i < 64; i++) {
    //   if (i == ind - 7 || i == ind - 9 || i == ind + 7 || i == ind + 9) {
    //     possibleMoves.push(board[i]);
    //   }
    // }

    let ind1 = ind - 7;
    let ind2 = ind + 7;
    let ind3 = ind - 9;
    let ind4 = ind + 9;

    while (ind1 > 0) {
      possibleMoves.push(board[ind1]);
      ind1 -= 7;
    }
    while (ind2 < 64) {
      possibleMoves.push(board[ind2]);
      ind2 += 7;
    }
    while (ind3 > 0) {
      possibleMoves.push(board[ind3]);
      ind3 -= 9;
    }
    while (ind4 < 64) {
      possibleMoves.push(board[ind4]);
      ind4 += 9;
    }
    console.log(possibleMoves);
  }



}
