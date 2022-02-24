import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert-component',
  // templateUrl: './warning-alert-component.component.html',
  template: `<p>You are a in danger</p>`,
  // styleUrls: ['./warning-alert-component.component.scss']
  styles: [ `p { padding: 20px; background-color: mistyrose; border: 2px solid red }`]
})
export class WarningAlertComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
