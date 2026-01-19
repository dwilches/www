import {Component} from '@angular/core';

declare var gtag: any;

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  onEmailClicked() {
    // Out of curiosity, do people click on the email on my website before copying it thinking it's a link?
    gtag('event', "me@dwilches.com", {event_category: "Link clicked"});
  }

}
