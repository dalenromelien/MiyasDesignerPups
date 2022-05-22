import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, style, animate, useAnimation } from '@angular/animations';
import { fadeIn, fadeOut } from './carousel.animations';
import { repeat } from 'rxjs';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [useAnimation(fadeIn)]),
      transition('* => void', [useAnimation(fadeOut)])
    ])
  ]
})
export class CarouselComponent implements OnInit {
  @Input() slides:any;

  currentSlide = 0;

  constructor() { }

  onPreviousClick(){
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1: previous;
  }

  onNextClick(){
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
  }

  slideTimer(){
    setTimeout(() => {
      const next = this.currentSlide + 1;
      this.currentSlide = next === this.slides.length ? 0 : next;
      this.slideTimer();
    }, 5000)
  }

  ngOnInit(): void {
    this.slideTimer();
  }

}
