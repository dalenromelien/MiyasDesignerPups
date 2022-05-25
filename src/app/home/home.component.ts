import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public slides = [
    {src: "assets/Black-Poodle.jpg"},
    {src: "assets/Brown-Poodle.jpg"},
    {src: "assets/White-Poodle.jpg"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
