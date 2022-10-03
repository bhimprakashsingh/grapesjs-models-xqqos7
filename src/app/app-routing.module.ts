import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GrapesPageComponent } from "./grapes-page/grapes-page.component";
import { RandomPageComponent } from "./random-page/random-page.component";

const routes: Routes = [
  {
    path: "grapes",
    component: GrapesPageComponent
  },
  {
    path: "random",
    component: RandomPageComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
