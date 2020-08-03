import { Board } from "../app/pages/game/sudoku/board.service";
import { cell } from "../app/pages/game/sudoku/cell.model";
import { GameComponent } from "../app/pages/game/game.component";
import { NgModule } from "@angular/core";

@NgModule({
  providers: [],
})
export class Test {
  constructor(private board: Board) {}

  array() {
    let ar: string[][] = new Array();
    let arr: string[][] = [];
    let obj: cell[][] = [];
    for (let i = 0; i < 3; i++) {
      ar.push();
      ar[i] = null;

      arr.push();
      arr[i] = null;

      //arr[i].push();
      //for (let j = 0; j < 3; j++) {}
      obj.push();
      obj[i] = null;
    }
    ar[2] = [];
    ar[2][0] = "3";
    //
    arr[1] = [];
    arr[1][0] = "5";
    //
    obj[2] = [];
    obj[2][0] = new cell();
    obj[2][0].bgColor = "2";
    //obj[2][0] = 5;

    console.log("--------------- Array Test ----------------");
    console.log(arr);
    console.log(ar);
    console.log(obj);
  }

  boards() {
    console.log("--------live--------");
    console.log(this.board.live);

    console.log("--------preset--------");
    console.log(this.board.start);
  }

  sudokuTxt(b?: boolean) {
    if (b === undefined) return "";
    else if (b) return this.board.stringOf_sudoku_txt;
    else return "";
  }
}
