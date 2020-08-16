// import Cell from './Cell';
/*
Concepts:
- Environment (grid)
- Cells
- Rules for the cells
- Game speed -> how quickly the turns take place
*/

function loadScript(url, callback) {
  var script = document.createElement('script');
  script.type = "text/javascript";
  script.onLoad = callback;
  script.src = url;
  document
    .getElementsByTagName("head")[0]
    .appendChild(script);
}

// Game speed + time


// Divide the grid into square units
// Rounding -> floor(), leave a bezel
// class Grid {
//   constructor() {
//     this.cells = new Set();
//   }

//   addCell(x, y) {
//     this.cells.add(`${x},${y}`);
//   }

//   killCell(x, y) {
//     this.cells.delete(`${x},${y}`);
//   }

//   isCellSolitary(cell) {
//     return cell.neigbourCount <= 1;
//   }

//   isCellCrowded(cell) {
//     return cell.neigbourCount >= 4;
//   }

//   surviveOrKill(x, y) {
//     const cell = new Cell(x, y, this.cells);

//     const crowded = this.isCellCrowded(cell);
//     const solitary = this.isCellSolitary(cell);

//     if (crowded || solitary) {
//       this.killCell(cell);
//     }
//   }

//   cull() {
//     this.cells.forEach(cellStr => {
//       const [x, y] = cellStr.split(',')
//         .map(n => Number.parseInt(n));
//       this.surviveOrKill(x, y);
//     })
//   }
// }

