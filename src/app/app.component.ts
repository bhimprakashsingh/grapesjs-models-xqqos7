import { Component, VERSION, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  constructor(private _router: Router) {}
  ngOnInit(): void {}

  goToGrapes() {
    this._router.navigate(["/grapes"]);
  }
}
