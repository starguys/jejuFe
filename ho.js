const countIslands = function (grid) {
  // dfs solution
  const hi = grid.length;
  const wid = hi && grid[0].length;
  let count = 0;

  for (let row = 0; row < hi; row++) {
    for (let col = 0; col < wid; col++) {
      if (grid[row][col] === "0") continue;
      count++;
      searchIsland(row, col);
    }
  }

  function searchIsland(row, col) {
    if (row < 0 || col < 0 || row >= hi || col >= wid) return;
    if (grid[row][col] === "0") return;

    grid[row][col] = "0";
    searchIsland(row - 1, col);
    searchIsland(row + 1, col);
    searchIsland(row, col - 1);
    searchIsland(row, col + 1);
  }

  return count;
};
