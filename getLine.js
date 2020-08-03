let lines = [];
require("fs")
  .readFileSync("new-sudoku.txt", "utf-8")
  .split(/\r?\n/)
  .forEach(function (line) {
    lines.push(line);
  });
console.log(lines[4]);
