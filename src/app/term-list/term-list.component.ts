import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "science-radar-term-list",
  templateUrl: "./term-list.component.html",
  styleUrls: ["./term-list.component.css"]
})
export class TermListComponent implements OnInit {

  @Input()
  terms;

  constructor() {}

  ngOnInit() {}
}
