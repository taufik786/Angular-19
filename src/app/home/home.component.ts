import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  userDatas:any = []
  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe({
      next: (res) => {
        this.userDatas = res;
        console.log(res)
      },
      error: (err) => {
        console.log(err)
      },
      complete: () => {},
    })
  }
}
