import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoverComponent } from './cover/cover.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
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
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
