import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

    sections = [
        {
            name: "Languages",
            class: "badge-primary",
            items: ["C++", "Java", "PL/SQL", "C#", "TypeScript", "Erlang"]
        },
        {
            name: "Databases",
            class: "badge-info",
            items: ["Oracle", "PostgreSQL", "MongoDB (NoSQL)"]
        },
        {
            name: "Other",
            class: "badge-primary",
            items: ["AWS (EC2, RDS)", "REST WebServices", "HTML", "Node", "Angular", "Android", "Arduino"]
        }
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
