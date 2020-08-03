import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { GameComponent } from "./pages/game/game.component";
import { HeaderComponent } from "./header/header.component";
import { HttpClientModule } from "@angular/common/http";
import { UserPreferences } from "./_user/userPreferences.service";
import { Board } from "./pages/game/sudoku/board.service";
import { Leaderboards } from "./pages/leaderboards/leaderboards.component";
import { CellInputDelete } from "./pages/game/sudoku/hotkey-delete.directive";
import { HotkeyDirective } from "./pages/game/hotkey.directive";

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    HeaderComponent,
    Leaderboards,
    CellInputDelete,
    HotkeyDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [UserPreferences, Board],
  bootstrap: [AppComponent],
})
export class AppModule {}
