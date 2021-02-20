import { Component } from '@angular/core';
import * as jQuery from 'jquery';
import { TestService } from '../services/test.service';

@Component({
  selector: 'content',
  //styleUrls: ["../../styles.css"],
  templateUrl: './content.component.html',
  providers: [TestService]
})
export class ContentComponent {
  // Set our default values
  localState = { value: '' };

  // TypeScript public modifiers
  constructor(public testService: TestService) {}

  ngOnInit() {
   
  }

  onButtonClickLambda() {
    this.testService.getTestData()
                    .subscribe(data => {
                      console.log(data)
                    })
  }

  submitState(value: string) {
    console.log('submitState', value);
    this.localState.value = '';
  }
}
