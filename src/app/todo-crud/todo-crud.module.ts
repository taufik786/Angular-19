import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoCrudRouting } from './todo-crud.routes';
import { provideHttpClient } from '@angular/common/http';
import { TodoCrudComponent } from './todo-crud.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TodoCrudRouting,
    TodoCrudComponent
  ],
  providers:[
    // provideHttpClient()
  ]
})
export class TodoCrudModule { }