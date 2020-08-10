// class CellFactory {
//   static createCell(x, y){
//     return new Cell(x, y);
//   }
// }

// Cells
export default class Cell {
  constructor(x, y, grid) {
    // All cells have an (x, y) coord
    this.x = x;
    this.y = y;

    // Sets are passed BY REFERENCE
    this.grid = grid; // this.grid is POINTING to the grid

    this.adjacentCells = this.getAdjacentCells();
    this.neigbourCount = this.countNeighbours();
  }

  getAdjacentCells() {
    const adjacent = [];

    // Why not hardcode? May change cell shapes late,
    // which would mean different number of adjacent
    const coords = [-1, 0, 1];

    // Create adjacent
    coords.forEach(x => {
      coords.forEach(y => {
        // String? Hashable -> can use in a set
        adjacent.push(`${this.x+x},${this.y+y}`);
      })
    })

    // Remove this cell
    adjacent.splice(4, 1);

    return adjacent;
  }

  countNeighbours() {
    const count = 0;
    this.adjacentCells.forEach(cell => {
      if (cell in this.grid) {
        count++;
      }
    })
    this.neighbours = count;
    return count;
  }
}