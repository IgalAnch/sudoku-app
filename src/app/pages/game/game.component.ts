import {
  Component,
  OnInit,
  HostListener,
  Input,
  Output,
  ElementRef,
} from "@angular/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { switchMap, repeatWhen } from "rxjs/operators";
import { cell } from "./sudoku/cell.model";
import { UserPreferences } from "../../_user/userPreferences.service";
import { Board } from "./sudoku/board.service";
import { NewGame } from "./right-column/newGame.service";
import { NumberButton } from "./right-column/numberButton.service";
import { stringify } from "querystring";

@Component({
  selector: "app-gamePage",
  templateUrl: "./game.component.html",
  styleUrls: ["./game.component.css"],
  providers: [NewGame, NumberButton],
})
export class GameComponent implements OnInit {
  constructor(
    private http?: HttpClient,
    public userPref?: UserPreferences,
    public board?: Board,
    public newGame?: NewGame,
    public numBtn?: NumberButton
  ) {
    this.toggleSplitBoard();
  }

  ngOnInit(): void {
    this.numbBtnArray();
    this.randArray(this.array); //test
    console.log("array"); //test
    console.log(this.array); //test
  }
  array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  randomize(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  copyArray(arr1: number[], arr2: number[]) {
    for (let i = 0; i < arr1.length; i++) {
      arr2.push(arr1[i]);
    }
  }

  randArray(arr) {
    let utilArr = [];
    this.copyArray(arr, utilArr);
    // console.log("copyArray: " + utilArr);
    let i = 0;
    let randomNum;
    while (!(utilArr.length == 0 || i == 9)) {
      randomNum = this.randomize(0, 8 - i);
      arr[i] = utilArr[randomNum];
      utilArr.splice(randomNum, 1);
      // console.log("update utilArr: " + utilArr);
      i++;
    }
  }

  testLeft = 300;

  cpx = 60;

  printSudoku() {
    console.log(this.board.live);
    console.log(this.board.start);
    console.log(this.board.solved);
    console.log(this.board.copy);
  }

  parseSudoku() {
    let t = "";
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (this.board.live[i][j].num == null) t = t + "0";
        else t = t + this.board.live[i][j].num;
      }
    }
    return t;
  }

  saveSudoku(postSudoku: string) {
    this.http
      .post("http://localhost:3000/a", postSudoku)
      .subscribe((responseData) => {});
  }

  saveSudokuButton() {
    let sudokuToString = this.parseSudoku();
    this.saveSudoku(sudokuToString);
  }

  /**This method is ran on ng-init and is responsible for importing a sudoku board from the
   * sudoku.txt file into a string variable to be used later */
  getFileData() {
    setTimeout(() => {
      console.log(this.board.live);
    }, 1000);
    return this.http
      .get("/assets/read/filePath.json")
      .pipe(
        switchMap((response: any) =>
          this.http.get(response.pathToFile, {
            responseType: "text",
          })
        )
      )
      .subscribe((text) => {
        this.board.stringOf_sudoku_txt = text;
        this.build_cell_array_fromString(
          this.board.live,
          this.board.stringOf_sudoku_txt,
          this.board.start
        );
        this.build_cell_array(this.board.copy);
        this.build_cell_array(this.board.solved);
        this.copyBoardS(this.board.solved, this.board.live);
        this.solveSudoku(this.board.solved, 9);
      });
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
    console.log("haha");
    let n = 0; //string t char index
    let isPresetIncluded = true;
    if (startBoard === undefined) {
      isPresetIncluded = false;
    } else {
      isPresetIncluded = true;
    }
    for (let r = 0; r < 9; r++) {
      liveBoard.push();
      liveBoard[r] = [];
      if (isPresetIncluded) {
        startBoard.push();
        startBoard[r] = [];
      }
      for (let c = 0; c < 9; c++) {
        liveBoard[r][c] = new cell();
        this.initPencilArray(liveBoard[r][c]);
        startBoard[r][c] = new cell();
        if (t.charAt(n + 1) == "0") {
          liveBoard[r][c].num = null; //   -redundant?
          liveBoard[r][c].bgColor = this.userPref.input_bgColor;
          liveBoard[r][c].fontColor = this.userPref.input_fontColor;
          if (isPresetIncluded) {
            startBoard[r][c].num = null; //   -redundant?
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

  /** If cell array included. it'll add the disabled fontColor of the cell inside that array instead of
   * the start array  */
  add_disabled_fontColor_toCell(r: number, c: number, ar?: cell[][]) {
    if (this.board.start[r][c].bgColor == this.userPref.disabledInput_bgColor) {
      if (ar === undefined) {
        this.board.start[r][
          c
        ].fontColor = this.userPref.disabledInput_fontColor;
      } else {
        ar[r][c].fontColor = this.userPref.disabledInput_fontColor;
      }
    } else {
      if (ar === undefined) {
        this.board.start[r][c].fontColor = this.userPref.input_fontColor;
      } else {
        ar[r][c].fontColor = this.userPref.input_fontColor;
      }
    }
  }

  /**re-adds disabled_fontColor to PRESET sudoku array
   * ??@param -OPTIONAL- if a cell array exist here, it'll have disabled_fontColor
   * added to THAT array, instead of the PRESET array  */
  add_disabled_fontColor(ar?: cell[][]) {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (ar === undefined) {
          this.add_disabled_fontColor_toCell(row, col);
        } else {
          this.add_disabled_fontColor_toCell(row, col, ar);
        }
      }
    }
  }

  dupe: boolean = false;
  scanButtonName: string = "scan off"; //  WIP

  splitState = false;
  splitBtnName = "SplitBoard"; //The interpolated string shown on the splitscreen button -> split()

  /**Split OR Unsplit the sudoku board appearance. This Method is used upon clicking the Split button */
  toggleSplitBoard() {
    this.splitState = !this.splitState;
    if (this.splitState) {
      this.splitBtnName = "Unsplit Board";
    } else {
      this.splitBtnName = "Split Board";
    }
  }

  /**Turn on path highlights OR turn off path highlights. This Method is used upon clicking the Highlight button */
  togglePathHighlight() {
    this.userPref.highlightPath_state = !this.userPref.highlightPath_state;
    if (this.userPref.highlightPath_state) {
      this.highlightSelect(this.board.sRow, this.board.sCol);
    } else {
      this.decolor_bg();
    }
    this.userPref.highlightPath_name_setter = 1;
  }

  /**Method to check for duplicate numbers in the same Row, Column or in the same 3x3 family.
   * If one or more duplicates are found, the selected FONT-color will change to Red
   * Each duplicate found will have their index BACKGROUND color changed to Red
   */
  checkDupe(r: number, c: number, errorColorArray?: string[]) {
    let b: boolean = false;
    let subgridRow = this.row_ofSubgrid(r);
    let subgridCol = this.col_ofSubgrid(c);
    let row;
    let col;
    for (let rows = 0; rows < 9; rows++) {
      if (
        this.isDupe(r, c, rows, c) //checks all nums in same column
      ) {
        b = true;
        if (errorColorArray === undefined) {
          this.color_font(rows, c, this.userPref.dupe_fontColor);
        } else {
          this.board.live[rows][c].bgColor =
            errorColorArray[this.board.live[rows][c].num];
        }
      }
    }
    for (let columns = 0; columns < 9; columns++) {
      if (
        this.isDupe(r, c, r, columns) //checks all nums in same row
      ) {
        b = true;
        if (errorColorArray === undefined) {
          this.color_font(r, columns, this.userPref.dupe_fontColor);
        } else {
          this.board.live[r][columns].bgColor =
            errorColorArray[this.board.live[r][columns].num];
        }
      }
    }
    for (let rwp = 0; rwp <= 2; rwp++) {
      for (let clp = 0; clp <= 2; clp++) {
        row = subgridRow + rwp;
        col = subgridCol + clp;
        if (this.isDupe(r, c, row, col)) {
          b = true;
          if (errorColorArray === undefined) {
            this.color_font(row, col, this.userPref.dupe_fontColor);
          } else {
            this.board.live[row][col].bgColor =
              errorColorArray[+this.board.live[row][col].num];
          }
        }
      }
    }
    if (b) {
      this.color_font(r, c, this.userPref.dupe_selected_fontColor);
    } else {
      this.color_font(r, c, this.userPref.input_fontColor);
    }
    return b;
  }

  /**This method is called upon TYPING/INPUTING anything at all
   * @param event The button pressed. Could be back_space as well as any character typed
   * @param row Current Row index of whichever field that had anything typed on
   * @param col Current Column index of whichever field that had anything typed on*/
  onType(event: any, row: number, col: number) {
    if (+event.target.value % 10 <= 9 && +event.target.value % 10 > 0) {
      this.decolor_bg();
      this.decolor_font();
      this.board.live[this.board.sRow][this.board.sCol].num =
        +event.target.value % 10;
      console.log(this.board.live[row][col].pencil);

      if (this.isEmpty(row, col)) {
        this.decolor_bg();
        this.decolor_font();
      }
      console.log(event);
      this.highlightSelect(this.board.sRow, this.board.sCol);
      if (!this.isEmpty(row, col)) {
        this.checkDupe(row, col);
      }

      this.highlightSelect(this.board.sRow, this.board.sCol);
    } else {
      this.board.live[this.board.sRow][this.board.sCol].num = null;
      this.decolor_bg();
      this.decolor_font();
      this.highlightSelect(this.board.sRow, this.board.sCol);
    }
    this.pencil = "";
    this.pencilButtonText = "";
    event.target.value = "";
  }

  onTypePencil(event: any) {
    console.log(+event.target.value);
    if (+event.target.value % 10 <= 9 && +event.target.value % 10 > 0) {
      if (this.board.live[this.board.sRow][this.board.sCol].isPencil) {
        let rPen = Math.floor(((+event.target.value % 10) - 1) / 3);
        let cPen = Math.floor(((+event.target.value % 10) - 1) % 3);
        console.log("rPen=" + rPen);
        console.log("cPen=" + cPen);
        console.log(event.target.value);
        console.log("event value=" + event.target.value);
        console.log(
          "pencil value=" +
            this.board.live[this.board.sRow][this.board.sCol].pencil[rPen][cPen]
        );
        if (
          this.board.live[this.board.sRow][this.board.sCol].pencil[rPen][
            cPen
          ] == null
        ) {
          this.board.live[this.board.sRow][this.board.sCol].pencil[rPen][cPen] =
            +event.target.value % 10;
        } else {
          this.board.live[this.board.sRow][this.board.sCol].pencil[rPen][
            cPen
          ] = null;
        }
      } else {
        this.decolor_bg();
        this.decolor_font();
        this.board.live[this.board.sRow][this.board.sCol].num =
          +event.target.value % 10;
        if (!this.isEmpty(this.board.sRow, this.board.sCol)) {
          this.checkDupe(this.board.sRow, this.board.sCol);
        }
        this.highlightSelect(this.board.sRow, this.board.sCol);
      }
    }
    this.pencil = "";
    this.pencilButtonText = "";
    event.target.value = "";
  }
  pencil = "";
  pencilButtonText = "";

  /**saves current Cow can Column indexes in selectedCell current service vars
   * for future uses */
  slctdCell(r: number, c: number) {
    this.board.sRow = r;
    this.board.sCol = c;
  }

  isCellEmpty(r?: number, c?: number) {
    if (r === undefined) {
      let r = this.board.sRow;
    }
    if (c === undefined) {
      let c = this.board.sCol;
    }
    if (this.board.live[r][c].num == 0 || this.board.live[r][c].num === null) {
      return true;
    } else {
      return false;
    }
  }

  isSlctdEmpty() {
    if (
      this.board.live[this.board.sRow][this.board.sCol].num == 0 ||
      this.board.live[this.board.sRow][this.board.sCol].num === null
    ) {
      return true;
    } else {
      return false;
    }
  }

  /**Restores all cells BG colors to default
   * @param r Row index of current row
   * @param c Column index of current column*/
  decolor_bg(bg?: string) {
    if (bg !== undefined) this.color_live_bg(bg);
    else
      for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
          this.board.live[row][col].bgColor = this.board.start[row][
            col
          ].bgColor;
        }
      }
  }

  color_bg(r: number, c: number, color: string) {
    this.board.live[r][c].bgColor = color;
  }

  /**Colors BG of ALL cells*/
  color_live_bg(color: string) {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        this.board.live[row][col].bgColor = color;
      }
    }
  }

  /**Colors BG of NON-DISABLED cells*/
  color_notDisabled_bg(color: string) {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (
          this.board.start[row][col].num == null ||
          this.board.start[row][col].num == 0
        )
          this.board.live[row][col].bgColor = color;
      }
    }
  }

  /**Restores all cells FONT colors to default
   * @param r Row index of current row
   * @param c Column index of current column*/
  decolor_font() {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        this.board.live[row][col].fontColor = this.board.start[row][
          col
        ].fontColor;
      }
    }
  }

  color_font(r: number, c: number, color: string) {
    this.board.live[r][c].fontColor = color;
  }

  /**Adds FONT color for ALL cells*/
  color_live_font(color: string) {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        this.board.live[row][col].fontColor = color;
      }
    }
  }

  /**Adds FONT color for NON-disabled-cells*/
  color_notDisabled_font(color: string) {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (
          this.board.start[row][col].num == null ||
          this.board.start[row][col].num == 0
        )
          this.board.live[row][col].fontColor = color;
      }
    }
  }

  /**Update colors of preset */
  update_userPref_disabled_colors() {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        this.board.start[row][
          col
        ].bgColor = this.userPref.disabledInput_bgColor;
        this.board.start[row][
          col
        ].fontColor = this.userPref.disabledInput_fontColor;
      }
    }
    this.decolor_bg();
    this.decolor_font();
  }

  /**related to number buttons. on click */
  onClick_numberBtn(number: number) {
    this.board.live[this.board.sRow][this.board.sCol].num = number;
    if (this.isEmpty(this.board.sRow, this.board.sCol)) {
      this.decolor_bg();
    }
    this.checkDupe(this.board.sRow, this.board.sCol);
  }

  /**This method executes upon clicking any input box in the game-board
   * @param r Row index of selected row
   * @param c Column index of selected column*/
  onClick_cell(r: number, c: number) {
    this.slctdCell(r, c);
    console.log("selected row=" + this.board.sRow);
    console.log("selected col=" + this.board.sCol);
    this.decolor_bg();
    this.decolor_font();
    let rwp = 0;
    let clp = 0;
    if (this.userPref.highlightPath_state) {
      this.highlightSelect(r, c);
    }
  }

  row_ofSubgrid(row?: number) {
    if (row === undefined) {
      let row = this.board.sRow;
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
      let row = this.board.sCol;
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
            this.board.start[row][col].bgColor ==
            this.userPref.disabledInput_bgColor
          )
            this.board.live[row][
              col
            ].bgColor = this.userPref.highlightPath_disabled_bgColor;
          else
            this.board.live[row][
              col
            ].bgColor = this.userPref.highlightPath_bgColor;
        }
      }
      for (let columns = 0; columns < 9; columns++) {
        if (
          this.board.start[r][columns].bgColor ==
          this.userPref.disabledInput_bgColor
        ) {
          this.board.live[r][
            columns
          ].bgColor = this.userPref.highlightPath_disabled_bgColor;
        } else
          this.board.live[r][
            columns
          ].bgColor = this.userPref.highlightPath_bgColor;
      }
      for (let rows = 0; rows < 9; rows++) {
        if (
          this.board.start[rows][c].bgColor ==
          this.userPref.disabledInput_bgColor
        ) {
          this.board.live[rows][
            c
          ].bgColor = this.userPref.highlightPath_disabled_bgColor;
        } else
          this.board.live[rows][
            c
          ].bgColor = this.userPref.highlightPath_bgColor;
      }
      this.board.live[this.board.sRow][
        this.board.sCol
      ].bgColor = this.userPref.highlightPath_selected_bgColor;
      this.board.live[this.board.sRow][
        this.board.sCol
      ].preHoverBgColor = this.userPref.highlightPath_selected_bgColor;
    }
  }

  /** Takes two coordinates (x,y) and (x2,y2) on the game board returns true if same
   * @param r Row index
   * @param c Column index
   * @param r2 Row index to compare to
   * @param c2 Column index to compare */
  isDupe(r: number, c: number, r2: number, c2: number) {
    if (
      this.board.live[r][c].num == this.board.live[r2][c2].num &&
      this.board.live[r][c].num !== null &&
      this.board.live[r][c].num !== 0 &&
      (r !== r2 || c !== c2)
    )
      return true;
    else return false;
  }

  /**Marks same numbers that contradict on the board with their own background color
   * as means to check for incorrect as well as differentiate between contradictions
   */
  scanForErrors() {
    let n = 0;
    let c;
    this.decolor_bg();
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        this.checkDupe(i, j, this.userPref.colors);
        if (this.checkDupe(i, j, this.userPref.colors) === true) {
          this.board.live[i][j].bgColor = this.userPref.colors[
            this.board.live[i][j].num
          ];
          n++;
        }
      }
    }
  }

  /** Erase the current selected area
   *
   * Also de-color the board. then re-color it with just highlight path colors
   */
  erase() {
    this.board.live[this.board.sRow][this.board.sCol].num = null;
    this.decolor_bg();
    this.decolor_font();
    this.highlightSelect(this.board.sRow, this.board.sCol);
  }

  /** Aids in disabling input brackets that were meant to be non-changeable
   * input areas such as the starting-board Sudoku brackets that are already
   * occupied by default.
   *
   * in other words this method is responsible so that the user can't write on-top of the cornerstone numbers
   * the sudoku-game started the game with. they cannot be changed
   *   */
  isDisabled(r: number, c: number) {
    if (this.userPref.toggle_boardPresetInputs_isDisabled)
      if (
        this.board.start[r][c].num == null ||
        this.board.start[r][c].num == 0
      ) {
        return false;
      } else {
        return true;
      }
  }

  toggle_boardPresetInputs_isDisabled() {
    this.userPref.toggle_boardPresetInputs_isDisabled = !this.userPref
      .toggle_boardPresetInputs_isDisabled;
  }

  /**Returns TRUE if there aren't any other identical numbers in it's row, column or sub-grid
   * else returns FALSE
   *
   * @param row Row index
   * @param col Column index
   * @param num The number that resides in the currently selected bracket
   */
  isSafe(arr: cell[][], row: number, col: number, num: number) {
    for (let columns = 0; columns < this.board.live.length; columns++) {
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

    let sqrt = Math.sqrt(this.board.live.length); //sqrt=3
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

  setCell(
    row: number,
    column: number,
    number?: number,
    bgColor?: string,
    fontColor?: string
  ) {
    if (!number == undefined) this.board.live[row][column].num = number;
  }

  copyBoard(
    arrayToChange: cell[][],
    arrayToCopy: cell[][],
    isNum?: boolean,
    isBgColor?: boolean,
    isFontColor?: boolean
  ) {
    if (isNum === undefined) {
      let isNum = true;
    }
    if (isBgColor === undefined) {
      let isBgColor = true;
    }
    if (isFontColor === undefined) {
      let isFontColor = true;
    }
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (isNum == true) {
          arrayToChange[row][col].num = arrayToCopy[row][col].num;
        }
        if (isBgColor) {
          arrayToChange[row][col].bgColor = arrayToCopy[row][col].bgColor;
        }
        if (isFontColor) {
          arrayToChange[row][col].fontColor = arrayToCopy[row][col].fontColor;
        }
      }
    }
  }

  copyBoardS(arr: cell[][], arr2: cell[][]) {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        arr[row][col].num = arr2[row][col].num;
        arr[row][col].bgColor = arr2[row][col].bgColor;
        arr[row][col].fontColor = arr2[row][col].fontColor;
      }
    }
  }

  doSomething() {
    this.copyBoardS(this.board.copy, this.board.live);
  }

  resetHint() {
    this.board.hintCol = null;
    this.board.hintRow = null;
    this.board.hintNum = null;
  }

  /**Grants 1 hint on the live game board */
  giveHint() {
    this.doSomething();
    this.solveSudoku(this.board.copy, 9, true);
    console.log(this.board.hintRow);
    console.log(this.board.hintCol);
    console.log(this.board.hintNum);
    this.board.live[this.board.hintRow][
      this.board.hintCol
    ].num = this.board.hintNum;
    this.resetHint();
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
    for (let number = 1; number <= n; number++) {
      if (this.isSafe(arr, row, col, number)) {
        if (isHint) {
          if (this.board.hintRow === null) {
            this.board.hintRow = row;
            this.board.hintCol = col;
            this.board.hintNum = number;
          }
        }
        arr[row][col].num = number;
        if (this.solveSudoku(arr, n)) {
          return true;
        } else {
          if (isHint) {
            if (this.board.hintRow !== null) {
              this.board.hintRow = null;
              this.board.hintCol = null;
              this.board.hintNum = null;
            }
          }
          //replace it
          arr[row][col].num = 0;
        }
      }
    }
    return false;
  }

  /**Solves sudoku to full
   * @param arr Board cell array
   * @param n Board.length
   * @param isHint if this function is used for just a HINT. Not a full board solution   */
  genSudoku(arr: cell[][], n: number, rndNum?: number[]) {
    let row = -1;
    let col = -1;
    let isEmpty = true;
    let i = 0;
    let j = 0;
    while (i < n) {
      while (j < n) {
        if (arr[i][j].num == 0 || arr[i][j].num == null) {
          row = i;
          col = j;
          /*we still have some remaining missing values in Sudoku*/
          isEmpty = false;
          break;
        }
        j++;
      }
      if (!isEmpty) {
        break;
      }
      i++;
    }
    /*no empty space left*/
    if (isEmpty) {
      return true;
    }
    /*else for each-row backtrack*/
    this.randArray(rndNum);
    for (let number = 0; number <= n; number++) {
      if (this.isSafe(arr, row, col, rndNum[number])) {
        arr[row][col].num = number;
        if (this.genSudoku(arr, n, rndNum)) {
          return true;
        } else {
          //replace it
          arr[row][col].num = 0;
        }
      }
    }
    return false;
  }

  classic_colors() {
    this.userPref.highlightPath_bgColor = "white";
    this.userPref.input_bgColor = "rgb(215, 215, 215)"; //slightly lighter- Gray
    this.userPref.disabledInput_fontColor = "black";
    this.userPref.highlightPath_disabled_bgColor = "white";
    this.userPref.highlightPath_selected_bgColor = "white";
    this.userPref.disabledInput_bgColor = "rgb(215, 215, 215)"; //slightly lighter- Gray
    this.userPref.highlightPath_selected_bgColor = "lightgreen";
    this.update_userPref_disabled_colors();
  }

  numbBtnArray() {
    this.numBtn.numberBtnArray();
  }

  showErrors() {
    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        if (this.board.live[r][c].num !== this.board.solved[r][c].num)
          if (this.board.live[r][c].num !== this.board.start[r][c].num) {
            this.board.live[r][c].fontColor = this.userPref.incorrect_fontColor;
          }
      }
    }
  }

  showErrors_btn() {
    this.decolor_bg();
    this.showErrors();
  }

  isEmpty(r: number, c: number) {
    if (this.board.live[r][c].num == null || this.board.live[r][c].num == 0)
      return true;
    else return false;
  }

  styleLeftBorder(col: number) {
    if (col % 3 == 0) {
      return "2.5px solid black";
    } else {
      return "1px solid black";
    }
  }

  styleRightBorder(col: number) {
    if ((col + 1) % 3 == 0) {
      return "2.5px solid black";
    } else {
      return "1px solid black";
    }
  }

  styleTopBorder(row: number) {
    if (row % 3 == 0) {
      return "2.5px solid black";
    } else {
      return "1px solid black";
    }
  }

  styleBottomBorder(row: number) {
    if ((row + 1) % 3 == 0) {
      return "2.5px solid black";
    } else {
      return "1px solid black";
    }
  }

  styleLeftBorderPencil(col: number, colPencil: number) {
    if (colPencil == 0) {
      if (col % 3 == 0) {
        return "2.5px solid black";
      } else return "1px solid black";
    } else {
      return "0px";
    }
  }

  styleRightBorderPencil(col: number, colPencil: number) {
    if (colPencil == 2) {
      if ((col + 1) % 3 == 0) {
        return "2.5px solid black";
      } else return "1px solid black";
    } else {
      return "0px";
    }
  }

  styleTopBorderPencil(row: number, rowPencil: number) {
    if (rowPencil == 0) {
      if (row % 3 == 0) {
        return "2.5px solid black";
      } else {
        return "1px solid black";
      }
    } else {
      return "0px solid black";
    }
  }

  styleBottomBorderPencil(row: number, rowPencil: number) {
    if (rowPencil == 2) {
      if ((row + 1) % 3 == 0) {
        return "2.5px solid black";
      } else {
        return "1px solid black";
      }
    } else {
      return "0px solid black";
    }
  }

  hintSudokuCom() {
    this.board.live[this.board.sRow][this.board.sCol].num = this.board.solved[
      this.board.sRow
    ][this.board.sCol].num;
    for (let rows = 0; rows < 9; rows++) {
      for (let cols = 0; cols < 9; cols++) {
        if (
          this.board.live[this.board.sRow][this.board.sCol].num ==
          this.board.live[rows][cols].num
        )
          this.board.live[rows][
            cols
          ].bgColor = this.userPref.hintSudokuCom_bgColor;
      }
    }
    this.board.live[this.board.sRow][
      this.board.sCol
    ].bgColor = this.userPref.hintSudokuCom_bgColor;
  }

  toggle_isShowDisabledAsBold() {
    this.userPref.isShowDisabledAsBald = !this.userPref.isShowDisabledAsBald;
  }

  initPencilArray(c: cell) {
    for (let i = 0; i < 9; i++) {
      c.pencil.push();
    }
    console.log(c);
  }

  togglePencil() {
    this.board.live[this.board.sRow][this.board.sCol].isPencil = !this.board
      .live[this.board.sRow][this.board.sCol].isPencil;
    this.board.live[this.board.sRow][this.board.sCol].num = null;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        this.board.live[this.board.sRow][this.board.sCol].pencil[i][j] = null;
      }
    }
  }

  testPencil() {
    this.board.live[0][0].pencil[0][1] = 6;
    setTimeout(() => (this.togglePencil(), 0));
    setTimeout(() => (this.togglePencil(), 0));
  }

  mouseOver(ro, co) {
    this.board.live[ro][co].preHoverBgColor = this.board.live[ro][co].bgColor;
    this.board.live[ro][
      co
    ].bgColor = this.userPref.highlightPath_selected_bgColor;
  }

  mouseLeave(ro, co) {
    this.board.live[ro][co].bgColor = this.board.live[ro][co].preHoverBgColor;
  }

  deleteInput(event: any, ro: number, co: number) {
    console.log(event.key);
    if ((event.key = "Backspace")) {
      this.board.live[ro][co].num = null;
    }
    if ((event.key = "Delete")) {
      this.board.live[ro][co].num = null;
    }
  }
}
