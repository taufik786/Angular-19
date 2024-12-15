import { RouterModule, Routes } from "@angular/router";
import { TodoCrudComponent } from "./todo-crud.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {path:"todo-app", component: TodoCrudComponent}
]

@NgModule({
    imports:[RouterModule.forChild(routes)]
})
export class TodoCrudRouting {}