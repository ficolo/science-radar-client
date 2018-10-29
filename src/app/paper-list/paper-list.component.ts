import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "science-radar-paper-list",
  templateUrl: "./paper-list.component.html",
  styleUrls: ["./paper-list.component.css"]
})
export class PaperListComponent implements OnInit {
  @Input()
  papers;

  constructor() {}

  ngOnInit() {}
}
