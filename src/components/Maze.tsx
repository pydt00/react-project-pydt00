const ROWS = 50;
const COLS = 50;

let grid = Array.from({ length: ROWS }, () => Array(COLS).fill(false));

function getCell(row: number, col: number) {
  return grid[row][col];
}

function setCell(row: number, col: number, value: boolean) {
  grid[row][col] = value;
}

function regenerateMaze() {
    for(let r = 0; r < ROWS; r++) {
        for(let c = 0; c < COLS; c++) {
            setCell(r, c, Math.random() < 0.3);
        }
    }
}

export default function Maze() {
    regenerateMaze();

    return (
        <div style={{ display: "grid", gridTemplateColumns: `repeat(${COLS}, ${1920/COLS}px)` }}>
            {grid.map((row, r) =>
                row.map((isWall, c) => (
                <div key={`${r}-${c}`} style={{ width: 1920/COLS, height: 1920/COLS, backgroundColor: isWall ? '#000' : '#fff'}}/>
                ))
            )}
        </div>
    );
}