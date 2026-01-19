import {Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-cover',
  standalone: true,
  templateUrl: './cover.component.html',
  imports: [
    NgOptimizedImage
  ],
  styleUrls: ['./cover.component.scss']
})
export class CoverComponent {
}
