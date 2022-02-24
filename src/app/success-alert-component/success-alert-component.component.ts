import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert-component',
 // templateUrl: './success-alert-component.component.html',
  template: `<p>You are a sucess</p>`,
  styleUrls: ['./success-alert-component.component.scss']
})
export class SuccessAlertComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
