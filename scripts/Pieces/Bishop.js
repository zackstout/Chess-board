
class Bishop extends Piece {
  constructor(x, y, col) {
    super();
    this.color = col;
    this.pos = {
      x: x,
      y: y
    };
  }

  // Ugh please refactor this:
  getMoves() {
    let possibleMoves = [];
    let ind = 8 * this.pos.x + this.pos.y;

    // moving SW:
    const ind1 = ind - 7;
    // 7 because that's the index of extrema:
    let min1 = Math.min(this.pos.x, 7 - this.pos.y); // will we hit the W or S side first?

    // moving SE:
    const ind2 = ind - 9;
    let min2 = Math.min(this.pos.x, this.pos.y);

    // moving NE:
    const ind3 = ind + 7;
    let min3 = Math.min(7 - this.pos.x, this.pos.y); // will we hit the N or E side first?

    // moving NW:
    const ind4 = ind + 9;
    let min4 = Math.min(7 - this.pos.x, 7 - this.pos.y);

    while (min1 > 0) {
      ind -= 7;
      possibleMoves.push(board[ind]);
      min1--;
    }
    ind = 8 * this.pos.x + this.pos.y;
    while (min2 > 0) {
      ind -= 9;
      possibleMoves.push(board[ind]);
      min2--;
    }
    ind = 8 * this.pos.x + this.pos.y;
    while (min3 > 0) {
      ind += 7;
      possibleMoves.push(board[ind]);
      min3--;
    }
    ind = 8 * this.pos.x + this.pos.y;
    while (min4 > 0) {
      ind += 9;
      possibleMoves.push(board[ind]);
      min4--;
    }

    console.log(possibleMoves);
  }



}
