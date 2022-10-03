import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { GrapesPageComponent } from "./grapes-page/grapes-page.component";
import { AppRoutingModule } from "./app-routing.module";
import { RandomPageComponent } from './random-page/random-page.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [AppComponent, GrapesPageComponent, RandomPageComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
