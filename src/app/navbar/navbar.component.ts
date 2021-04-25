import {Component} from '@angular/core';

declare var gtag;

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {


    onLinkedInClicked() {
        gtag('event', "LinkedIn", {event_category: "Link clicked"});
    }

}
