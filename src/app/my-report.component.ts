import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-report',
  template: `<h1>Header</h1>
  <p>{{name}}</p>'`
})
export class MyReportComponent implements OnInit {

  name: string;

  constructor() { }

  ngOnInit() {
    this.name = 'Something';
  }

}