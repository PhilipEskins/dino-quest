import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { CharacterComponent } from './character/character.component';
import { ScenesComponent } from './scenes/scenes.component';


@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    CharacterComponent,
    ScenesComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
