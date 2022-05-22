import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Miyas-designer-pups';

  public slides = [
    {src: "assets/Black-Poodle.jpg"},
    {src: "assets/Brown-Poodle.jpg"},
    {src: "assets/White-Poodle.jpg"}
  ]
}
