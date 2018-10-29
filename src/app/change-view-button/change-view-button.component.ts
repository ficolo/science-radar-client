import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'science-radar-change-view-button',
  templateUrl: './change-view-button.component.html',
  styleUrls: ['./change-view-button.component.css']
})
export class ChangeViewButtonComponent implements OnInit {

  @HostBinding() class = 'fixed-button';

  constructor() { }

  ngOnInit() {
  }

}
