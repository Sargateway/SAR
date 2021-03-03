import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'new-transaction',
  //styleUrls: ["../../styles.css"],
  templateUrl: './new-transaction.component.html',
  providers: []
})
export class NewTransactionComponent implements OnInit {
  // Set our default values
  localState = { value: '' };
  screenHeight: number;
  screenWidth: number;

  // TypeScript public modifiers
  constructor() {
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
