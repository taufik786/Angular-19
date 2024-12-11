import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: "home", component: HomeComponent},
    {path: "contact", component: ContactComponent},
    {path: "", redirectTo: "home", pathMatch:"full"},
];
