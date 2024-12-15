import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
declare var bootstrap: any;

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent implements OnInit {
  constructor(private title: Title){}
  ngOnInit(): void {
    this.title.setTitle("Todo - Contact page")
  }
}
