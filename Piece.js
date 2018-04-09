
class Piece {
  constructor(color) {
    this.color = color;
  }

  // Type will be a string like 'P', 'K', 'Q', etc:
  drawPiece(type) {
    colorMode(HSB);
    if (this.color === 'W') {
      // blue:
      fill(255, 204, 100);
    } else {
      // red:
      fill(0, 210, 200); // Weird is it like the opposite of rgb?
    }
    // Add spacing to center text in the cell:
    text(type, this.pos.x * width/8 + width/16, this.pos.y * height/8 + height/16);
  }
}
