const fs = require("fs");

// var edit = data.toString() + "\r\n" + newBody;

/**Returns TRUE if there aren't any other identical numbers in it's row, column or sub-grid
 * else returns FALSE
 *
 * @param row Row index
 * @param col Column index
 * @param num The number that resides in the currently selected bracket
 */
function isSafe(arr, row, col, num) {
  console.log(num);
  for (let columns = 0; columns < 9; columns++) {
    if (arr[row][columns] == num) {
      if (columns !== col) {
        return false;
      }
    }
  }

  for (let rows = 0; rows < 9; rows++) {
    if (arr[rows][col] == num) {
      if (rows !== row) {
        return false;
      }
    }
  }

  let sqrt = Math.sqrt(9); //sqrt=3
  let boxRowStart = row - (row % sqrt);
  let boxColStart = col - (col % sqrt);

  for (let r = boxRowStart; r < boxRowStart + sqrt; r++) {
    for (let d = boxColStart; d < boxColStart + sqrt; d++) {
      if (arr[r][d] == num) {
        if (r !== row || d !== col) {
          return false;
        }
      }
    }
  }
  return true;
}

function copyArray(arr1, arr2) {
  for (let i = 0; i < 9; i++) {
    arr2.push(arr1[i]);
  }
}

function randomize(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randArray(randomArr) {
  let utilArr = [];
  let number;
  for (let i = 0; i < 9; i++) {
    number = randomArr[i];
    utilArr.push(number);
  }

  let i = 0;

  for (let i = 0; i < 9; i++) {
    randomNum = randomize(0, 8 - i);
    randomArr[i] = utilArr[randomNum];
    utilArr.splice(randomNum, 1);
    // console.log("update utilArr: " + utilArr);
  }
  //   console.log(randomArr);
}

function randomStartBoard() {
  let randomRow = randomize(0, 8);
  let randomCol = randomize(0, 8);
  let randomNumber = randomize(1, 9);
  let arrayStart = [];
  for (let i = 0; i < 9; i++) {
    arrayStart.push();
    arrayStart[i] = [];
    for (let j = 0; j < 9; j++) {
      arrayStart[i][j] = 0;
    }
  }
  arrayStart[randomRow][randomCol] = randomNumber;
  console.log(arrayStart);
  console.log(randomRow, randomCol);
  return arrayStart;
}

/**Solves sudoku to full
 * @param arr Board cell array
 * @param n Board.length
 * @param isHint if this function is used for just a HINT. Not a full board solution   */
function genSudoku(arr, n, rndNum) {
  let row = -1;
  let col = -1;
  let isEmpty = true;
  rndNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (arr[i][j] == 0) {
        row = i;
        col = j;
        /*we still have some remaining missing values in Sudoku*/
        isEmpty = false;
        break;
      }
    }
    if (!isEmpty) {
      break;
    }
  }
  /*no empty space left*/
  if (isEmpty) {
    return true;
  }
  /*else for each-row backtrack*/
  //   console.log(rndNum);
  randArray(rndNum);
  //   console.log(rndNum);
  //   rndNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let number = 0; number < n; number++) {
    if (isSafe(arr, row, col, rndNum[number])) {
      arr[row][col] = rndNum[number];
      if (genSudoku(arr, n, rndNum)) {
        return true;
      } else {
        //replace it
        arr[row][col] = 0;
      }
    }
  }
  return false;
}

function arrayToText(someArray) {
  let text = "";
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      text = text + someArray[i][j];
    }
  }
  return text;
}

function isUniqueSudoku(arr, n, rndNum) {}

function temporarySudokuSlimmer(fArray) {
  let rowSud;
  let colSud;

  for (let n = 0; n < 81; n = n + 2) {
    rowSud = Math.floor(n / 9);
    colSud = n % 9;

    fArray[rowSud][colSud] = 0;
    // console.log("rowSud :" + rowSud + " colSud: " + colSud);
  }
  console.log(fArray);
}

function emptyOutSudoku(arr) {
  let row = -1;
  let col = -1;
  let isComplete = true;
  let oldNum;

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (!(arr[i][j] == 0)) {
        row = i;
        col = j;
        oldNum = arr[i][j];
        /*we still have some remaining filled values in Sudoku*/

        isComplete = false;
        break;
      }
    }
    if (!isComplete) {
      break;
    }
  }
  /*no empty space left*/
  if (isComplete) {
    return true;
  }
  /*else for each-row backtrack*/
  //   console.log(rndNum);
  randArray(rndNum);
  //   console.log(rndNum);
  //   rndNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  arr[row][col] = 0;

  for (let number = 0; number < 9; number++) {
    if (isUniqueSudoku(arr, row, col, rndNum[number])) {
      arr[row][col] = rndNum[number];
      if (emptyOutSudoku(arr)) {
        return true;
      } else {
        //replace it
        arr[row][col] = oldNum;
      }
    }
  }
  return false;
}

function generateSudoku(numberOfSudokus) {
  let data;
  let t;
  let edit;
  let data2;
  let t2;
  let edit2;
  for (let i = 0; i < numberOfSudokus; i++) {
    let arrayN = randomStartBoard();
    genSudoku(arrayN, 9, [1, 2]); //need to save to txt
    // emptyOutSudoku(); //need to save to txt
    //newline in txt
    console.log(arrayN);
    t = arrayToText(arrayN);
    console.log(t);
    data = fs.readFileSync("new-sudoku.txt", "utf8");
    // edit = data.toString() + "\r\n" + t;
    // fs.writeFile("new-sudoku.txt", edit, (err) => {});
    console.log(arrayN);
    temporarySudokuSlimmer(arrayN);
    t2 = arrayToText(arrayN);
    // data2 = fs.readFileSync("new-sudoku.txt", "utf8");
    edit2 = data.toString() + "\r\n" + t + "\r\n" + t2;
    fs.writeFile("new-sudoku.txt", edit2, (err) => {});
    console.log(t);
  }
}

// randomStartBoard();
generateSudoku(1);
