import { Component } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

declare var gtag;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        gtag('event', event.urlAfterRedirects);
      }
    });
  }

}
