
class Cell {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.piece = null;
    // this.active = false;
  }



  // White means same parity, black means different parity:
  draw() {
    const same_parity = this.x % 2 === this.y % 2;
    const color = same_parity ? 200 : 100;
    fill(color);
    rect(this.x * width/8, this.y * height/8, width/8, height/8);

    // Ensure that text color is opposite of cell color:
    const other_color = same_parity ? 100 : 200;
    fill(other_color);
    // Outputting text to make sure we know what's going on:
    text(`${this.x}, ${this.y}`, this.x * width/8, this.y * height/8 + height/8);
  }

  // Ok, just need a way to deactivate -- that's why i wanted the boolean:
  activate() {
    fill(100, 200, 0);
    rect(this.x * width/8, this.y * height/8, width/8, height/8);
  }

  valid_cells() {
    fill(200, 100, 0);
    rect(this.x * width/8, this.y * height/8, width/8, height/8);

    console.log('hi valid');
  }
}
