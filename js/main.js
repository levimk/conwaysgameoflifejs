/*
Concepts:
- Environment (grid)
- Cells
- Rules for the cells
- Game speed -> how quickly the turns take place
*/

// Game speed + time
class Timer {}

// Divide the grid into square units
// Rounding -> floor(), leave a bezel
class Grid {}

// Cells
class Cell {
  // All cells have an (x, y) location
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.alive = false;
    this.neighbours = this.getNeighbours();
  }

  isAlive() {
    return this.alive;
  }

  kill() {
    this.alive = false;
  }

  spawn() {
    this.alive = true;
  }

  getNeighbours() {
    const neighbours = [];

    // Why not hardcode? May change cell shapes late,
    // which would mean different number of neighbours
    const coords = [-1, 0, 1];

    // Create neighbours
    coords.forEach(x => {
      coords.forEach(y => {
        neighbours.push([this.x + x, this.y + y]);
      })
    })

    // Remove this cell
    neighbours.splice(4, 1);

    return neighbours;
  }
}