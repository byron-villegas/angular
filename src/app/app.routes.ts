import { Routes } from '@angular/router';
import { AboutComponent } from './modules/home/components/about/about.component';
import { DetailComponent } from './modules/user/components/detail/detail.component';

export const routes: Routes = [
    { path: 'about', component: AboutComponent },
    { path: 'users', component: DetailComponent}
];