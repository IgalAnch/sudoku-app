function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/_user/userPreferences.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/_user/userPreferences.service.ts ***!
    \**************************************************/

  /*! exports provided: UserPreferences */

  /***/
  function srcApp_userUserPreferencesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserPreferences", function () {
      return UserPreferences;
    });

    var UserPreferences =
    /*#__PURE__*/
    function () {
      function UserPreferences() {
        _classCallCheck(this, UserPreferences);

        //constructor(public sudoku: SudokuComponent) {}
        //disabled input colors

        /**toggle disabled for testing */
        this.toggle_boardPresetInputs_isDisabled = true;
        /**classic colors? */

        this.classic_colors = false;
        this.highlightPath_state = true; //isHighlightPath -> isHighlight()

        this.highlightPath_name = "Turn highlight " + (this.highlightPath_state ? "Off" : "On"); //Interpolated string that's being shown on the button for highlgiht paths

        /**Default Bg-color: Grey */

        this.disabledInput_bgColor = "grey";
        /**Default Font-color: Ivory*/

        this.disabledInput_fontColor = "ivory"; //----------------------------------------input colors

        /**Default Bg-color: White */

        this.input_bgColor = "white";
        /**Default Font-color: Black */

        this.input_fontColor = "black"; //------------------------------------highlight path colors

        /**Default BG-color: Lightblue */

        this.highlightPath_bgColor = "lightblue";
        /**Default Font-color: -Black- */

        this.highlightPath_fontColor = "";
        /**Default BG-color: Yellow */

        this.highlightPath_selected_bgColor = "yellow";
        /**Default Font-color: -Black- */

        this.highlightPath_selected_fontColor = "";
        /**Default BG-color: Cadetblue */

        this.highlightPath_disabled_bgColor = "cadetblue";
        /**Default Font-color: -Black- */

        this.highlightPath_disabled_fontColor = ""; //--------------------------------------Duplicate colors

        /**Default Bg-color: Red */

        this.dupe_bgColor = "red";
        /**Default Font-color: -Black- */

        this.dupe_fontColor = "red";
        /**Default Bg-Color: -Black- */

        this.dupe_selected_bgColor = "";
        /**Default Font-color: Red */

        this.dupe_selected_fontColor = "black";
        /**Default ShowErrors() Font-color: yellow */

        this.incorrect_fontColor = "orangered";
        this.hintSudokuCom_bgColor = "lightyellow";
        this.isShowDisabledAsBald = true;
        /**scanForDupes() background colors for each different number.1~9*/

        this.colors = ["orange", "teal", "purple", "pink", "blue", "yellow", "lightyellow", "green", "pink", "brown"];
      }

      _createClass(UserPreferences, [{
        key: "highlightPath_name_setter",
        set: function set(b) {
          this.highlightPath_name = "Turn highlight " + (this.highlightPath_state ? "Off" : "On") + " ";
        }
      }]);

      return UserPreferences;
    }();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _pages_game_game_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./pages/game/game.component */
    "./src/app/pages/game/game.component.ts");
    /* harmony import */


    var _pages_game_sudoku_board_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./pages/game/sudoku/board.service */
    "./src/app/pages/game/sudoku/board.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _pages_leaderboards_leaderboards_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pages/leaderboards/leaderboards.component */
    "./src/app/pages/leaderboards/leaderboards.component.ts");

    function AppComponent_app_gamePage_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-gamePage");
      }
    }

    function AppComponent_app_leaderboards_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-leaderboards");
      }
    }

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(board, http) {
        _classCallCheck(this, AppComponent);

        this.board = board;
        this.http = http;
        this.title = "sudoku-app";
        this.loadedFeature = "SudokuV1";
        this.testLeft = 300;
      }

      _createClass(AppComponent, [{
        key: "onMouseUp",
        value: function onMouseUp(event) {
          console.log(event);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.board.getFileData();
          this.board.classic_colors(true);
          setTimeout(function () {
            return console.log(_this.board.live), 1000;
          });
          this.board.build_cell_array_fromString2(this.board.solved, this.board.stringOf_sudoku_txt, this.board.copy);
          this.board.solveSudoku(this.board.solved, 9);
        }
      }, {
        key: "onNavigate",
        value: function onNavigate(feature) {
          this.loadedFeature = feature;
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_pages_game_sudoku_board_service__WEBPACK_IMPORTED_MODULE_2__["Board"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      viewQuery: function AppComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_pages_game_game_component__WEBPACK_IMPORTED_MODULE_1__["GameComponent"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.gameComp = _t.first);
        }
      },
      hostBindings: function AppComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseup", function AppComponent_mouseup_HostBindingHandler($event) {
            return ctx.onMouseUp($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      decls: 3,
      vars: 2,
      consts: [[3, "featureSelected"], [4, "ngIf"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("featureSelected", function AppComponent_Template_app_header_featureSelected_0_listener($event) {
            return ctx.onNavigate($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_app_gamePage_1_Template, 1, 0, "app-gamePage", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_app_leaderboards_2_Template, 1, 0, "app-leaderboards", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadedFeature === "SudokuV1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadedFeature !== "SudokuV1");
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _pages_game_game_component__WEBPACK_IMPORTED_MODULE_1__["GameComponent"], _pages_leaderboards_leaderboards_component__WEBPACK_IMPORTED_MODULE_6__["Leaderboards"]],
      styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\r\n  overflow-x: hidden;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n\r\napp-sudoku[_ngcontent-%COMP%] {\r\n  padding: 0px;\r\n  margin: 0px;\r\n}\r\n\r\napp-header[_ngcontent-%COMP%] {\r\n  padding: 0px;\r\n  margin: 0px;\r\n}\r\n\r\n@media only screen and (max-width: 700px) {\r\n  app-header[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBQ0E7RUFDRTtJQUNFLGFBQWE7RUFDZjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sLFxyXG5ib2R5IHtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuYXBwLXN1ZG9rdSB7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG5hcHAtaGVhZGVyIHtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gIGFwcC1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-root",
          templateUrl: "./app.component.html",
          styleUrls: ["./app.component.css"]
        }]
      }], function () {
        return [{
          type: _pages_game_sudoku_board_service__WEBPACK_IMPORTED_MODULE_2__["Board"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
        }];
      }, {
        onMouseUp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ["window:mouseup", ["$event"]]
        }],
        gameComp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_pages_game_game_component__WEBPACK_IMPORTED_MODULE_1__["GameComponent"]]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _pages_game_game_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/game/game.component */
    "./src/app/pages/game/game.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _user_userPreferences_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./_user/userPreferences.service */
    "./src/app/_user/userPreferences.service.ts");
    /* harmony import */


    var _pages_game_sudoku_board_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pages/game/sudoku/board.service */
    "./src/app/pages/game/sudoku/board.service.ts");
    /* harmony import */


    var _pages_leaderboards_leaderboards_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./pages/leaderboards/leaderboards.component */
    "./src/app/pages/leaderboards/leaderboards.component.ts");
    /* harmony import */


    var _pages_game_sudoku_hotkey_delete_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./pages/game/sudoku/hotkey-delete.directive */
    "./src/app/pages/game/sudoku/hotkey-delete.directive.ts");
    /* harmony import */


    var _pages_game_hotkey_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./pages/game/hotkey.directive */
    "./src/app/pages/game/hotkey.directive.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_user_userPreferences_service__WEBPACK_IMPORTED_MODULE_8__["UserPreferences"], _pages_game_sudoku_board_service__WEBPACK_IMPORTED_MODULE_9__["Board"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _pages_game_game_component__WEBPACK_IMPORTED_MODULE_5__["GameComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _pages_leaderboards_leaderboards_component__WEBPACK_IMPORTED_MODULE_10__["Leaderboards"], _pages_game_sudoku_hotkey_delete_directive__WEBPACK_IMPORTED_MODULE_11__["CellInputDelete"], _pages_game_hotkey_directive__WEBPACK_IMPORTED_MODULE_12__["HotkeyDirective"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _pages_game_game_component__WEBPACK_IMPORTED_MODULE_5__["GameComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _pages_leaderboards_leaderboards_component__WEBPACK_IMPORTED_MODULE_10__["Leaderboards"], _pages_game_sudoku_hotkey_delete_directive__WEBPACK_IMPORTED_MODULE_11__["CellInputDelete"], _pages_game_hotkey_directive__WEBPACK_IMPORTED_MODULE_12__["HotkeyDirective"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]],
          providers: [_user_userPreferences_service__WEBPACK_IMPORTED_MODULE_8__["UserPreferences"], _pages_game_sudoku_board_service__WEBPACK_IMPORTED_MODULE_9__["Board"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);

        this.featureSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(HeaderComponent, [{
        key: "onSelect",
        value: function onSelect(feature) {
          this.featureSelected.emit(feature);
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      outputs: {
        featureSelected: "featureSelected"
      },
      decls: 35,
      vars: 8,
      consts: [[1, "navbar", "navbar-default", 2, "min-height", "0px", "margin-bottom", "25px"], [1, "container-fluid"], [1, "col-xs-1"], [1, "navbar-header"], ["href", "#", 1, "navbar-brand", 2, "font-weight", "bold"], [2, "color", "blue", "font-weight", "bold", "font-size", "20px"], [1, "collapse", "navbar-collapse"], [2, "font-family", "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',\n            sans-serif", "font-weight", "bold", "font-size", "18px"], [1, "nav", "navbar-nav"], ["href", "#", 3, "click"], ["href", "#"], [1, "nav", "navbar-nav", "navbar-right"], [1, "dropdown"], ["href", "#", "role", "button", 1, "dropdown-toggle", 2, "font-size", "15px"], ["src", "assets/langs/engUs.PNG", "alt", "", 1, "img-responsive", 2, "max-height", "10px", "float", "left", "margin-right", "4px", "margin-top", "5px"], [1, "caret"], [1, "dropdown-menu"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "SudokuApp");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_14_listener() {
            return ctx.onSelect("SudokuV1");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Game");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_17_listener() {
            return ctx.onSelect("SudokuV2");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Leaderboards");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Tips");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ul", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " English ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ul", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Sa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Fe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", "black");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", "dodgerblue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", "dodgerblue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", "dodgerblue");
        }
      },
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-header",
          templateUrl: "./header.component.html"
        }]
      }], null, {
        featureSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/game/game.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/pages/game/game.component.ts ***!
    \**********************************************/

  /*! exports provided: GameComponent */

  /***/
  function srcAppPagesGameGameComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameComponent", function () {
      return GameComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _sudoku_cell_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./sudoku/cell.model */
    "./src/app/pages/game/sudoku/cell.model.ts");
    /* harmony import */


    var _right_column_newGame_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./right-column/newGame.service */
    "./src/app/pages/game/right-column/newGame.service.ts");
    /* harmony import */


    var _right_column_numberButton_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./right-column/numberButton.service */
    "./src/app/pages/game/right-column/numberButton.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _user_userPreferences_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../_user/userPreferences.service */
    "./src/app/_user/userPreferences.service.ts");
    /* harmony import */


    var _sudoku_board_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./sudoku/board.service */
    "./src/app/pages/game/sudoku/board.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _sudoku_hotkey_delete_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./sudoku/hotkey-delete.directive */
    "./src/app/pages/game/sudoku/hotkey-delete.directive.ts");
    /* harmony import */


    var _hotkey_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./hotkey.directive */
    "./src/app/pages/game/hotkey.directive.ts");

    function GameComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "test aid");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameComponent_div_2_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.scanForErrors();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameComponent_div_2_Template_button_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.togglePathHighlight();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameComponent_div_2_Template_button_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.toggleSplitBoard();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameComponent_div_2_Template_button_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.solveSudoku(ctx_r8.board.live, 9);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Solve ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameComponent_div_2_Template_button_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.classic_colors();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Classic colors");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameComponent_div_2_Template_button_click_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.toggle_boardPresetInputs_isDisabled();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " toggle disabled ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameComponent_div_2_Template_button_click_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r11.toggle_isShowDisabledAsBold();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " unbold/bold readonly ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameComponent_div_2_Template_button_click_18_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.saveSudokuButton();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " save sudoku ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameComponent_div_2_Template_button_click_20_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.printSudoku();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " print sudoku ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameComponent_div_2_Template_button_click_22_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r14.parseSudoku();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " parse sudoku ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameComponent_div_2_Template_button_click_24_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r15.board.fetchSudoku();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " fetch new sudoku ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.scanButtonName, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.userPref.highlightPath_name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.splitBtnName, " ");
      }
    }

    function GameComponent_div_5_a_1_textarea_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "textarea", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function GameComponent_div_5_a_1_textarea_3_Template_textarea_input_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r23.onTypePencil($event);
        })("ngModelChange", function GameComponent_div_5_a_1_textarea_3_Template_textarea_ngModelChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r25.pencil = $event;
        })("click", function GameComponent_div_5_a_1_textarea_3_Template_textarea_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var co_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ro_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r26.onClick_cell(ro_r17, co_r20);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var co_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

        var ro_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

        var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("left", co_r20 * ctx_r21.cpx + "px")("top", ro_r17 * ctx_r21.cpx + "px")("background", ctx_r21.board.live[ro_r17][co_r20].bgColor, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"])("border-left", ctx_r21.styleLeftBorder(co_r20))("border-right", ctx_r21.styleRightBorder(co_r20))("border-top", ctx_r21.styleTopBorder(ro_r17))("border-bottom", ctx_r21.styleBottomBorder(ro_r17))("width", ctx_r21.cpx + "px")("height", ctx_r21.cpx + "px");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r21.pencil);
      }
    }

    function GameComponent_div_5_a_1_a_4_a_1_input_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function GameComponent_div_5_a_1_a_4_a_1_input_1_Template_input_keypress_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

          var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);

          return ctx_r37.onTypePencil($event);
        })("ngModelChange", function GameComponent_div_5_a_1_a_4_a_1_input_1_Template_input_ngModelChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

          var penCol_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var penRow_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var co_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ro_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r39.board.live[ro_r17][co_r20].pencil[penRow_r32][penCol_r35] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var penCol_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

        var penRow_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

        var co_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

        var ro_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

        var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("left", co_r20 * ctx_r36.cpx + penCol_r35 * ctx_r36.cpx / 3 + "px")("top", ro_r17 * ctx_r36.cpx + penRow_r32 * ctx_r36.cpx / 3 + "px")("width", ctx_r36.cpx / 3 + "px")("height", ctx_r36.cpx / 3 + "px")("border-width", "0px")("font-size", "13px")("background", ctx_r36.board.live[ro_r17][co_r20].bgColor, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"])("border-left", ctx_r36.styleLeftBorderPencil(co_r20, penCol_r35))("border-right", ctx_r36.styleRightBorderPencil(co_r20, penCol_r35))("border-top", ctx_r36.styleTopBorderPencil(ro_r17, penRow_r32))("border-bottom", ctx_r36.styleBottomBorderPencil(ro_r17, penRow_r32));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate4"]("id", "pencilCell ", penRow_r32, ", ", penCol_r35, " of cell ", ro_r17, ", ", co_r20, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r36.board.live[ro_r17][co_r20].pencil[penRow_r32][penCol_r35]);
      }
    }

    function GameComponent_div_5_a_1_a_4_a_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GameComponent_div_5_a_1_a_4_a_1_input_1_Template, 1, 27, "input", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var co_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;

        var ro_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

        var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r33.board.live[ro_r17][co_r20].isPencil ? true : false);
      }
    }

    function GameComponent_div_5_a_1_a_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GameComponent_div_5_a_1_a_4_a_1_Template, 2, 1, "a", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var co_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

        var ro_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

        var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r22.board.live[ro_r17][co_r20].pencil);
      }
    }

    function GameComponent_div_5_a_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "textarea", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function GameComponent_div_5_a_1_Template_textarea_mouseover_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54);

          var co_r20 = ctx.index;

          var ro_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r52.mouseOver(ro_r17, co_r20);
        })("mouseleave", function GameComponent_div_5_a_1_Template_textarea_mouseleave_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54);

          var co_r20 = ctx.index;

          var ro_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r55.mouseLeave(ro_r17, co_r20);
        })("input", function GameComponent_div_5_a_1_Template_textarea_input_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54);

          var co_r20 = ctx.index;

          var ro_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r57.onType($event, ro_r17, co_r20);
        })("click", function GameComponent_div_5_a_1_Template_textarea_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54);

          var co_r20 = ctx.index;

          var ro_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r59.onClick_cell(ro_r17, co_r20);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function GameComponent_div_5_a_1_Template_input_mouseover_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54);

          var co_r20 = ctx.index;

          var ro_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r61.mouseOver(ro_r17, co_r20);
        })("mouseleave", function GameComponent_div_5_a_1_Template_input_mouseleave_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54);

          var co_r20 = ctx.index;

          var ro_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r63.mouseLeave(ro_r17, co_r20);
        })("input", function GameComponent_div_5_a_1_Template_input_input_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54);

          var co_r20 = ctx.index;

          var ro_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r65.onType($event, ro_r17, co_r20);
        })("click", function GameComponent_div_5_a_1_Template_input_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54);

          var co_r20 = ctx.index;

          var ro_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r67.onClick_cell(ro_r17, co_r20);
        })("ngModelChange", function GameComponent_div_5_a_1_Template_input_ngModelChange_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54);

          var co_r20 = ctx.index;

          var ro_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r69.board.live[ro_r17][co_r20].num = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GameComponent_div_5_a_1_textarea_3_Template, 2, 19, "textarea", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GameComponent_div_5_a_1_a_4_Template, 2, 1, "a", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var co_r20 = ctx.index;

        var ro_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

        var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx_r18.board.live[ro_r17][co_r20].bgColor, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"])("color", ctx_r18.board.live[ro_r17][co_r20].fontColor)("left", co_r20 * ctx_r18.cpx + "px")("top", ro_r17 * ctx_r18.cpx + "px")("border-width", "1px")("width", ctx_r18.cpx + "px")("height", ctx_r18.cpx + "px")("border-left", ctx_r18.styleLeftBorder(co_r20))("border-right", ctx_r18.styleRightBorder(co_r20))("border-top", ctx_r18.styleTopBorder(ro_r17))("border-bottom", ctx_r18.styleBottomBorder(ro_r17))("font-size", ctx_r18.cpx / 2 + "px")("font-weight", ctx_r18.board.start[ro_r17][co_r20].num != null && ctx_r18.userPref.isShowDisabledAsBald ? "bold" : "normal");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r18.isDisabled(ro_r17, co_r20));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx_r18.board.live[ro_r17][co_r20].bgColor, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"])("color", ctx_r18.board.live[ro_r17][co_r20].fontColor)("left", co_r20 * ctx_r18.cpx + "px")("top", ro_r17 * ctx_r18.cpx + "px")("padding", "0px")("border-width", "1px")("width", ctx_r18.cpx + "px")("height", ctx_r18.cpx + "px")("border-left", ctx_r18.styleLeftBorder(co_r20))("border-right", ctx_r18.styleRightBorder(co_r20))("border-top", ctx_r18.styleTopBorder(ro_r17))("border-bottom", ctx_r18.styleBottomBorder(ro_r17))("border-radius", "0px")("font-size", ctx_r18.cpx / 2 + "px")("font-weight", ctx_r18.board.start[ro_r17][co_r20].num != null && ctx_r18.userPref.isShowDisabledAsBald ? "bold" : "normal");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("id", "cell ", ro_r17, ", ", co_r20, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r18.isDisabled(ro_r17, co_r20))("ngModel", ctx_r18.board.live[ro_r17][co_r20].num);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.board.live[ro_r17][co_r20].isPencil ? true : false);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r18.board.live[ro_r17][co_r20].pencil);
      }
    }

    function GameComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GameComponent_div_5_a_1_Template, 5, 63, "a", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.board.live);
      }
    }

    function GameComponent_div_10_button_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameComponent_div_10_button_1_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r79);

          var y_r76 = ctx.index;

          var x_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r77.onClick_numberBtn(y_r76 + x_r73 * 3 + 1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var y_r76 = ctx.index;

        var x_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("border", "1px solid gray")("height", "85px")("width", "85px")("font-size", "30px")("hover", "lightgray");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", y_r76 + x_r73 * 3 + 1, " ");
      }
    }

    function GameComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GameComponent_div_10_button_1_Template, 2, 11, "button", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", " ".repeat(3).split(""));
      }
    }

    function GameComponent_div_33_button_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameComponent_div_33_button_1_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r88);

          var y_r85 = ctx.index;

          var x_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r86.onClick_numberBtn(y_r85 + x_r82 * 3 + 1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var y_r85 = ctx.index;

        var x_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("border", "1px solid gray")("height", "75px")("width", "75px")("font-size", "31px")("hover", "lightgray")("font-family", "Sans-serif");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", y_r85 + x_r82 * 3 + 1, " ");
      }
    }

    function GameComponent_div_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GameComponent_div_33_button_1_Template, 2, 13, "button", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", " ".repeat(3).split(""));
      }
    }

    var GameComponent =
    /*#__PURE__*/
    function () {
      function GameComponent(http, userPref, board, newGame, numBtn) {
        _classCallCheck(this, GameComponent);

        this.http = http;
        this.userPref = userPref;
        this.board = board;
        this.newGame = newGame;
        this.numBtn = numBtn;
        this.array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.testLeft = 300;
        this.cpx = 60;
        this.dupe = false;
        this.scanButtonName = "scan off"; //  WIP

        this.splitState = false;
        this.splitBtnName = "SplitBoard"; //The interpolated string shown on the splitscreen button -> split()

        this.pencil = "";
        this.pencilButtonText = "";
        this.toggleSplitBoard();
      }

      _createClass(GameComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.numbBtnArray();
          this.randArray(this.array); //test

          console.log("array"); //test

          console.log(this.array); //test
        }
      }, {
        key: "randomize",
        value: function randomize(min, max) {
          return Math.floor(Math.random() * (max - min + 1) + min);
        }
      }, {
        key: "copyArray",
        value: function copyArray(arr1, arr2) {
          for (var i = 0; i < arr1.length; i++) {
            arr2.push(arr1[i]);
          }
        }
      }, {
        key: "randArray",
        value: function randArray(arr) {
          var utilArr = [];
          this.copyArray(arr, utilArr); // console.log("copyArray: " + utilArr);

          var i = 0;
          var randomNum;

          while (!(utilArr.length == 0 || i == 9)) {
            randomNum = this.randomize(0, 8 - i);
            arr[i] = utilArr[randomNum];
            utilArr.splice(randomNum, 1); // console.log("update utilArr: " + utilArr);

            i++;
          }
        }
      }, {
        key: "printSudoku",
        value: function printSudoku() {
          console.log(this.board.live);
          console.log(this.board.start);
          console.log(this.board.solved);
          console.log(this.board.copy);
        }
      }, {
        key: "parseSudoku",
        value: function parseSudoku() {
          var t = "";

          for (var i = 0; i < 9; i++) {
            for (var j = 0; j < 9; j++) {
              if (this.board.live[i][j].num == null) t = t + "0";else t = t + this.board.live[i][j].num;
            }
          }

          return t;
        }
      }, {
        key: "saveSudoku",
        value: function saveSudoku(postSudoku) {
          this.http.post("http://localhost:3000/a", postSudoku).subscribe(function (responseData) {});
        }
      }, {
        key: "saveSudokuButton",
        value: function saveSudokuButton() {
          var sudokuToString = this.parseSudoku();
          this.saveSudoku(sudokuToString);
        }
        /**This method is ran on ng-init and is responsible for importing a sudoku board from the
         * sudoku.txt file into a string variable to be used later */

      }, {
        key: "getFileData",
        value: function getFileData() {
          var _this2 = this;

          setTimeout(function () {
            console.log(_this2.board.live);
          }, 1000);
          return this.http.get("/assets/read/filePath.json").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (response) {
            return _this2.http.get(response.pathToFile, {
              responseType: "text"
            });
          })).subscribe(function (text) {
            _this2.board.stringOf_sudoku_txt = text;

            _this2.build_cell_array_fromString(_this2.board.live, _this2.board.stringOf_sudoku_txt, _this2.board.start);

            _this2.build_cell_array(_this2.board.copy);

            _this2.build_cell_array(_this2.board.solved);

            _this2.copyBoardS(_this2.board.solved, _this2.board.live);

            _this2.solveSudoku(_this2.board.solved, 9);
          });
        }
        /**Defines a declared empty cell array into a 9x9 cell array
         * @param board empty declared cell array
         */

      }, {
        key: "build_cell_array",
        value: function build_cell_array(board) {
          for (var r = 0; r < 9; r++) {
            board.push();
            board[r] = [];

            for (var c = 0; c < 9; c++) {
              board[r][c] = new _sudoku_cell_model__WEBPACK_IMPORTED_MODULE_2__["cell"]();
            }
          }
        }
        /**builds a sudoku board(s) from a string var of sudoku numbers
         * and an empty cell array(s)
         * @param liveBoard cell array for LIVE board
         * @param t imported string from txt file
         * @param startBoard -?optional- cell array for PRESET board
         */

      }, {
        key: "build_cell_array_fromString",
        value: function build_cell_array_fromString(liveBoard, t, startBoard) {
          console.log("haha");
          var n = 0; //string t char index

          var isPresetIncluded = true;

          if (startBoard === undefined) {
            isPresetIncluded = false;
          } else {
            isPresetIncluded = true;
          }

          for (var r = 0; r < 9; r++) {
            liveBoard.push();
            liveBoard[r] = [];

            if (isPresetIncluded) {
              startBoard.push();
              startBoard[r] = [];
            }

            for (var c = 0; c < 9; c++) {
              liveBoard[r][c] = new _sudoku_cell_model__WEBPACK_IMPORTED_MODULE_2__["cell"]();
              this.initPencilArray(liveBoard[r][c]);
              startBoard[r][c] = new _sudoku_cell_model__WEBPACK_IMPORTED_MODULE_2__["cell"]();

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

      }, {
        key: "add_disabled_fontColor_toCell",
        value: function add_disabled_fontColor_toCell(r, c, ar) {
          if (this.board.start[r][c].bgColor == this.userPref.disabledInput_bgColor) {
            if (ar === undefined) {
              this.board.start[r][c].fontColor = this.userPref.disabledInput_fontColor;
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

      }, {
        key: "add_disabled_fontColor",
        value: function add_disabled_fontColor(ar) {
          for (var row = 0; row < 9; row++) {
            for (var col = 0; col < 9; col++) {
              if (ar === undefined) {
                this.add_disabled_fontColor_toCell(row, col);
              } else {
                this.add_disabled_fontColor_toCell(row, col, ar);
              }
            }
          }
        }
        /**Split OR Unsplit the sudoku board appearance. This Method is used upon clicking the Split button */

      }, {
        key: "toggleSplitBoard",
        value: function toggleSplitBoard() {
          this.splitState = !this.splitState;

          if (this.splitState) {
            this.splitBtnName = "Unsplit Board";
          } else {
            this.splitBtnName = "Split Board";
          }
        }
        /**Turn on path highlights OR turn off path highlights. This Method is used upon clicking the Highlight button */

      }, {
        key: "togglePathHighlight",
        value: function togglePathHighlight() {
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

      }, {
        key: "checkDupe",
        value: function checkDupe(r, c, errorColorArray) {
          var b = false;
          var subgridRow = this.row_ofSubgrid(r);
          var subgridCol = this.col_ofSubgrid(c);
          var row;
          var col;

          for (var rows = 0; rows < 9; rows++) {
            if (this.isDupe(r, c, rows, c) //checks all nums in same column
            ) {
                b = true;

                if (errorColorArray === undefined) {
                  this.color_font(rows, c, this.userPref.dupe_fontColor);
                } else {
                  this.board.live[rows][c].bgColor = errorColorArray[this.board.live[rows][c].num];
                }
              }
          }

          for (var columns = 0; columns < 9; columns++) {
            if (this.isDupe(r, c, r, columns) //checks all nums in same row
            ) {
                b = true;

                if (errorColorArray === undefined) {
                  this.color_font(r, columns, this.userPref.dupe_fontColor);
                } else {
                  this.board.live[r][columns].bgColor = errorColorArray[this.board.live[r][columns].num];
                }
              }
          }

          for (var rwp = 0; rwp <= 2; rwp++) {
            for (var clp = 0; clp <= 2; clp++) {
              row = subgridRow + rwp;
              col = subgridCol + clp;

              if (this.isDupe(r, c, row, col)) {
                b = true;

                if (errorColorArray === undefined) {
                  this.color_font(row, col, this.userPref.dupe_fontColor);
                } else {
                  this.board.live[row][col].bgColor = errorColorArray[+this.board.live[row][col].num];
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

      }, {
        key: "onType",
        value: function onType(event, row, col) {
          if (+event.target.value % 10 <= 9 && +event.target.value % 10 > 0) {
            this.decolor_bg();
            this.decolor_font();
            this.board.live[this.board.sRow][this.board.sCol].num = +event.target.value % 10;
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
      }, {
        key: "onTypePencil",
        value: function onTypePencil(event) {
          console.log(+event.target.value);

          if (+event.target.value % 10 <= 9 && +event.target.value % 10 > 0) {
            if (this.board.live[this.board.sRow][this.board.sCol].isPencil) {
              var rPen = Math.floor((+event.target.value % 10 - 1) / 3);
              var cPen = Math.floor((+event.target.value % 10 - 1) % 3);
              console.log("rPen=" + rPen);
              console.log("cPen=" + cPen);
              console.log(event.target.value);
              console.log("event value=" + event.target.value);
              console.log("pencil value=" + this.board.live[this.board.sRow][this.board.sCol].pencil[rPen][cPen]);

              if (this.board.live[this.board.sRow][this.board.sCol].pencil[rPen][cPen] == null) {
                this.board.live[this.board.sRow][this.board.sCol].pencil[rPen][cPen] = +event.target.value % 10;
              } else {
                this.board.live[this.board.sRow][this.board.sCol].pencil[rPen][cPen] = null;
              }
            } else {
              this.decolor_bg();
              this.decolor_font();
              this.board.live[this.board.sRow][this.board.sCol].num = +event.target.value % 10;

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
        /**saves current Cow can Column indexes in selectedCell current service vars
         * for future uses */

      }, {
        key: "slctdCell",
        value: function slctdCell(r, c) {
          this.board.sRow = r;
          this.board.sCol = c;
        }
      }, {
        key: "isCellEmpty",
        value: function isCellEmpty(r, c) {
          if (r === undefined) {
            var _r = this.board.sRow;
          }

          if (c === undefined) {
            var _c = this.board.sCol;
          }

          if (this.board.live[r][c].num == 0 || this.board.live[r][c].num === null) {
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "isSlctdEmpty",
        value: function isSlctdEmpty() {
          if (this.board.live[this.board.sRow][this.board.sCol].num == 0 || this.board.live[this.board.sRow][this.board.sCol].num === null) {
            return true;
          } else {
            return false;
          }
        }
        /**Restores all cells BG colors to default
         * @param r Row index of current row
         * @param c Column index of current column*/

      }, {
        key: "decolor_bg",
        value: function decolor_bg(bg) {
          if (bg !== undefined) this.color_live_bg(bg);else for (var row = 0; row < 9; row++) {
            for (var col = 0; col < 9; col++) {
              this.board.live[row][col].bgColor = this.board.start[row][col].bgColor;
            }
          }
        }
      }, {
        key: "color_bg",
        value: function color_bg(r, c, color) {
          this.board.live[r][c].bgColor = color;
        }
        /**Colors BG of ALL cells*/

      }, {
        key: "color_live_bg",
        value: function color_live_bg(color) {
          for (var row = 0; row < 9; row++) {
            for (var col = 0; col < 9; col++) {
              this.board.live[row][col].bgColor = color;
            }
          }
        }
        /**Colors BG of NON-DISABLED cells*/

      }, {
        key: "color_notDisabled_bg",
        value: function color_notDisabled_bg(color) {
          for (var row = 0; row < 9; row++) {
            for (var col = 0; col < 9; col++) {
              if (this.board.start[row][col].num == null || this.board.start[row][col].num == 0) this.board.live[row][col].bgColor = color;
            }
          }
        }
        /**Restores all cells FONT colors to default
         * @param r Row index of current row
         * @param c Column index of current column*/

      }, {
        key: "decolor_font",
        value: function decolor_font() {
          for (var row = 0; row < 9; row++) {
            for (var col = 0; col < 9; col++) {
              this.board.live[row][col].fontColor = this.board.start[row][col].fontColor;
            }
          }
        }
      }, {
        key: "color_font",
        value: function color_font(r, c, color) {
          this.board.live[r][c].fontColor = color;
        }
        /**Adds FONT color for ALL cells*/

      }, {
        key: "color_live_font",
        value: function color_live_font(color) {
          for (var row = 0; row < 9; row++) {
            for (var col = 0; col < 9; col++) {
              this.board.live[row][col].fontColor = color;
            }
          }
        }
        /**Adds FONT color for NON-disabled-cells*/

      }, {
        key: "color_notDisabled_font",
        value: function color_notDisabled_font(color) {
          for (var row = 0; row < 9; row++) {
            for (var col = 0; col < 9; col++) {
              if (this.board.start[row][col].num == null || this.board.start[row][col].num == 0) this.board.live[row][col].fontColor = color;
            }
          }
        }
        /**Update colors of preset */

      }, {
        key: "update_userPref_disabled_colors",
        value: function update_userPref_disabled_colors() {
          for (var row = 0; row < 9; row++) {
            for (var col = 0; col < 9; col++) {
              this.board.start[row][col].bgColor = this.userPref.disabledInput_bgColor;
              this.board.start[row][col].fontColor = this.userPref.disabledInput_fontColor;
            }
          }

          this.decolor_bg();
          this.decolor_font();
        }
        /**related to number buttons. on click */

      }, {
        key: "onClick_numberBtn",
        value: function onClick_numberBtn(number) {
          this.board.live[this.board.sRow][this.board.sCol].num = number;

          if (this.isEmpty(this.board.sRow, this.board.sCol)) {
            this.decolor_bg();
          }

          this.checkDupe(this.board.sRow, this.board.sCol);
        }
        /**This method executes upon clicking any input box in the game-board
         * @param r Row index of selected row
         * @param c Column index of selected column*/

      }, {
        key: "onClick_cell",
        value: function onClick_cell(r, c) {
          this.slctdCell(r, c);
          console.log("selected row=" + this.board.sRow);
          console.log("selected col=" + this.board.sCol);
          this.decolor_bg();
          this.decolor_font();
          var rwp = 0;
          var clp = 0;

          if (this.userPref.highlightPath_state) {
            this.highlightSelect(r, c);
          }
        }
      }, {
        key: "row_ofSubgrid",
        value: function row_ofSubgrid(row) {
          if (row === undefined) {
            var _row = this.board.sRow;
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
      }, {
        key: "col_ofSubgrid",
        value: function col_ofSubgrid(col) {
          if (col === undefined) {
            var row = this.board.sCol;
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

      }, {
        key: "highlightSelect",
        value: function highlightSelect(r, c) {
          if (this.userPref.highlightPath_state) {
            var rowSubGrid = this.row_ofSubgrid(r);
            var colSubGrid = this.col_ofSubgrid(c);
            var row;
            var col;

            for (var rwp = 0; rwp <= 2; rwp++) {
              for (var clp = 0; clp <= 2; clp++) {
                row = rowSubGrid + rwp;
                col = colSubGrid + clp;
                if (this.board.start[row][col].bgColor == this.userPref.disabledInput_bgColor) this.board.live[row][col].bgColor = this.userPref.highlightPath_disabled_bgColor;else this.board.live[row][col].bgColor = this.userPref.highlightPath_bgColor;
              }
            }

            for (var columns = 0; columns < 9; columns++) {
              if (this.board.start[r][columns].bgColor == this.userPref.disabledInput_bgColor) {
                this.board.live[r][columns].bgColor = this.userPref.highlightPath_disabled_bgColor;
              } else this.board.live[r][columns].bgColor = this.userPref.highlightPath_bgColor;
            }

            for (var rows = 0; rows < 9; rows++) {
              if (this.board.start[rows][c].bgColor == this.userPref.disabledInput_bgColor) {
                this.board.live[rows][c].bgColor = this.userPref.highlightPath_disabled_bgColor;
              } else this.board.live[rows][c].bgColor = this.userPref.highlightPath_bgColor;
            }

            this.board.live[this.board.sRow][this.board.sCol].bgColor = this.userPref.highlightPath_selected_bgColor;
            this.board.live[this.board.sRow][this.board.sCol].preHoverBgColor = this.userPref.highlightPath_selected_bgColor;
          }
        }
        /** Takes two coordinates (x,y) and (x2,y2) on the game board returns true if same
         * @param r Row index
         * @param c Column index
         * @param r2 Row index to compare to
         * @param c2 Column index to compare */

      }, {
        key: "isDupe",
        value: function isDupe(r, c, r2, c2) {
          if (this.board.live[r][c].num == this.board.live[r2][c2].num && this.board.live[r][c].num !== null && this.board.live[r][c].num !== 0 && (r !== r2 || c !== c2)) return true;else return false;
        }
        /**Marks same numbers that contradict on the board with their own background color
         * as means to check for incorrect as well as differentiate between contradictions
         */

      }, {
        key: "scanForErrors",
        value: function scanForErrors() {
          var n = 0;
          var c;
          this.decolor_bg();

          for (var i = 0; i < 9; i++) {
            for (var j = 0; j < 9; j++) {
              this.checkDupe(i, j, this.userPref.colors);

              if (this.checkDupe(i, j, this.userPref.colors) === true) {
                this.board.live[i][j].bgColor = this.userPref.colors[this.board.live[i][j].num];
                n++;
              }
            }
          }
        }
        /** Erase the current selected area
         *
         * Also de-color the board. then re-color it with just highlight path colors
         */

      }, {
        key: "erase",
        value: function erase() {
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

      }, {
        key: "isDisabled",
        value: function isDisabled(r, c) {
          if (this.userPref.toggle_boardPresetInputs_isDisabled) if (this.board.start[r][c].num == null || this.board.start[r][c].num == 0) {
            return false;
          } else {
            return true;
          }
        }
      }, {
        key: "toggle_boardPresetInputs_isDisabled",
        value: function toggle_boardPresetInputs_isDisabled() {
          this.userPref.toggle_boardPresetInputs_isDisabled = !this.userPref.toggle_boardPresetInputs_isDisabled;
        }
        /**Returns TRUE if there aren't any other identical numbers in it's row, column or sub-grid
         * else returns FALSE
         *
         * @param row Row index
         * @param col Column index
         * @param num The number that resides in the currently selected bracket
         */

      }, {
        key: "isSafe",
        value: function isSafe(arr, row, col, num) {
          for (var columns = 0; columns < this.board.live.length; columns++) {
            if (arr[row][columns].num == num) {
              if (columns !== col) {
                return false;
              }
            }
          }

          for (var rows = 0; rows < arr.length; rows++) {
            if (arr[rows][col].num == num) {
              if (rows !== row) {
                return false;
              }
            }
          }

          var sqrt = Math.sqrt(this.board.live.length); //sqrt=3

          var boxRowStart = row - row % sqrt;
          var boxColStart = col - col % sqrt;

          for (var r = boxRowStart; r < boxRowStart + sqrt; r++) {
            for (var d = boxColStart; d < boxColStart + sqrt; d++) {
              if (arr[r][d].num == num) {
                if (r !== row || d !== col) {
                  return false;
                }
              }
            }
          }

          return true;
        }
      }, {
        key: "setCell",
        value: function setCell(row, column, number, bgColor, fontColor) {
          if (!number == undefined) this.board.live[row][column].num = number;
        }
      }, {
        key: "copyBoard",
        value: function copyBoard(arrayToChange, arrayToCopy, isNum, isBgColor, isFontColor) {
          if (isNum === undefined) {
            var _isNum = true;
          }

          if (isBgColor === undefined) {
            var _isBgColor = true;
          }

          if (isFontColor === undefined) {
            var _isFontColor = true;
          }

          for (var row = 0; row < 9; row++) {
            for (var col = 0; col < 9; col++) {
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
      }, {
        key: "copyBoardS",
        value: function copyBoardS(arr, arr2) {
          for (var row = 0; row < 9; row++) {
            for (var col = 0; col < 9; col++) {
              arr[row][col].num = arr2[row][col].num;
              arr[row][col].bgColor = arr2[row][col].bgColor;
              arr[row][col].fontColor = arr2[row][col].fontColor;
            }
          }
        }
      }, {
        key: "doSomething",
        value: function doSomething() {
          this.copyBoardS(this.board.copy, this.board.live);
        }
      }, {
        key: "resetHint",
        value: function resetHint() {
          this.board.hintCol = null;
          this.board.hintRow = null;
          this.board.hintNum = null;
        }
        /**Grants 1 hint on the live game board */

      }, {
        key: "giveHint",
        value: function giveHint() {
          this.doSomething();
          this.solveSudoku(this.board.copy, 9, true);
          console.log(this.board.hintRow);
          console.log(this.board.hintCol);
          console.log(this.board.hintNum);
          this.board.live[this.board.hintRow][this.board.hintCol].num = this.board.hintNum;
          this.resetHint();
        }
        /**Solves sudoku to full
         * @param arr Board cell array
         * @param n Board.length
         * @param isHint if this function is used for just a HINT. Not a full board solution   */

      }, {
        key: "solveSudoku",
        value: function solveSudoku(arr, n, isHint) {
          if (isHint === undefined) {
            isHint = false;
          }

          var row = -1;
          var col = -1;
          var isEmpty = true;

          for (var i = 0; i < n; i++) {
            for (var j = 0; j < n; j++) {
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


          for (var number = 1; number <= n; number++) {
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
                } //replace it


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

      }, {
        key: "genSudoku",
        value: function genSudoku(arr, n, rndNum) {
          var row = -1;
          var col = -1;
          var isEmpty = true;
          var i = 0;
          var j = 0;

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

          for (var number = 0; number <= n; number++) {
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
      }, {
        key: "classic_colors",
        value: function classic_colors() {
          this.userPref.highlightPath_bgColor = "white";
          this.userPref.input_bgColor = "rgb(215, 215, 215)"; //slightly lighter- Gray

          this.userPref.disabledInput_fontColor = "black";
          this.userPref.highlightPath_disabled_bgColor = "white";
          this.userPref.highlightPath_selected_bgColor = "white";
          this.userPref.disabledInput_bgColor = "rgb(215, 215, 215)"; //slightly lighter- Gray

          this.userPref.highlightPath_selected_bgColor = "lightgreen";
          this.update_userPref_disabled_colors();
        }
      }, {
        key: "numbBtnArray",
        value: function numbBtnArray() {
          this.numBtn.numberBtnArray();
        }
      }, {
        key: "showErrors",
        value: function showErrors() {
          for (var r = 0; r < 9; r++) {
            for (var c = 0; c < 9; c++) {
              if (this.board.live[r][c].num !== this.board.solved[r][c].num) if (this.board.live[r][c].num !== this.board.start[r][c].num) {
                this.board.live[r][c].fontColor = this.userPref.incorrect_fontColor;
              }
            }
          }
        }
      }, {
        key: "showErrors_btn",
        value: function showErrors_btn() {
          this.decolor_bg();
          this.showErrors();
        }
      }, {
        key: "isEmpty",
        value: function isEmpty(r, c) {
          if (this.board.live[r][c].num == null || this.board.live[r][c].num == 0) return true;else return false;
        }
      }, {
        key: "styleLeftBorder",
        value: function styleLeftBorder(col) {
          if (col % 3 == 0) {
            return "2.5px solid black";
          } else {
            return "1px solid black";
          }
        }
      }, {
        key: "styleRightBorder",
        value: function styleRightBorder(col) {
          if ((col + 1) % 3 == 0) {
            return "2.5px solid black";
          } else {
            return "1px solid black";
          }
        }
      }, {
        key: "styleTopBorder",
        value: function styleTopBorder(row) {
          if (row % 3 == 0) {
            return "2.5px solid black";
          } else {
            return "1px solid black";
          }
        }
      }, {
        key: "styleBottomBorder",
        value: function styleBottomBorder(row) {
          if ((row + 1) % 3 == 0) {
            return "2.5px solid black";
          } else {
            return "1px solid black";
          }
        }
      }, {
        key: "styleLeftBorderPencil",
        value: function styleLeftBorderPencil(col, colPencil) {
          if (colPencil == 0) {
            if (col % 3 == 0) {
              return "2.5px solid black";
            } else return "1px solid black";
          } else {
            return "0px";
          }
        }
      }, {
        key: "styleRightBorderPencil",
        value: function styleRightBorderPencil(col, colPencil) {
          if (colPencil == 2) {
            if ((col + 1) % 3 == 0) {
              return "2.5px solid black";
            } else return "1px solid black";
          } else {
            return "0px";
          }
        }
      }, {
        key: "styleTopBorderPencil",
        value: function styleTopBorderPencil(row, rowPencil) {
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
      }, {
        key: "styleBottomBorderPencil",
        value: function styleBottomBorderPencil(row, rowPencil) {
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
      }, {
        key: "hintSudokuCom",
        value: function hintSudokuCom() {
          this.board.live[this.board.sRow][this.board.sCol].num = this.board.solved[this.board.sRow][this.board.sCol].num;

          for (var rows = 0; rows < 9; rows++) {
            for (var cols = 0; cols < 9; cols++) {
              if (this.board.live[this.board.sRow][this.board.sCol].num == this.board.live[rows][cols].num) this.board.live[rows][cols].bgColor = this.userPref.hintSudokuCom_bgColor;
            }
          }

          this.board.live[this.board.sRow][this.board.sCol].bgColor = this.userPref.hintSudokuCom_bgColor;
        }
      }, {
        key: "toggle_isShowDisabledAsBold",
        value: function toggle_isShowDisabledAsBold() {
          this.userPref.isShowDisabledAsBald = !this.userPref.isShowDisabledAsBald;
        }
      }, {
        key: "initPencilArray",
        value: function initPencilArray(c) {
          for (var i = 0; i < 9; i++) {
            c.pencil.push();
          }

          console.log(c);
        }
      }, {
        key: "togglePencil",
        value: function togglePencil() {
          this.board.live[this.board.sRow][this.board.sCol].isPencil = !this.board.live[this.board.sRow][this.board.sCol].isPencil;
          this.board.live[this.board.sRow][this.board.sCol].num = null;

          for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
              this.board.live[this.board.sRow][this.board.sCol].pencil[i][j] = null;
            }
          }
        }
      }, {
        key: "testPencil",
        value: function testPencil() {
          var _this3 = this;

          this.board.live[0][0].pencil[0][1] = 6;
          setTimeout(function () {
            return _this3.togglePencil(), 0;
          });
          setTimeout(function () {
            return _this3.togglePencil(), 0;
          });
        }
      }, {
        key: "mouseOver",
        value: function mouseOver(ro, co) {
          this.board.live[ro][co].preHoverBgColor = this.board.live[ro][co].bgColor;
          this.board.live[ro][co].bgColor = this.userPref.highlightPath_selected_bgColor;
        }
      }, {
        key: "mouseLeave",
        value: function mouseLeave(ro, co) {
          this.board.live[ro][co].bgColor = this.board.live[ro][co].preHoverBgColor;
        }
      }, {
        key: "deleteInput",
        value: function deleteInput(event, ro, co) {
          console.log(event.key);

          if (event.key = "Backspace") {
            this.board.live[ro][co].num = null;
          }

          if (event.key = "Delete") {
            this.board.live[ro][co].num = null;
          }
        }
      }]);

      return GameComponent;
    }();

    GameComponent.ɵfac = function GameComponent_Factory(t) {
      return new (t || GameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_userPreferences_service__WEBPACK_IMPORTED_MODULE_6__["UserPreferences"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sudoku_board_service__WEBPACK_IMPORTED_MODULE_7__["Board"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_right_column_newGame_service__WEBPACK_IMPORTED_MODULE_3__["NewGame"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_right_column_numberButton_service__WEBPACK_IMPORTED_MODULE_4__["NumberButton"]));
    };

    GameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GameComponent,
      selectors: [["app-gamePage"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_right_column_newGame_service__WEBPACK_IMPORTED_MODULE_3__["NewGame"], _right_column_numberButton_service__WEBPACK_IMPORTED_MODULE_4__["NumberButton"]])],
      decls: 53,
      vars: 57,
      consts: [[1, "row", "bigRow"], ["id", "devColumn", 1, "col-2", "col-s-2", "devColumn"], ["id", "devBar", "devBar", "", 4, "ngIf"], ["id", "dd", 1, "col-6", "col-s-6", "leftColumn"], ["id", "leftColumnContents", 1, "container", "leftColumnContents"], ["id", "rowBoard", 4, "ngFor", "ngForOf"], [1, "col-4", "col-s-4", "rightColumn"], ["id", "rightColumnContentsAndroid", 1, "rightColumnContentsAndroid"], [1, "col-xs-7", 2, "float", "left", "width", "70%", "padding", "0px", "padding-left", "5px"], ["name", "numberPad", 2, "margin-top", "3px"], ["class", "rower", 4, "ngFor", "ngForOf"], [1, "col-xs-5", 2, "float", "left", "width", "30%", "padding", "0px", "padding-top", "3px"], [1, "buttonObj"], ["type", "button", "id", "newGame", 1, "btn", "btn-primary", "btn-lg", "font-weight-bold;", 2, "background", "rgb(0, 150, 255)", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "btn-lg", "font-weight-bold", 2, "background", "orange", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "btn-lg", "font-weight-bold", 2, "background", "orangered", 3, "click"], ["name", "line3btns"], ["type", "button", 1, "btn", "btn-primary", "btn-lg", "font-weight-bold", 2, "background", "gray", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "btn-lg", "text-center", "font-weight-bold", "center", 2, "background", "dodgerblue", 3, "click"], ["id", "rightColumnContents", 1, "rightColumnContents"], ["type", "button", "id", "newGame", 1, "btn", "btn-primary", "btn-lg", "text-center", "font-weight-bold", 2, "background", "rgb(0, 150, 255)", "text-align", "center", "font-family", "Source Sans Pro, sans-serif", "font-weight", "600", 3, "click"], ["name", "line2btns", 2, "margin-top", "5px"], ["type", "button", 1, "btn", "btn-primary", "btn-lg", "text-center", "center", "text-align:", "center;", 2, "color", "black", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "btn-lg", "text-center", "font-weight-bold", "center", "text-align:", "center;", 2, "background", "white", "margin-left", "1px", "color", "black", 3, "click"], ["name", "line3btns", 2, "margin-top", "1px"], ["type", "button", 1, "btn", "btn-primary", "btn-lg", "text-center", "font-weight-bold", "center", 2, "background", "white", "color", "black", 3, "click"], [1, "buttonObj", 2, "width", "112px", "position", "relative"], ["type", "button", 1, "btn", "btn-primary", "btn-lg", "text-center", "font-weight-bold", "center", 2, "margin-left", "1px", "position", "absolute", "z-index", "5", "pointer-events", "none", "color", "black", 3, "click"], ["type", "text", 2, "position", "absolute", "margin-left", "1px", "width", "112px", "overflow", "hidden", 3, "ngModel", "ngModelChange", "input", "click"], [2, "margin-top", "1px"], ["type", "button", 1, "btn", "btn-primary", "btn-lg", "text-center", "center", 2, "background", "white", "color", "black", 3, "click"], ["id", "devBar", "devBar", ""], ["id", "testButtons"], ["type", "button", 3, "click"], ["id", "rowBoard"], ["class", "containter", "id", "container", 4, "ngFor", "ngForOf"], ["id", "container", 1, "containter"], ["cellInput", "", "id", "cTextArea", "type", "text", "maxlength", "1", 3, "disabled", "mouseover", "mouseleave", "input", "click"], ["type", "text", "maxlength", "1", 3, "id", "disabled", "ngModel", "mouseover", "mouseleave", "input", "click", "ngModelChange"], ["style", "position: absolute; z-index: 4; overflow: hidden;", "type", "text", 3, "left", "top", "background", "border-left", "border-right", "border-top", "border-bottom", "width", "height", "ngModel", "input", "ngModelChange", "click", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["type", "text", 2, "position", "absolute", "z-index", "4", "overflow", "hidden", 3, "ngModel", "input", "ngModelChange", "click"], ["type", "text", "maxlength", "1", "style", "\n                  text-align: center;\n                  position: absolute;\n                  pointer-events: none;\n                  z-index: 5;\n                  caret-color: transparent;\n                  /* font-weight: bold; */\n                  color: rgb(66, 65, 65);\n                ", 3, "id", "left", "top", "width", "height", "border-width", "ngModel", "font-size", "background", "border-left", "border-right", "border-top", "border-bottom", "keypress", "ngModelChange", 4, "ngIf"], ["type", "text", "maxlength", "1", 2, "text-align", "center", "position", "absolute", "pointer-events", "none", "z-index", "5", "caret-color", "transparent", "/* font-weight", "bold", "*/\n                  color", "rgb(66, 65, 65)", 3, "id", "ngModel", "keypress", "ngModelChange"], [1, "rower"], ["type", "button", 3, "border", "height", "width", "font-size", "hover", "click", 4, "ngFor", "ngForOf"], ["type", "button", 3, "border", "height", "width", "font-size", "hover", "font-family", "click", 4, "ngFor", "ngForOf"]],
      template: function GameComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GameComponent_div_2_Template, 26, 3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GameComponent_div_5_Template, 2, 1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, GameComponent_div_10_Template, 2, 1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameComponent_Template_button_click_13_listener() {
            return ctx.newGame.resetGame();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Restart ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameComponent_Template_button_click_16_listener() {
            return ctx.erase();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Erase ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameComponent_Template_button_click_19_listener() {
            return ctx.hintSudokuCom();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Hint ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameComponent_Template_button_click_23_listener() {
            return ctx.showErrors_btn();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Rule Ex ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameComponent_Template_button_click_26_listener() {
            return ctx.togglePencil();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Notes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameComponent_Template_button_click_30_listener() {
            return ctx.newGame.resetGame();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " New Game ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, GameComponent_div_33_Template, 2, 1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameComponent_Template_button_click_36_listener() {
            return ctx.erase();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Erase ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameComponent_Template_button_click_39_listener() {
            return ctx.hintSudokuCom();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Hint ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameComponent_Template_button_click_43_listener() {
            return ctx.showErrors_btn();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Examine ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameComponent_Template_button_click_46_listener() {
            return ctx.togglePencil();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Notes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "textarea", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GameComponent_Template_textarea_ngModelChange_48_listener($event) {
            return ctx.pencilButtonText = $event;
          })("input", function GameComponent_Template_textarea_input_48_listener($event) {
            return ctx.onTypePencil($event);
          })("click", function GameComponent_Template_textarea_click_48_listener() {
            return ctx.togglePencil();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameComponent_Template_button_click_51_listener() {
            return ctx.testPencil();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Testpencil ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.board.devModeOn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.board.live);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", " ".repeat(3).split(""));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("border-radius", "1px")("width", "108px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("border-radius", "0px")("width", "108px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("border-radius", "0px")("width", "108px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("border-radius", "0px")("width", "108px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("border-radius", "0px")("width", "108px")("background", ctx.board.live[ctx.board.sRow][ctx.board.sCol].isPencil ? "yellow" : "white", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("border-radius", "5px")("width", "225px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", " ".repeat(3).split(""));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("border-radius", "5px")("width", "112px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("border-radius", "5px")("width", "112px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("border-radius", "5px")("width", "112px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("border-radius", "5px")("width", "112px")("background", !ctx.board.live[ctx.board.sRow][ctx.board.sCol].isPencil ? "white" : "rgb(0, 150, 255)", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"])("color", !ctx.board.live[ctx.board.sRow][ctx.board.sCol].isPencil ? "black" : "white");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("border-radius", "5px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.pencilButtonText);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("border-radius", "5px")("width", "112px");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _sudoku_hotkey_delete_directive__WEBPACK_IMPORTED_MODULE_10__["CellInputDelete"], _hotkey_directive__WEBPACK_IMPORTED_MODULE_11__["HotkeyDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["MaxLengthValidator"]],
      styles: ["*[_ngcontent-%COMP%] {\r\n  box-sizing: border-box;\r\n}\r\n\r\n#testButtons[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n  color: blueviolet;\r\n}\r\n\r\n#cTextArea[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  position: absolute;\r\n  caret-color: transparent;\r\n  z-index: 0;\r\n  padding: 0px;\r\n  border-radius: 0px;\r\n}\r\n\r\n[id*=\"cell\"][_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  position: absolute;\r\n  caret-color: transparent;\r\n  z-index: 3;\r\n  pointer-events: none;\r\n}\r\n\r\n.row[_ngcontent-%COMP%]::after {\r\n  content: \"\";\r\n  clear: both;\r\n  display: table;\r\n}\r\n\r\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus, button[_ngcontent-%COMP%]:focus {\r\n  outline: none;\r\n}\r\n\r\n.bigRow[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n\r\n.rightColumn[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n\r\n.rightColumnContents[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.rightColumnContents[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  font-family: \"Source Sans Pro\";\r\n}\r\n\r\n.leftColumn[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  height: 364px;\r\n}\r\n\r\n#devColumn[_ngcontent-%COMP%] {\r\n  height: 240px;\r\n  padding-top: 0px;\r\n  margin-top: 0px;\r\n  padding-left: 15px;\r\n}\r\n\r\n#devColumn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  display: block;\r\n  width: 180px;\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n  text-transform: capitalize;\r\n  text-align: center;\r\n  position: relative;\r\n}\r\n\r\n#devColumn[_ngcontent-%COMP%]   .testBtns[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  left: 100px;\r\n}\r\n\r\n#devColumn[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  left: 100px;\r\n  background-color: aqua;\r\n  margin-bottom: 2px;\r\n  padding: 0px;\r\n  width: 100px;\r\n  margin-left: 38px;\r\n  text-align: center;\r\n  text-transform: capitalize;\r\n  left: 0px;\r\n}\r\n\r\n#rightColumnContents[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  left: 75px;\r\n  display: none;\r\n}\r\n\r\n[class*=\"col-\"][_ngcontent-%COMP%] {\r\n  float: left;\r\n  \r\n}\r\n\r\n\r\n\r\n[class*=\"col-\"][_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n#rightColumnContentsAndroid[_ngcontent-%COMP%] {\r\n  display: contents;\r\n}\r\n\r\n#rightColumnContentsAndroid[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\n@media only screen and (min-width: 858px) {\r\n  .col-1[_ngcontent-%COMP%] {\r\n    width: 8.33%;\r\n  }\r\n  .col-2[_ngcontent-%COMP%] {\r\n    width: 16.66%;\r\n  }\r\n  .col-3[_ngcontent-%COMP%] {\r\n    width: 25%;\r\n  }\r\n  .col-4[_ngcontent-%COMP%] {\r\n    width: 33.33%;\r\n  }\r\n  .col-5[_ngcontent-%COMP%] {\r\n    width: 41.66%;\r\n  }\r\n  .col-6[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n  }\r\n  .col-7[_ngcontent-%COMP%] {\r\n    width: 58.33%;\r\n  }\r\n  .col-8[_ngcontent-%COMP%] {\r\n    width: 66.66%;\r\n  }\r\n  .col-9[_ngcontent-%COMP%] {\r\n    width: 75%;\r\n  }\r\n  .col-10[_ngcontent-%COMP%] {\r\n    width: 83.33%;\r\n  }\r\n  .col-11[_ngcontent-%COMP%] {\r\n    width: 91.66%;\r\n  }\r\n  .col-12[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  background: white;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:hover {\r\n  background: rgb(228, 222, 222);\r\n}\r\n\r\n\r\n\r\n@media only screen and (min-width: 858px) {\r\n  \r\n  .col-s-1[_ngcontent-%COMP%] {\r\n    width: 8.33%;\r\n  }\r\n  .col-s-2[_ngcontent-%COMP%] {\r\n    width: 16.66%;\r\n  }\r\n  .col-s-3[_ngcontent-%COMP%] {\r\n    width: 25%;\r\n  }\r\n  .col-s-4[_ngcontent-%COMP%] {\r\n    width: 33.33%;\r\n  }\r\n  .col-s-5[_ngcontent-%COMP%] {\r\n    width: 41.66%;\r\n  }\r\n  .col-s-6[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n  }\r\n  .col-s-7[_ngcontent-%COMP%] {\r\n    width: 58.33%;\r\n  }\r\n  .col-s-8[_ngcontent-%COMP%] {\r\n    width: 66.66%;\r\n  }\r\n  .col-s-9[_ngcontent-%COMP%] {\r\n    width: 75%;\r\n  }\r\n  .col-s-10[_ngcontent-%COMP%] {\r\n    width: 83.33%;\r\n  }\r\n  .col-s-11[_ngcontent-%COMP%] {\r\n    width: 91.66%;\r\n  }\r\n  .col-s-12[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n\r\n  #leftColumnContents[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    left: 250px;\r\n  }\r\n\r\n  #rightColumnContents[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    left: 0px;\r\n    display: contents;\r\n  }\r\n\r\n  #devColumn[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    left: 0px;\r\n  }\r\n\r\n  #devColumn[_ngcontent-%COMP%] {\r\n    top: -40px;\r\n  }\r\n\r\n  #devColumn[_ngcontent-%COMP%]   .testBtns[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    left: 0px;\r\n  }\r\n\r\n  #devColumn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n  }\r\n\r\n  #rightColumnContentsAndroid[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ2FtZS9nYW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsVUFBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QixVQUFVO0VBQ1Ysb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxjQUFjO0FBQ2hCOztBQUVBOztFQUVFLGVBQWU7QUFDakI7O0FBRUE7Ozs7RUFJRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw0RUFBNEU7QUFDOUU7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWiw0RUFBNEU7RUFDNUUsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsU0FBUztBQUNYOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBLHVCQUF1Qjs7QUFDdkI7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRTtJQUNFLFlBQVk7RUFDZDtFQUNBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7QUFDRjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQSxPQUFPOztBQUNQO0VBQ0UsaUJBQWlCO0VBQ2pCO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGVBQWU7SUFDZixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFNBQVM7RUFDWDs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dhbWUvZ2FtZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuI3Rlc3RCdXR0b25zIHAge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiBibHVldmlvbGV0O1xyXG59XHJcblxyXG4jY1RleHRBcmVhIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGNhcmV0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB6LWluZGV4OiAwO1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbn1cclxuXHJcbltpZCo9XCJjZWxsXCJdIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGNhcmV0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB6LWluZGV4OiAzO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4ucm93OjphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBjbGVhcjogYm90aDtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxufVxyXG5cclxuaW5wdXQsXHJcbnRleHRhcmVhIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmlucHV0OmZvY3VzLFxyXG5zZWxlY3Q6Zm9jdXMsXHJcbnRleHRhcmVhOmZvY3VzLFxyXG5idXR0b246Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5iaWdSb3cge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnJpZ2h0Q29sdW1uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5yaWdodENvbHVtbkNvbnRlbnRzIGRpdiBidXR0b24ge1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbn1cclxuXHJcbi5yaWdodENvbHVtbkNvbnRlbnRzIGJ1dHRvbiB7XHJcbiAgZm9udC1mYW1pbHk6IFwiU291cmNlIFNhbnMgUHJvXCI7XHJcbn1cclxuXHJcbi5sZWZ0Q29sdW1uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiAzNjRweDtcclxufVxyXG5cclxuI2RldkNvbHVtbiB7XHJcbiAgaGVpZ2h0OiAyNDBweDtcclxuICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbn1cclxuI2RldkNvbHVtbiBidXR0b24ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxODBweDtcclxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbiNkZXZDb2x1bW4gLnRlc3RCdG5zIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGVmdDogMTAwcHg7XHJcbn1cclxuXHJcbiNkZXZDb2x1bW4gcCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxlZnQ6IDEwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDM4cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIGxlZnQ6IDBweDtcclxufVxyXG5cclxuI3JpZ2h0Q29sdW1uQ29udGVudHMge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiA3NXB4O1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbltjbGFzcyo9XCJjb2wtXCJdIHtcclxuICBmbG9hdDogbGVmdDtcclxuICAvKiBwYWRkaW5nOiAxNXB4OyAqL1xyXG59XHJcblxyXG4vKiBGb3IgbW9iaWxlIHBob25lczogKi9cclxuW2NsYXNzKj1cImNvbC1cIl0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4jcmlnaHRDb2x1bW5Db250ZW50c0FuZHJvaWQge1xyXG4gIGRpc3BsYXk6IGNvbnRlbnRzO1xyXG59XHJcblxyXG4jcmlnaHRDb2x1bW5Db250ZW50c0FuZHJvaWQgYnV0dG9uIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODU4cHgpIHtcclxuICAuY29sLTEge1xyXG4gICAgd2lkdGg6IDguMzMlO1xyXG4gIH1cclxuICAuY29sLTIge1xyXG4gICAgd2lkdGg6IDE2LjY2JTtcclxuICB9XHJcbiAgLmNvbC0zIHtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgfVxyXG4gIC5jb2wtNCB7XHJcbiAgICB3aWR0aDogMzMuMzMlO1xyXG4gIH1cclxuICAuY29sLTUge1xyXG4gICAgd2lkdGg6IDQxLjY2JTtcclxuICB9XHJcbiAgLmNvbC02IHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG4gIC5jb2wtNyB7XHJcbiAgICB3aWR0aDogNTguMzMlO1xyXG4gIH1cclxuICAuY29sLTgge1xyXG4gICAgd2lkdGg6IDY2LjY2JTtcclxuICB9XHJcbiAgLmNvbC05IHtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgfVxyXG4gIC5jb2wtMTAge1xyXG4gICAgd2lkdGg6IDgzLjMzJTtcclxuICB9XHJcbiAgLmNvbC0xMSB7XHJcbiAgICB3aWR0aDogOTEuNjYlO1xyXG4gIH1cclxuICAuY29sLTEyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjI4LCAyMjIsIDIyMik7XHJcbn1cclxuXHJcbi8qIDc2OCovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODU4cHgpIHtcclxuICAvKiBGb3IgdGFibGV0czogKi9cclxuICAuY29sLXMtMSB7XHJcbiAgICB3aWR0aDogOC4zMyU7XHJcbiAgfVxyXG4gIC5jb2wtcy0yIHtcclxuICAgIHdpZHRoOiAxNi42NiU7XHJcbiAgfVxyXG4gIC5jb2wtcy0zIHtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgfVxyXG4gIC5jb2wtcy00IHtcclxuICAgIHdpZHRoOiAzMy4zMyU7XHJcbiAgfVxyXG4gIC5jb2wtcy01IHtcclxuICAgIHdpZHRoOiA0MS42NiU7XHJcbiAgfVxyXG4gIC5jb2wtcy02IHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG4gIC5jb2wtcy03IHtcclxuICAgIHdpZHRoOiA1OC4zMyU7XHJcbiAgfVxyXG4gIC5jb2wtcy04IHtcclxuICAgIHdpZHRoOiA2Ni42NiU7XHJcbiAgfVxyXG4gIC5jb2wtcy05IHtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgfVxyXG4gIC5jb2wtcy0xMCB7XHJcbiAgICB3aWR0aDogODMuMzMlO1xyXG4gIH1cclxuICAuY29sLXMtMTEge1xyXG4gICAgd2lkdGg6IDkxLjY2JTtcclxuICB9XHJcbiAgLmNvbC1zLTEyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgI2xlZnRDb2x1bW5Db250ZW50cyB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAyNTBweDtcclxuICB9XHJcblxyXG4gICNyaWdodENvbHVtbkNvbnRlbnRzIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xyXG4gIH1cclxuXHJcbiAgI2RldkNvbHVtbiBkaXYge1xyXG4gICAgbGVmdDogMHB4O1xyXG4gIH1cclxuXHJcbiAgI2RldkNvbHVtbiB7XHJcbiAgICB0b3A6IC00MHB4O1xyXG4gIH1cclxuXHJcbiAgI2RldkNvbHVtbiAudGVzdEJ0bnMge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogMHB4O1xyXG4gIH1cclxuXHJcbiAgI2RldkNvbHVtbiBidXR0b24ge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcblxyXG4gICNyaWdodENvbHVtbkNvbnRlbnRzQW5kcm9pZCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-gamePage",
          templateUrl: "./game.component.html",
          styleUrls: ["./game.component.css"],
          providers: [_right_column_newGame_service__WEBPACK_IMPORTED_MODULE_3__["NewGame"], _right_column_numberButton_service__WEBPACK_IMPORTED_MODULE_4__["NumberButton"]]
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }, {
          type: _user_userPreferences_service__WEBPACK_IMPORTED_MODULE_6__["UserPreferences"]
        }, {
          type: _sudoku_board_service__WEBPACK_IMPORTED_MODULE_7__["Board"]
        }, {
          type: _right_column_newGame_service__WEBPACK_IMPORTED_MODULE_3__["NewGame"]
        }, {
          type: _right_column_numberButton_service__WEBPACK_IMPORTED_MODULE_4__["NumberButton"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/game/hotkey.directive.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/game/hotkey.directive.ts ***!
    \************************************************/

  /*! exports provided: HotkeyDirective */

  /***/
  function srcAppPagesGameHotkeyDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HotkeyDirective", function () {
      return HotkeyDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _sudoku_board_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./sudoku/board.service */
    "./src/app/pages/game/sudoku/board.service.ts");

    var HotkeyDirective =
    /*#__PURE__*/
    function () {
      function HotkeyDirective(board, elementRef, renderer) {
        _classCallCheck(this, HotkeyDirective);

        this.board = board;
        this.elementRef = elementRef;
      }

      _createClass(HotkeyDirective, [{
        key: "keydownDev",
        value: function keydownDev(event) {
          this.board.devModeOn = !this.board.devModeOn;
        }
      }, {
        key: "keydownNote",
        value: function keydownNote(event) {
          this.board.togglePencil();
        } // @HostListener("document:keydown.1", ["$event"])
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

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HotkeyDirective;
    }();

    HotkeyDirective.ɵfac = function HotkeyDirective_Factory(t) {
      return new (t || HotkeyDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sudoku_board_service__WEBPACK_IMPORTED_MODULE_1__["Board"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
    };

    HotkeyDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: HotkeyDirective,
      selectors: [["", "cellInput", ""]],
      hostBindings: function HotkeyDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.d", function HotkeyDirective_keydown_d_HostBindingHandler($event) {
            return ctx.keydownDev($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("keydown.n", function HotkeyDirective_keydown_n_HostBindingHandler($event) {
            return ctx.keydownNote($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
        }
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HotkeyDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: "[cellInput]"
        }]
      }], function () {
        return [{
          type: _sudoku_board_service__WEBPACK_IMPORTED_MODULE_1__["Board"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }];
      }, {
        keydownDev: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ["document:keydown.d", ["$event"]]
        }],
        keydownNote: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ["document:keydown.n", ["$event"]]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/game/right-column/newGame.service.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/game/right-column/newGame.service.ts ***!
    \************************************************************/

  /*! exports provided: NewGame */

  /***/
  function srcAppPagesGameRightColumnNewGameServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewGame", function () {
      return NewGame;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _sudoku_board_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../sudoku/board.service */
    "./src/app/pages/game/sudoku/board.service.ts");

    var NewGame =
    /*#__PURE__*/
    function () {
      function NewGame(board) {
        _classCallCheck(this, NewGame);

        this.board = board;
      }
      /**Restarts the board*/


      _createClass(NewGame, [{
        key: "resetGame",
        value: function resetGame() {
          //this.board.live = Object.assign({}, this.board.start);
          for (var i = 0; i < 9; i++) {
            for (var j = 0; j < 9; j++) {
              this.board.live[i][j].num = this.board.start[i][j].num;
              this.board.live[i][j].fontColor = this.board.start[i][j].fontColor;
              this.board.live[i][j].bgColor = this.board.start[i][j].bgColor;
            }
          }
        }
      }]);

      return NewGame;
    }();

    NewGame.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: NewGame
    });
    NewGame.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function NewGame_Factory(t) {
        return new (t || NewGame)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_sudoku_board_service__WEBPACK_IMPORTED_MODULE_1__["Board"]));
      },
      providers: []
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewGame, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          providers: []
        }]
      }], function () {
        return [{
          type: _sudoku_board_service__WEBPACK_IMPORTED_MODULE_1__["Board"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/game/right-column/numberButton.service.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/game/right-column/numberButton.service.ts ***!
    \*****************************************************************/

  /*! exports provided: NumberButton */

  /***/
  function srcAppPagesGameRightColumnNumberButtonServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NumberButton", function () {
      return NumberButton;
    });

    var NumberButton =
    /*#__PURE__*/
    function () {
      function NumberButton() {
        _classCallCheck(this, NumberButton);

        this.numberBtn = [];
      }

      _createClass(NumberButton, [{
        key: "numberBtnArray",
        value: function numberBtnArray() {
          for (var i = 0; i < 9; i++) {
            this.numberBtn.push(i + 1);
          }
        }
      }]);

      return NumberButton;
    }();
    /***/

  },

  /***/
  "./src/app/pages/game/sudoku/board.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/game/sudoku/board.service.ts ***!
    \****************************************************/

  /*! exports provided: Board */

  /***/
  function srcAppPagesGameSudokuBoardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Board", function () {
      return Board;
    });
    /* harmony import */


    var _cell_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./cell.model */
    "./src/app/pages/game/sudoku/cell.model.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _user_userPreferences_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../_user/userPreferences.service */
    "./src/app/_user/userPreferences.service.ts");

    var Board =
    /*#__PURE__*/
    function () {
      function Board(http, userPref) {
        _classCallCheck(this, Board);

        this.http = http;
        this.userPref = userPref;
        this.devModeOn = false;
        /**live game board*/

        this.live = [];
        /**static beginning board*/

        this.start = [];
        /**copy aid board for hints */

        this.copy = [];
        /**solved board(to aid performance)*/

        this.solved = [];
        this.sRow = 0; //selectedRow. dynamically stored Selected Row index

        this.sCol = 0; //selectedColumn dynamically stored Column index

        this.hintNum = null;
        this.hintCol = null;
        this.hintRow = null;
        /** saves board as a String from sudoku.txt*/

        this.stringOf_sudoku_txt = "sudoku.txt";
        /**Stores all the numbers of end-result board. Pre-determined for now.
         *
         * --due-to-change */

        this.fBoard = [//final Board
        [9, 5, 7, 6, 1, 3, 2, 8, 4], [4, 8, 3, 2, 5, 7, 1, 9, 6], [6, 1, 2, 8, 4, 9, 5, 3, 7], [1, 7, 8, 3, 6, 4, 9, 5, 2], [5, 2, 4, 9, 7, 1, 3, 6, 8], [3, 6, 9, 5, 2, 8, 7, 4, 1], [8, 4, 5, 7, 9, 2, 6, 1, 3], [2, 9, 1, 4, 3, 6, 8, 7, 5], [7, 3, 6, 1, 8, 5, 4, 2, 9]];
        console.log(this.live);
      }
      /**This method is ran on ng-init and is responsible for importing a sudoku board from the
       * sudoku.txt file into a string variable to be used later */


      _createClass(Board, [{
        key: "getFileData",
        value: function getFileData() {
          var _this4 = this;

          setTimeout(function () {
            console.log(_this4.live);
          }, 1000);
          return this.http.get("/assets/read/filePath2.json").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (response) {
            return _this4.http.get(response.pathToFile, {
              responseType: "text"
            });
          })).subscribe(function (text) {
            _this4.stringOf_sudoku_txt = text;

            _this4.build_cell_array_fromString2(_this4.live, _this4.stringOf_sudoku_txt, _this4.start);

            _this4.build_cell_array(_this4.copy);

            _this4.build_cell_array(_this4.solved);

            _this4.copyBoardS(_this4.solved, _this4.live);

            _this4.solveSudoku(_this4.solved, 9);
          });
        }
      }, {
        key: "fetchSudoku",
        value: function fetchSudoku() {
          this.http.post("http://localhost:3000/fetchSudoku", 1).subscribe(function (responseData) {});
        }
        /**Defines a declared empty cell array into a 9x9 cell array
         * @param board empty declared cell array
         */

      }, {
        key: "build_cell_array",
        value: function build_cell_array(board) {
          for (var r = 0; r < 9; r++) {
            board.push();
            board[r] = [];

            for (var c = 0; c < 9; c++) {
              board[r][c] = new _cell_model__WEBPACK_IMPORTED_MODULE_0__["cell"]();
            }
          }
        }
      }, {
        key: "copyBoardS",
        value: function copyBoardS(arr, arr2) {
          for (var row = 0; row < 9; row++) {
            for (var col = 0; col < 9; col++) {
              arr[row][col].num = arr2[row][col].num;
              arr[row][col].bgColor = arr2[row][col].bgColor;
              arr[row][col].fontColor = arr2[row][col].fontColor; //console.log(row, col);
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

      }, {
        key: "solveSudoku",
        value: function solveSudoku(arr, n, isHint) {
          if (isHint === undefined) {
            isHint = false;
          }

          var row = -1;
          var col = -1;
          var isEmpty = true;

          for (var i = 0; i < n; i++) {
            for (var j = 0; j < n; j++) {
              if (arr[i][j].num == 0 || arr[i][j].num == null) {
                row = i;
                col = j; //we still have some remaining
                //missing values in Sudoku

                isEmpty = false;
                break;
              }
            }

            if (!isEmpty) {
              break;
            }
          } //no empty space left


          if (isEmpty) {
            return true;
          } //else for each-row backtrack


          for (var number = 1; number <= n; number++) {
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
                } //replace it


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

      }, {
        key: "isSafe",
        value: function isSafe(arr, row, col, num) {
          for (var columns = 0; columns < this.live.length; columns++) {
            if (arr[row][columns].num == num) {
              if (columns !== col) {
                return false;
              }
            }
          }

          for (var rows = 0; rows < arr.length; rows++) {
            if (arr[rows][col].num == num) {
              if (rows !== row) {
                return false;
              }
            }
          }

          var sqrt = Math.sqrt(this.live.length); //sqrt=3

          var boxRowStart = row - row % sqrt;
          var boxColStart = col - col % sqrt;

          for (var r = boxRowStart; r < boxRowStart + sqrt; r++) {
            for (var d = boxColStart; d < boxColStart + sqrt; d++) {
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

      }, {
        key: "build_cell_array_fromString",
        value: function build_cell_array_fromString(liveBoard, t, startBoard) {
          var n = 0; //string t char index

          var isPresetIncluded = true;

          if (startBoard === undefined) {
            isPresetIncluded = false;
          } else {
            isPresetIncluded = true;
          }

          for (var r = 0; r < 9; r++) {
            //row
            liveBoard.push();
            liveBoard[r] = [];

            if (isPresetIncluded) {
              startBoard.push();
              startBoard[r] = [];
            }

            for (var c = 0; c < 9; c++) {
              //column
              liveBoard[r][c] = new _cell_model__WEBPACK_IMPORTED_MODULE_0__["cell"]();
              this.initPencilArray(liveBoard[r][c]);
              startBoard[r][c] = new _cell_model__WEBPACK_IMPORTED_MODULE_0__["cell"]();

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

      }, {
        key: "build_cell_array_fromString2",
        value: function build_cell_array_fromString2(liveBoard, t, startBoard) {
          var n = 0; //string t char index

          var isPresetIncluded = true;

          if (startBoard === undefined) {
            isPresetIncluded = false;
          } else {
            isPresetIncluded = true;
          }

          for (var r = 0; r < 9; r++) {
            //row
            liveBoard.push();
            liveBoard[r] = [];

            if (isPresetIncluded) {
              startBoard.push();
              startBoard[r] = [];
            }

            for (var c = 0; c < 9; c++) {
              //column
              liveBoard[r][c] = new _cell_model__WEBPACK_IMPORTED_MODULE_0__["cell"]();
              this.initPencilArray(liveBoard[r][c]);
              startBoard[r][c] = new _cell_model__WEBPACK_IMPORTED_MODULE_0__["cell"]();

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
      }, {
        key: "initPencilArray",
        value: function initPencilArray(c) {
          c.isPencil = false;
          c.pencil = [];

          for (var i = 0; i < 3; i++) {
            c.pencil.push([]); // c.pencil[i] = [];

            for (var j = 0; j < 3; j++) {
              c.pencil[i].push(null);
            }
          }
        }
      }, {
        key: "classic_colors",
        value: function classic_colors(b) {
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
          } // if ((b = true)) {
          //   this.update_userPref_disabled_colors();
          // }

        }
        /**Update colors of preset */

      }, {
        key: "update_userPref_disabled_colors",
        value: function update_userPref_disabled_colors() {
          for (var row = 0; row < 9; row++) {
            for (var col = 0; col < 9; col++) {
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

      }, {
        key: "decolor_bg",
        value: function decolor_bg(bg) {
          if (bg !== undefined) this.color_live_bg(bg);else for (var row = 0; row < 9; row++) {
            for (var col = 0; col < 9; col++) {
              this.live[row][col].bgColor = this.start[row][col].bgColor;
            }
          }
        }
        /**Colors BG of ALL cells*/

      }, {
        key: "color_live_bg",
        value: function color_live_bg(color) {
          for (var row = 0; row < 9; row++) {
            for (var col = 0; col < 9; col++) {
              this.live[row][col].bgColor = color;
            }
          }
        }
        /**Restores all cells FONT colors to default
         * @param r Row index of current row
         * @param c Column index of current column*/

      }, {
        key: "decolor_font",
        value: function decolor_font() {
          for (var row = 0; row < 9; row++) {
            for (var col = 0; col < 9; col++) {
              this.live[row][col].fontColor = this.start[row][col].fontColor;
            }
          }
        }
      }, {
        key: "togglePencil",
        value: function togglePencil() {
          this.live[this.sRow][this.sCol].isPencil = !this.live[this.sRow][this.sCol].isPencil;
          this.live[this.sRow][this.sCol].num = null;

          for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
              this.live[this.sRow][this.sCol].pencil[i][j] = null;
            }
          }
        }
      }, {
        key: "row_ofSubgrid",
        value: function row_ofSubgrid(row) {
          if (row === undefined) {
            var _row2 = this.sRow;
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
      }, {
        key: "col_ofSubgrid",
        value: function col_ofSubgrid(col) {
          if (col === undefined) {
            var row = this.sCol;
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

      }, {
        key: "highlightSelect",
        value: function highlightSelect(r, c) {
          if (this.userPref.highlightPath_state) {
            var rowSubGrid = this.row_ofSubgrid(r);
            var colSubGrid = this.col_ofSubgrid(c);
            var row;
            var col;

            for (var rwp = 0; rwp <= 2; rwp++) {
              for (var clp = 0; clp <= 2; clp++) {
                row = rowSubGrid + rwp;
                col = colSubGrid + clp;
                if (this.start[row][col].bgColor == this.userPref.disabledInput_bgColor) this.live[row][col].bgColor = this.userPref.highlightPath_disabled_bgColor;else this.live[row][col].bgColor = this.userPref.highlightPath_bgColor;
              }
            }

            for (var columns = 0; columns < 9; columns++) {
              if (this.start[r][columns].bgColor == this.userPref.disabledInput_bgColor) {
                this.live[r][columns].bgColor = this.userPref.highlightPath_disabled_bgColor;
              } else this.live[r][columns].bgColor = this.userPref.highlightPath_bgColor;
            }

            for (var rows = 0; rows < 9; rows++) {
              if (this.start[rows][c].bgColor == this.userPref.disabledInput_bgColor) {
                this.live[rows][c].bgColor = this.userPref.highlightPath_disabled_bgColor;
              } else this.live[rows][c].bgColor = this.userPref.highlightPath_bgColor;
            }

            this.live[this.sRow][this.sCol].bgColor = this.userPref.highlightPath_selected_bgColor;
            this.live[this.sRow][this.sCol].preHoverBgColor = this.userPref.highlightPath_selected_bgColor;
          }
        }
      }]);

      return Board;
    }();

    Board.ɵfac = function Board_Factory(t) {
      return new (t || Board)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_user_userPreferences_service__WEBPACK_IMPORTED_MODULE_4__["UserPreferences"]));
    };

    Board.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: Board,
      factory: Board.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](Board, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _user_userPreferences_service__WEBPACK_IMPORTED_MODULE_4__["UserPreferences"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/game/sudoku/cell.model.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/game/sudoku/cell.model.ts ***!
    \*************************************************/

  /*! exports provided: cell */

  /***/
  function srcAppPagesGameSudokuCellModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "cell", function () {
      return cell;
    });

    var cell =
    /**constrcutor for a cell
     *
     * @param num number value of cell
     * @param bgColor Background color of cell
     * @param fontColor Font Color of cell
     */
    function cell(num, bgColor, fontColor, pencil, isPencil, preHoverBgColor) {
      _classCallCheck(this, cell);

      this.num = num;
      this.bgColor = bgColor;
      this.fontColor = fontColor;
      this.pencil = pencil;
      this.isPencil = isPencil;
      this.preHoverBgColor = preHoverBgColor;
    };
    /***/

  },

  /***/
  "./src/app/pages/game/sudoku/hotkey-delete.directive.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/game/sudoku/hotkey-delete.directive.ts ***!
    \**************************************************************/

  /*! exports provided: CellInputDelete */

  /***/
  function srcAppPagesGameSudokuHotkeyDeleteDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CellInputDelete", function () {
      return CellInputDelete;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _board_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./board.service */
    "./src/app/pages/game/sudoku/board.service.ts");

    var CellInputDelete =
    /*#__PURE__*/
    function () {
      function CellInputDelete(board, elementRef, renderer) {
        _classCallCheck(this, CellInputDelete);

        this.board = board;
        this.elementRef = elementRef;
      }

      _createClass(CellInputDelete, [{
        key: "keydownBackspace",
        value: function keydownBackspace(event) {
          this.board.decolor_bg();
          this.board.decolor_font();
          this.board.highlightSelect(this.board.sRow, this.board.sCol);

          if (this.board.live[this.board.sRow][this.board.sCol].isPencil) {
            for (var i = 0; i < 3; i++) {
              for (var j = 0; j < 3; j++) {
                this.board.live[this.board.sRow][this.board.sCol].pencil[i][j] = null;
              }
            }
          } else {
            this.board.live[this.board.sRow][this.board.sCol].num = null;
          }
        }
      }, {
        key: "keydownDelete",
        value: function keydownDelete(event) {
          this.board.decolor_bg();
          this.board.decolor_font();
          this.board.highlightSelect(this.board.sRow, this.board.sCol);

          if (this.board.live[this.board.sRow][this.board.sCol].isPencil) {
            for (var i = 0; i < 3; i++) {
              for (var j = 0; j < 3; j++) {
                this.board.live[this.board.sRow][this.board.sCol].pencil[i][j] = null;
              }
            }
          } else {
            this.board.live[this.board.sRow][this.board.sCol].num = null;
          }
        }
      }, {
        key: "keydownEsc",
        value: function keydownEsc(event) {
          this.board.decolor_bg();
          this.board.decolor_font();
          this.board.highlightSelect(this.board.sRow, this.board.sCol);

          if (this.board.live[this.board.sRow][this.board.sCol].isPencil) {
            for (var i = 0; i < 3; i++) {
              for (var j = 0; j < 3; j++) {
                this.board.live[this.board.sRow][this.board.sCol].pencil[i][j] = null;
              }
            }
          } else {
            this.board.live[this.board.sRow][this.board.sCol].num = null;
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CellInputDelete;
    }();

    CellInputDelete.ɵfac = function CellInputDelete_Factory(t) {
      return new (t || CellInputDelete)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_board_service__WEBPACK_IMPORTED_MODULE_1__["Board"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
    };

    CellInputDelete.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CellInputDelete,
      selectors: [["", "cellInput", ""]],
      hostBindings: function CellInputDelete_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.backspace", function CellInputDelete_keydown_backspace_HostBindingHandler($event) {
            return ctx.keydownBackspace($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("keydown.delete", function CellInputDelete_keydown_delete_HostBindingHandler($event) {
            return ctx.keydownDelete($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("keydown.escape", function CellInputDelete_keydown_escape_HostBindingHandler($event) {
            return ctx.keydownEsc($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
        }
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CellInputDelete, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: "[cellInput]"
        }]
      }], function () {
        return [{
          type: _board_service__WEBPACK_IMPORTED_MODULE_1__["Board"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }];
      }, {
        keydownBackspace: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ["document:keydown.backspace", ["$event"]]
        }],
        keydownDelete: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ["document:keydown.delete", ["$event"]]
        }],
        keydownEsc: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ["document:keydown.escape", ["$event"]]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/leaderboards/leaderboards.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/leaderboards/leaderboards.component.ts ***!
    \**************************************************************/

  /*! exports provided: Leaderboards */

  /***/
  function srcAppPagesLeaderboardsLeaderboardsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Leaderboards", function () {
      return Leaderboards;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var Leaderboards = function Leaderboards() {
      _classCallCheck(this, Leaderboards);

      this.testLeft = 300;
    };

    Leaderboards.ɵfac = function Leaderboards_Factory(t) {
      return new (t || Leaderboards)();
    };

    Leaderboards.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Leaderboards,
      selectors: [["app-leaderboards"]],
      decls: 2,
      vars: 0,
      consts: [[2, "width", "100%", "height", "10%", "border", "1px solid"], [2, "width", "50%", "height", "40px", "border", "1px solid", "top", "80px"]],
      template: function Leaderboards_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Leaderboards, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-leaderboards",
          templateUrl: "./leaderboards.component.html"
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\development\teaching\udemy\sudoku-app\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map