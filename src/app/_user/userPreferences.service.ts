export class UserPreferences {
  //constructor(public sudoku: SudokuComponent) {}
  //disabled input colors

  /**toggle disabled for testing */ toggle_boardPresetInputs_isDisabled = true;
  /**classic colors? */ classic_colors = false;

  highlightPath_state = true; //isHighlightPath -> isHighlight()

  highlightPath_name: string =
    "Turn highlight " + (this.highlightPath_state ? "Off" : "On"); //Interpolated string that's being shown on the button for highlgiht paths

  set highlightPath_name_setter(b) {
    this.highlightPath_name =
      "Turn highlight " + (this.highlightPath_state ? "Off" : "On") + " ";
  }

  /**Default Bg-color: Grey */ disabledInput_bgColor = "grey";
  /**Default Font-color: Ivory*/ disabledInput_fontColor = "ivory";

  //----------------------------------------input colors
  /**Default Bg-color: White */ input_bgColor = "white";
  /**Default Font-color: Black */ input_fontColor = "black";

  //------------------------------------highlight path colors
  /**Default BG-color: Lightblue */ highlightPath_bgColor = "lightblue";
  /**Default Font-color: -Black- */ highlightPath_fontColor = "";

  /**Default BG-color: Yellow */ highlightPath_selected_bgColor = "yellow";
  /**Default Font-color: -Black- */ highlightPath_selected_fontColor = "";

  /**Default BG-color: Cadetblue */ highlightPath_disabled_bgColor =
    "cadetblue";
  /**Default Font-color: -Black- */ highlightPath_disabled_fontColor = "";

  //--------------------------------------Duplicate colors
  /**Default Bg-color: Red */ dupe_bgColor = "red";
  /**Default Font-color: -Black- */ dupe_fontColor = "red";

  /**Default Bg-Color: -Black- */ dupe_selected_bgColor = "";
  /**Default Font-color: Red */ dupe_selected_fontColor = "black";

  /**Default ShowErrors() Font-color: yellow */ incorrect_fontColor =
    "orangered";

  hintSudokuCom_bgColor = "lightyellow";

  isShowDisabledAsBald = true;

  /**scanForDupes() background colors for each different number.1~9*/
  colors: string[] = [
    "orange",
    "teal", //1
    "purple", //2
    "pink", //3
    "blue", //4
    "yellow", //5
    "lightyellow", //6
    "green", //7
    "pink", //8
    "brown", //9
  ];
}
