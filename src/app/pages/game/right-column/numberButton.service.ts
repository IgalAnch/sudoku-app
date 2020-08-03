export class NumberButton {
  numberBtn: number[] = [];

  numberBtnArray() {
    for (let i = 0; i < 9; i++) {
      this.numberBtn.push(i + 1);
    }
  }
}
