import {
  Directive,
  Renderer2,
  ElementRef,
  OnInit,
  HostListener,
} from "@angular/core";
import { Board } from "./sudoku/board.service";

@Directive({ selector: "[cellInput]" })
export class HotkeyDirective implements OnInit {
  constructor(
    public board: Board,
    public elementRef: ElementRef,
    renderer: Renderer2
  ) {}

  @HostListener("document:keydown.d", ["$event"])
  keydownDev(event: KeyboardEvent) {
    this.board.devModeOn = !this.board.devModeOn;
  }
  6;
  @HostListener("document:keydown.n", ["$event"])
  keydownNote(event: KeyboardEvent) {
    this.board.togglePencil();
  }

  // @HostListener("document:keydown.1", ["$event"])
  // keypress1(event: KeyboardEvent) {
  //   this.board.live[this.board.sRow][this.board.sCol].num = 1;
  // }
  // @HostListener("document:keydown.2", ["$event"])
  // keypress2(event: KeyboardEvent) {
  //   this.board.live[this.board.sRow][this.board.sCol].num = 2;
  // }
  // @HostListener("document:keydown.3", ["$event"])
  // keypress3(event: KeyboardEvent) {
  //   this.board.live[this.board.sRow][this.board.sCol].num = 3;
  // }
  // @HostListener("document:keydown.4", ["$event"])
  // keypress4(event: KeyboardEvent) {
  //   this.board.live[this.board.sRow][this.board.sCol].num = 4;
  // }
  // @HostListener("document:keydown.5", ["$event"])
  // keypress5(event: KeyboardEvent) {
  //   this.board.live[this.board.sRow][this.board.sCol].num = 5;
  // }
  // @HostListener("document:keydown.6", ["$event"])
  // keypress6(event: KeyboardEvent) {
  //   this.board.live[this.board.sRow][this.board.sCol].num = 6;
  // }
  // @HostListener("document:keydown.7", ["$event"])
  // keypress7(event: KeyboardEvent) {
  //   this.board.live[this.board.sRow][this.board.sCol].num = 7;
  // }
  // @HostListener("document:keydown.8", ["$event"])
  // keypress8(event: KeyboardEvent) {
  //   this.board.live[this.board.sRow][this.board.sCol].num = 8;
  // }
  // @HostListener("document:keydown.9", ["$event"])
  // keypress9(event: KeyboardEvent) {
  //   this.board.live[this.board.sRow][this.board.sCol].num = 9;
  // }

  ngOnInit() {}
}
