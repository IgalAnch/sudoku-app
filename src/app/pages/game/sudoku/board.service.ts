import { cell } from "./cell.model";
import { HttpClient } from "@angular/common/http";
import { switchMap } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { UserPreferences } from "../../../_user/userPreferences.service";

@Injectable()
export class Board {
  constructor(public http: HttpClient, public userPref: UserPreferences) {
    console.log(this.live);
  }
  devModeOn = false;

  /**live game board*/
  live: cell[][] = [];

  /**static beginning board*/
  start: cell[][] = [];

  /**copy aid board for hints */
  copy: cell[][] = [];

  /**solved board(to aid performance)*/
  solved: cell[][] = [];

  sRow = 0; //selectedRow. dynamically stored Selected Row index
  sCol = 0; //selectedColumn dynamically stored Column index

  hintNum = null;
  hintCol = null;
  hintRow = null;

  /** saves board as a String from sudoku.txt*/ stringOf_sudoku_txt =
    "sudoku.txt";

  /**Stores all the numbers of end-result board. Pre-determined for now.
   *
   * --due-to-change */
  fBoard: number[][] = [
    //final Board
    [9, 5, 7, 6, 1, 3, 2, 8, 4],
    [4, 8, 3, 2, 5, 7, 1, 9, 6],
    [6, 1, 2, 8, 4, 9, 5, 3, 7],
    [1, 7, 8, 3, 6, 4, 9, 5, 2],
    [5, 2, 4, 9, 7, 1, 3, 6, 8],
    [3, 6, 9, 5, 2, 8, 7, 4, 1],
    [8, 4, 5, 7, 9, 2, 6, 1, 3],
    [2, 9, 1, 4, 3, 6, 8, 7, 5],
    [7, 3, 6, 1, 8, 5, 4, 2, 9],
  ];

  /**This method is ran on ng-init and is responsible for importing a sudoku board from the
   * sudoku.txt file into a string variable to be used later */
  getFileData() {
    setTimeout(() => {
      console.log(this.live);
    }, 1000);
    return this.http
      .get("/assets/read/filePath2.json")
      .pipe(
        switchMap((response: any) =>
          this.http.get(response.pathToFile, {
            responseType: "text",
          })
        )
      )
      .subscribe((text) => {
        this.stringOf_sudoku_txt = text;
        this.build_cell_array_fromString2(
          this.live,
          this.stringOf_sudoku_txt,
          this.start
        );
        this.build_cell_array(this.copy);
        this.build_cell_array(this.solved);
        this.copyBoardS(this.solved, this.live);
        this.solveSudoku(this.solved, 9);
      });
  }

  fetchSudoku() {
    this.http
      .post("http://localhost:3000/fetchSudoku", 1)
      .subscribe((responseData) => {});
  }

  /**Defines a declared empty cell array into a 9x9 cell array
   * @param board empty declared cell array
   */
  build_cell_array(board: cell[][]) {
    for (let r = 0; r < 9; r++) {
      board.push();
      board[r] = [];
      for (let c = 0; c < 9; c++) {
        board[r][c] = new cell();
      }
    }
  }

