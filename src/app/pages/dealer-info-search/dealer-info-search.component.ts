import { Component, OnInit, HostListener } from '@angular/core';
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import { TransactionService } from 'src/app/services/transaction.service';
import { TransactionModel } from 'src/app/models/transaction';

@Component({
  selector: 'dealer-info-search',
  //styleUrls: ["../../styles.css"],
  templateUrl: './dealer-info-search.component.html',
  providers: [ TransactionService ]
})
export class DealerInfoSearchComponent implements OnInit {
  // Set our default values
  localState = { value: '' };
  screenHeight: number;
  screenWidth: number;
  faSearch = faSearch;
  searchResults: TransactionModel[] = []

  // TypeScript public modifiers
  constructor(
    private transactionService: TransactionService,
  ) {
      this.getScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
      this.screenHeight = window.innerHeight;
      this.screenWidth = window.innerWidth;
  }

  onSearchClick() {
    this.transactionService.getAllTransactions()
                           .subscribe(data => {
                            this.searchResults = data
                            console.log(this.searchResults)
                           })
  }


  ngOnInit() {
  }

  submitState(value: string) {
    console.log('submitState', value);
    this.localState.value = '';
  }
}
