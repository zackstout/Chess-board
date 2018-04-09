
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
    
  }



// chillin
}
