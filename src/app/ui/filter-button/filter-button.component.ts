import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-button',
  template: '<ng-content></ng-content>',
  styleUrls: ['./filter-button.component.scss']
})
export class FilterButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
