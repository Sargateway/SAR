import { Component, OnInit, HostListener } from '@angular/core';
import {faSearch} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'content',
  //styleUrls: ["../../styles.css"],
  templateUrl: './dealer-info-search.component.html',
  providers: []
})
export class DealerInfoSearchComponent implements OnInit {
  // Set our default values
  localState = { value: '' };
  screenHeight: number;
  screenWidth: number;
  faSearch = faSearch;

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

  submitState(value: string) {
    console.log('submitState', value);
    this.localState.value = '';
  }
}
