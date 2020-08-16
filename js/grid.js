const SIZE = 100;
const gridCanvas = document.getElementById('grid');
// console.log(gridCanvas.attributes);
const ctx = gridCanvas.getContext("2d");

const GRAY = "#D3D3D3";
const WHITE = "#FFFFFF";
const GREEN = "#228B22";


const WIDTH = Math.floor(gridCanvas.attributes.width.value);
const HEIGHT = Math.floor(gridCanvas.attributes.height.value);

const SCALAR = 10;

const N_HORI = Math.floor(gridCanvas.attributes.width.value / SCALAR);
const N_VERT = Math.floor(gridCanvas.attributes.height.value / SCALAR);

console.log(N_HORI, N_VERT)

function initGridData(height, width) {
  const grid = [];
  var row;
  for (var i=0; i<height; i++) {
    row = [];
    for (var j=0; j<width; j++){
      row.push(0);
    }
    grid.push(row);
  };
  return grid;
}

const gridData = initGridData(N_HORI, N_VERT);

function getFill(colored, row, col) {
  if (colored) return GREEN;
  const oddRow = row % 2;
  const oddCol = col % 2;
  if ((oddRow && oddCol) || (!oddRow && !oddCol)) return GRAY;
  return WHITE;
}

function drawGrid(gridData) {
  for (var i=0; i<N_HORI; i++) {
    for (var j=0; j<N_VERT; j++) {
      ctx.beginPath();
      ctx.fillStyle = getFill(gridData[i][j], i, j);
      ctx.fillRect(j*SCALAR, i*SCALAR, SCALAR**2,SCALAR**2);
      ctx.closePath();
    }
  }
}

drawGrid(gridData);

function toggleCell(x, y) {
  gridData[y][x] = gridData[y][x] ? 0 : 1;
}

var x, y;
grid.addEventListener('click', e => {
  const rect = e.target.getBoundingClientRect();
  x = e.clientX - Math.ceil(rect.left); //x position within the element.
  y = e.clientY - Math.ceil(rect.top);  //y position within the element.
  x = Math.ceil(x / SCALAR) - 1;
  y = Math.ceil(y / SCALAR) - 1;
  toggleCell(x, y);
  console.log(x, y, gridData[y][x]);
  drawGrid(gridData)
})

const playButton = document.querySelector('button#play');
playButton.addEventListener('click', e => {
  drawGrid(gridData);
})