  copyBoardS(arr: cell[][], arr2: cell[][]) {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        arr[row][col].num = arr2[row][col].num;
        arr[row][col].bgColor = arr2[row][col].bgColor;
        arr[row][col].fontColor = arr2[row][col].fontColor;
        //console.log(row, col);
        //console.log(arr[row][col].num);
        //console.log(arr[row][col].bgColor);
        //console.log(arr[row][col].fontColor);
      }
    }
  }

  /**Solves sudoku to full
   * @param arr Board cell array
   * @param n Board.length
   * @param isHint if this function is used for just a HINT. Not a full board solution   */
  solveSudoku(arr: cell[][], n: number, isHint?: boolean) {
    if (isHint === undefined) {
      isHint = false;
    }
    let row = -1;
    let col = -1;
    let isEmpty = true;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (arr[i][j].num == 0 || arr[i][j].num == null) {
          row = i;
          col = j;

          //we still have some remaining
          //missing values in Sudoku
          isEmpty = false;
          break;
        }
      }
      if (!isEmpty) {
        break;
      }
    }

    //no empty space left
    if (isEmpty) {
      return true;
    }

    //else for each-row backtrack
    for (let number = 1; number <= n; number++) {
      if (this.isSafe(arr, row, col, number)) {
        if (isHint) {
          if (this.hintRow === null) {
            this.hintRow = row;
            this.hintCol = col;
            this.hintNum = number;
          }
        }
        arr[row][col].num = number;
        if (this.solveSudoku(arr, n)) {
          //print(board, n);
          return true;
        } else {
          if (isHint) {
            if (this.hintRow !== null) {
              this.hintRow = null;
              this.hintCol = null;
              this.hintNum = null;
            }
          }
          //replace it
          arr[row][col].num = 0;
        }
      }
    }
    return false;
  }

  /**Returns TRUE if there aren't any other identical numbers in it's row, column or sub-grid
   * else returns FALSE
   *
   * @param row Row index
   * @param col Column index
   * @param num The number that resides in the currently selected bracket
   */
  isSafe(arr: cell[][], row: number, col: number, num: number) {
    for (let columns = 0; columns < this.live.length; columns++) {
      if (arr[row][columns].num == num) {
        if (columns !== col) {
          return false;
        }
      }
    }

    for (let rows = 0; rows < arr.length; rows++) {
      if (arr[rows][col].num == num) {
        if (rows !== row) {
          return false;
        }
      }
    }

    let sqrt = Math.sqrt(this.live.length); //sqrt=3
    let boxRowStart = row - (row % sqrt);
    let boxColStart = col - (col % sqrt);

    for (let r = boxRowStart; r < boxRowStart + sqrt; r++) {
      for (let d = boxColStart; d < boxColStart + sqrt; d++) {
        if (arr[r][d].num == num) {
          if (r !== row || d !== col) {
            return false;
          }
        }
      }
    }
    return true;
  }

  /**builds a sudoku board(s) from a string var of sudoku numbers
   * and an empty cell array(s)
   * @param liveBoard cell array for LIVE board
   * @param t imported string from txt file
   * @param startBoard -?optional- cell array for PRESET board
   */
  build_cell_array_fromString(
    liveBoard: cell[][],
    t: string,
    startBoard?: cell[][]
  ) {
    let n = 0; //string t char index
    let isPresetIncluded = true;
    if (startBoard === undefined) {
      isPresetIncluded = false;
    } else {
      isPresetIncluded = true;
    }
    for (let r = 0; r < 9; r++) {
      //row
      liveBoard.push();
      liveBoard[r] = [];
      if (isPresetIncluded) {
        startBoard.push();
        startBoard[r] = [];
      }
      for (let c = 0; c < 9; c++) {
        //column
        liveBoard[r][c] = new cell();
        this.initPencilArray(liveBoard[r][c]);
        startBoard[r][c] = new cell();
        if (t.charAt(n + 1) == "0") {
          liveBoard[r][c].num = null; //   *-redundant?
          liveBoard[r][c].bgColor = this.userPref.input_bgColor;
          liveBoard[r][c].fontColor = this.userPref.input_fontColor;
          if (isPresetIncluded) {
            startBoard[r][c].num = null; //   *-redundant?
            startBoard[r][c].bgColor = this.userPref.input_bgColor;
            startBoard[r][c].fontColor = this.userPref.input_fontColor;
          }
        } else {
          liveBoard[r][c].num = +t.charAt(n + 1);
          liveBoard[r][c].bgColor = this.userPref.disabledInput_bgColor;
          liveBoard[r][c].fontColor = this.userPref.disabledInput_fontColor;
          if (isPresetIncluded) {
            startBoard[r][c].num = +t.charAt(n + 1);
            startBoard[r][c].bgColor = this.userPref.disabledInput_bgColor;
            startBoard[r][c].fontColor = this.userPref.disabledInput_fontColor;
          }
        }
        n = n + 2;
      }
      n = n + 4;
    }
    console.log("--------live--------");
    console.log(liveBoard);

    console.log("--------start--------");
    console.log(startBoard);
  }

  /**builds a sudoku board(s) from a string var of sudoku numbers
   * and an empty cell array(s)
   * @param liveBoard cell array for LIVE board
   * @param t imported string from txt file
   * @param startBoard -?optional- cell array for PRESET board
   */
  build_cell_array_fromString2(
    liveBoard: cell[][],
    t: string,
    startBoard?: cell[][]
  ) {
    let n = 0; //string t char index
    let isPresetIncluded = true;
    if (startBoard === undefined) {
      isPresetIncluded = false;
    } else {
      isPresetIncluded = true;
    }
    for (let r = 0; r < 9; r++) {
      //row
      liveBoard.push();
      liveBoard[r] = [];
      if (isPresetIncluded) {
        startBoard.push();
        startBoard[r] = [];
      }
      for (let c = 0; c < 9; c++) {
        //column
        liveBoard[r][c] = new cell();
        this.initPencilArray(liveBoard[r][c]);
        startBoard[r][c] = new cell();
        if (t.charAt(n) == "0") {
          liveBoard[r][c].num = null; //   *-redundant?
          liveBoard[r][c].bgColor = this.userPref.input_bgColor;
          liveBoard[r][c].fontColor = this.userPref.input_fontColor;
          if (isPresetIncluded) {
            startBoard[r][c].num = null; //   *-redundant?
            startBoard[r][c].bgColor = this.userPref.input_bgColor;
            startBoard[r][c].fontColor = this.userPref.input_fontColor;
          }
        } else {
          liveBoard[r][c].num = +t.charAt(n);
          liveBoard[r][c].bgColor = this.userPref.disabledInput_bgColor;
          liveBoard[r][c].fontColor = this.userPref.disabledInput_fontColor;
          if (isPresetIncluded) {
            startBoard[r][c].num = +t.charAt(n);
            startBoard[r][c].bgColor = this.userPref.disabledInput_bgColor;
            startBoard[r][c].fontColor = this.userPref.disabledInput_fontColor;
          }
        }
        n++;
      }
    }
    console.log("--------live--------");
    console.log(liveBoard);

    console.log("--------start--------");
    console.log(startBoard);
  }

  initPencilArray(c: cell) {
    c.isPencil = false;
    c.pencil = [];
    for (let i = 0; i < 3; i++) {
      c.pencil.push([]);
      // c.pencil[i] = [];
      for (let j = 0; j < 3; j++) {
        c.pencil[i].push(null);
      }
    }
  }

  classic_colors(b?: boolean) {
    // if ((b = undefined)) {
    //   let b = true;
    // }
    if (b == true) {
      this.userPref.highlightPath_bgColor = "white";
      this.userPref.input_bgColor = "rgb(215, 215, 215)"; //slightly lighter- Gray
      this.userPref.disabledInput_fontColor = "black";
      this.userPref.highlightPath_disabled_bgColor = "white";
      this.userPref.highlightPath_selected_bgColor = "white";
      this.userPref.disabledInput_bgColor = "rgb(215, 215, 215)"; //slightly lighter- Gray
      this.userPref.highlightPath_selected_bgColor = "lightgreen";
    }
    // if ((b = true)) {
    //   this.update_userPref_disabled_colors();
    // }
  }

  /**Update colors of preset */
  update_userPref_disabled_colors() {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        this.start[row][col].bgColor = this.userPref.disabledInput_bgColor;
        this.start[row][col].fontColor = this.userPref.disabledInput_fontColor;
      }
    }
    this.decolor_bg();
    this.decolor_font();
  }

  /**Restores all cells BG colors to default
   * @param r Row index of current row
   * @param c Column index of current column*/
  decolor_bg(bg?: string) {
    if (bg !== undefined) this.color_live_bg(bg);
    else
      for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
          this.live[row][col].bgColor = this.start[row][col].bgColor;
        }
      }
  }

  /**Colors BG of ALL cells*/
  color_live_bg(color: string) {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        this.live[row][col].bgColor = color;
      }
    }
  }

  /**Restores all cells FONT colors to default
   * @param r Row index of current row
   * @param c Column index of current column*/
  decolor_font() {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        this.live[row][col].fontColor = this.start[row][col].fontColor;
      }
    }
  }

  togglePencil() {
    this.live[this.sRow][this.sCol].isPencil = !this.live[this.sRow][this.sCol]
      .isPencil;
    this.live[this.sRow][this.sCol].num = null;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        this.live[this.sRow][this.sCol].pencil[i][j] = null;
      }
    }
  }

  row_ofSubgrid(row?: number) {
    if (row === undefined) {
      let row = this.sRow;
    }
    if (row < 3) {
      return 0;
    }
    if (row >= 3 && row < 6) {
      return 3;
    }
    if (row > 5) {
      return 6;
    }
  }

  col_ofSubgrid(col?: number) {
    if (col === undefined) {
      let row = this.sCol;
    }
    if (col < 3) {
      return 0;
    }
    if (col >= 3 && col < 6) {
      return 3;
    }
    if (col > 5) {
      return 6;
    }
  }

  /** Highlights the row, column and family of the selected bracket for player clarity
   * @param r row
   * @param c column */
  highlightSelect(r: number, c: number) {
    if (this.userPref.highlightPath_state) {
      let rowSubGrid = this.row_ofSubgrid(r);
      let colSubGrid = this.col_ofSubgrid(c);
      let row;
      let col;
      for (let rwp = 0; rwp <= 2; rwp++) {
        for (let clp = 0; clp <= 2; clp++) {
          row = rowSubGrid + rwp;
          col = colSubGrid + clp;
          if (
            this.start[row][col].bgColor == this.userPref.disabledInput_bgColor
          )
            this.live[row][
              col
            ].bgColor = this.userPref.highlightPath_disabled_bgColor;
          else
            this.live[row][col].bgColor = this.userPref.highlightPath_bgColor;
        }
      }
      for (let columns = 0; columns < 9; columns++) {
        if (
          this.start[r][columns].bgColor == this.userPref.disabledInput_bgColor
        ) {
          this.live[r][
            columns
          ].bgColor = this.userPref.highlightPath_disabled_bgColor;
        } else
          this.live[r][columns].bgColor = this.userPref.highlightPath_bgColor;
      }
      for (let rows = 0; rows < 9; rows++) {
        if (
          this.start[rows][c].bgColor == this.userPref.disabledInput_bgColor
        ) {
          this.live[rows][
            c
          ].bgColor = this.userPref.highlightPath_disabled_bgColor;
        } else this.live[rows][c].bgColor = this.userPref.highlightPath_bgColor;
      }
      this.live[this.sRow][
        this.sCol
      ].bgColor = this.userPref.highlightPath_selected_bgColor;
      this.live[this.sRow][
        this.sCol
      ].preHoverBgColor = this.userPref.highlightPath_selected_bgColor;
    }
  }
}
