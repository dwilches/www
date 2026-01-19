import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";

declare var gtag: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  standalone: true,
  imports: [
    RouterLinkActive,
    RouterLink
  ],
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {


    onLinkedInClicked() {
        gtag('event', "LinkedIn", {event_category: "Link clicked"});
    }

}
