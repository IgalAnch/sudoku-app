function randomize(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let lines = [];
require("fs")
  .readFileSync("new-sudoku.txt", "utf-8")
  .split(/\r?\n/)
  .forEach(function (line) {
    lines.push(line);
  });

function randomSudoku() {
  let lines = [];
  require("fs")
    .readFileSync("new-sudoku.txt", "utf-8")
    .split(/\r?\n/)
    .forEach(function (line) {
      lines.push(line);
    });
  let randomNum = randomize(1, lines.length - 1);
  let text = lines[randomNum];
  console.log(text);
  return text;
}

randomSudoku();
