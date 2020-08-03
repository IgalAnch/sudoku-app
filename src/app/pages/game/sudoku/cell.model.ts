export class cell {
  public num: number;
  public bgColor: string;
  public fontColor: string;
  public pencil: number[][];
  public isPencil: boolean;
  public preHoverBgColor: string;

  /**constrcutor for a cell
   *
   * @param num number value of cell
   * @param bgColor Background color of cell
   * @param fontColor Font Color of cell
   */
  constructor(
    num?: number,
    bgColor?: string,
    fontColor?: string,
    pencil?: number[][],
    isPencil?: boolean,
    preHoverBgColor?: string
  ) {
    this.num = num;
    this.bgColor = bgColor;
    this.fontColor = fontColor;
    this.pencil = pencil;
    this.isPencil = isPencil;
    this.preHoverBgColor = preHoverBgColor;
  }
}
