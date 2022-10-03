import { Component, OnInit } from "@angular/core";
import grapesjs from "grapesjs";
import { Router } from "@angular/router";

@Component({
  selector: "app-grapes-page",
  templateUrl: "./grapes-page.component.html",
  styleUrls: ["./grapes-page.component.css"]
})
export class GrapesPageComponent implements OnInit {
  editor;
  constructor(private _router: Router) {}
  
  goToRandom() {
    this.editor.destroy();
    this._router.navigate(["/random"]);
  }

  ngOnInit() {
    this.editor = grapesjs.init({
      // Indicate where to init the editor. You can also pass an HTMLElement
      container: "#gjs",
      // Get the content for the canvas directly from the element
      // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
      fromElement: true,
      // Size of the editor
      height: "98vh",
      width: "100%",
      blockManager: {
        appendTo: "#blocks",
        blocks: [
          {
            id: "image",
            label: "Image",
            // Select the component once it's dropped
            select: true,
            // You can pass components as a JSON instead of a simple HTML string,
            // in this case we also use a defined component type `image`
            content: { type: "image" },
            // This triggers `active` event on dropped components and the `image`
            // reacts by opening the AssetManager
            activate: true,
            stylable: ["width"]
          }
        ]
      }
    });
  }
}
