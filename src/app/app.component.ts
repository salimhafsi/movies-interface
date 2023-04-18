import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "test";
  arry = [1, 2, 1, 2, 5];
  ngOnInit() {
    let aa = [];
  }
}
