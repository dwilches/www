import { Routes } from '@angular/router';
import {CoverComponent} from "./cover/cover.component";
import {ContactComponent} from "./contact/contact.component";
import {AboutComponent} from "./about/about.component";

export const routes: Routes = [
  {
    path: '',
    component: CoverComponent,
    pathMatch: 'full'
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  }];
