import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'selenium-webdriver';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent implements OnInit {

  title: string;
  message: string;

  //@Output() close = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClose() {
    console.log('close')
    //this.close.emit(null)
  }

}
