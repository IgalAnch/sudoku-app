import { Board } from "../sudoku/board.service";
import { NgModule } from "@angular/core";

@NgModule({
  providers: [],
})
export class NewGame {
  constructor(public board: Board) {}

  /**Restarts the board*/
  resetGame() {
    //this.board.live = Object.assign({}, this.board.start);
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        this.board.live[i][j].num = this.board.start[i][j].num;
        this.board.live[i][j].fontColor = this.board.start[i][j].fontColor;
        this.board.live[i][j].bgColor = this.board.start[i][j].bgColor;
      }
    }
  }
}
