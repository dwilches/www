import {Component} from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";

@Component({
  selector: 'app-about',
  imports: [NgClass, NgForOf],
  templateUrl: './about.component.html',
  standalone: true,
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  sections = [
    {
      name: "Languages",
      class: "badge-primary",
      items: ["C++", "Python", "Java", "TypeScript", "PL/SQL" ]
    },
    {
      name: "Databases",
      class: "badge-info",
      items: ["Oracle", "PostgreSQL", "ElasticSearch", "MongoDB"]
    },
    {
      name: "Other",
      class: "badge-primary",
      items: ["AWS (EC2, RDS, ECS, ...)", "Docker", "REST WebServices", "HTML", "Node.js", "Angular", "Arduino"]
    }
  ];

}
