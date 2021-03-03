import { Component, OnInit, HostListener } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'new-transaction',
  templateUrl: './new-transaction.component.html',
  providers: []
})
export class NewTransactionComponent implements OnInit {
  // Set our default values
  localState = { value: '' };
  screenHeight: number;
  screenWidth: number;

  // TypeScript public modifiers
  constructor(private formBuilder: FormBuilder) {
      this.getScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
      this.screenHeight = window.innerHeight;
      this.screenWidth = window.innerWidth;
  }


  ngOnInit() {
  }

}
