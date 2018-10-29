import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "science-radar-author-list",
  templateUrl: "./author-list.component.html",
  styleUrls: ["./author-list.component.css"]
})
export class AuthorListComponent implements OnInit {
  @Input()
  authors;
  constructor() {}

  ngOnInit() {}
}
