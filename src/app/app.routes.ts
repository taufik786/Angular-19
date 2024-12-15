import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: "", redirectTo: "home", pathMatch:"full"},
    {path: "home", component: HomeComponent},
    {path: "contact", component: ContactComponent},
    {path: "", loadChildren: () => import("./todo-crud/todo-crud.module").then(m => m.TodoCrudModule)},
    {path: "**", redirectTo: "/home"}
];
