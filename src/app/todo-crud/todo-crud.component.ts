import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonServices } from '../services/common.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-todo-crud',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './todo-crud.component.html',
  styleUrl: './todo-crud.component.css',
})
export class TodoCrudComponent implements OnInit {
  formDatas: any = FormGroup;
  formSubmited: boolean = false;
  todoDatas: any = [];
  editType:any = null;

  constructor(
    private fb: FormBuilder,
    private commonServices: CommonServices,
    private title: Title
  ) {}

  ngOnInit(): void {
    // this.formDatas = new FormGroup({
    //   title: new FormControl("", Validators.required),
    //   desc: new FormControl("", Validators.required),
    // })
    this.formDatas = this.fb.group({
      title: ['', Validators.required],
      desc: ['', Validators.required],
    });

    this.getTodos();
    this.title.setTitle("Todo - CRUD APP")
  }

  onSave() {
    if (this.formDatas.invalid) {
      this.formSubmited = true;
      return;
    }

    if(this.editType){
      this.commonServices.updateDataOnLocalStorage(
        'crudDatas',
        this.formDatas.value,
        this.editType.Id
      );
      this.editType = null;
    } else{
      this.commonServices.setDataOnLocalStorage(
        'crudDatas',
        this.formDatas.value
      );
    }
    this.formDatas.reset();
    this.formSubmited = false;
    this.getTodos();
  }

  getTodos() {
    this.todoDatas = this.commonServices.getDataFromLocalStorage('crudDatas');
  }

  deleteTodo(id: number) {
    this.commonServices.removeDataFromLocalStorage('crudDatas', id);
    this.getTodos();
  }

  editTodo(data: any) {
    this.editType = data;
    this.formDatas.patchValue(data);
    // if (this.formDatas.invalid) {
    //   this.formSubmited = true;
    //   return;
    // }

    // this.commonServices.updateDataOnLocalStorage(
    //   'crudDatas',
    //   this.formDatas.value,
    //   data.Id
    // );
    // this.getTodos();
  }
}
