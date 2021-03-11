import { Component } from '@angular/core';
import * as jQuery from 'jquery';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SAR';
  constructor(public auth: AuthService) {}
}
