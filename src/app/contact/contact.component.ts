import {Component} from '@angular/core';

declare var gtag;

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

    onEmailClicked() {
        // Out of curiosity, do people click on the email on my website before copying it thinking it's a link?
        gtag('event', "me@dwilches.com", {event_category: "Link clicked"});
    }

}
