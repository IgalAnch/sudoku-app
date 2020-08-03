import {
  Component,
  Injectable,
  HostListener,
  ViewChild,
  AfterViewInit,
} from "@angular/core";
import { GameComponent } from "./pages/game/game.component";
import { Board } from "./pages/game/sudoku/board.service";
import { HttpClientModule } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  constructor(public board: Board, public http: HttpClientModule) {}
  @HostListener("window:mouseup", ["$event"])
  onMouseUp(event) {
    console.log(event);
  }

  @ViewChild(GameComponent) gameComp;

  ngOnInit(): void {
    this.board.getFileData();
    this.board.classic_colors(true);
    setTimeout(() => (console.log(this.board.live), 1000));

    this.board.build_cell_array_fromString2(
      this.board.solved,
      this.board.stringOf_sudoku_txt,
      this.board.copy
    );
    this.board.solveSudoku(this.board.solved, 9);
  }

  title = "sudoku-app";

  loadedFeature = "SudokuV1";

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
  testLeft = 300;
}
