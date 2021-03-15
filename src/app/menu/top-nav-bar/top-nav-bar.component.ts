import { Component } from "@angular/core";
import * as $ from "jquery";
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: "topnav-bar", // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: "./top-nav-bar.component.html"
})
export class TopNavBarComponent {
  // TypeScript public modifier
  constructor( private auth: AuthService) {}

  toggleClicked(event: MouseEvent) {
    var target = event.target
    var body = $("body");
    var menu = $("#sidebar-menu");

    // toggle small or large menu
    if (body.hasClass("nav-md")) {
      menu.find("li.active ul").hide();
      menu
        .find("li.active")
        .addClass("active-sm")
        .removeClass("active");
    } else {
      menu.find("li.active-sm ul").show();
      menu
        .find("li.active-sm")
        .addClass("active")
        .removeClass("active-sm");
    }
    body.toggleClass("nav-md nav-sm");
  }

  onUserClick(e: MouseEvent) {
    var userMenu = $("#userMenu")

    //toggle show or hide
    if (userMenu.css("display") == "none") {
      userMenu.css("display", "block")
    }
    else {
      userMenu.css("display", "none")
    }
    
  }

  logout() {
    this.auth.logout({returnTo: window.location.origin})
  }

  ngOnInit() {
  }

  ngAfterViewInit() {}
}
