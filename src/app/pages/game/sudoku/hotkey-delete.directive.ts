import {
  Directive,
  Renderer2,
  ElementRef,
  OnInit,
  HostListener,
} from "@angular/core";
import { Board } from "./board.service";

@Directive({ selector: "[cellInput]" })
export class CellInputDelete implements OnInit {
  constructor(
    public board: Board,
    public elementRef: ElementRef,
    renderer: Renderer2
  ) {}
  @HostListener("document:keydown.backspace", ["$event"])
  keydownBackspace(event: KeyboardEvent) {
    this.board.decolor_bg();
    this.board.decolor_font();
    this.board.highlightSelect(this.board.sRow, this.board.sCol);
    if (this.board.live[this.board.sRow][this.board.sCol].isPencil) {
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          this.board.live[this.board.sRow][this.board.sCol].pencil[i][j] = null;
        }
      }
    } else {
      this.board.live[this.board.sRow][this.board.sCol].num = null;
    }
  }

  @HostListener("document:keydown.delete", ["$event"])
  keydownDelete(event: KeyboardEvent) {
    this.board.decolor_bg();
    this.board.decolor_font();
    this.board.highlightSelect(this.board.sRow, this.board.sCol);
    if (this.board.live[this.board.sRow][this.board.sCol].isPencil) {
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          this.board.live[this.board.sRow][this.board.sCol].pencil[i][j] = null;
        }
      }
    } else {
      this.board.live[this.board.sRow][this.board.sCol].num = null;
    }
  }

  @HostListener("document:keydown.escape", ["$event"])
  keydownEsc(event: KeyboardEvent) {
    this.board.decolor_bg();
    this.board.decolor_font();
    this.board.highlightSelect(this.board.sRow, this.board.sCol);
    if (this.board.live[this.board.sRow][this.board.sCol].isPencil) {
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          this.board.live[this.board.sRow][this.board.sCol].pencil[i][j] = null;
        }
      }
    } else {
      this.board.live[this.board.sRow][this.board.sCol].num = null;
    }
  }

  ngOnInit() {}
}
