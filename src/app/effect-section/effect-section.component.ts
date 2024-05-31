import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-effect-section',
  templateUrl: './effect-section.component.html',
  styleUrls: ['./effect-section.component.scss'],
})
export class EffectSectionComponent  implements OnInit {
  slideOpts = {
    initialSlide: 2,
    slidesPerView: 5,
    centeredSlides: true,
    spaceBetween: 10
  };

  items = [
    { src: 'assets/images/Ellipse.png', alt: 'Image 1' },
    { src: 'assets/images/Ellipse.png', alt: 'Image 2' },
    { src: 'assets/images/Ellipse.png', alt: 'Image 3' },
    { src: 'assets/images/Ellipse.png', alt: 'Image 4' },
    { src: 'assets/images/Ellipse.png', alt: 'Image 5' },
    { src: 'assets/images/Ellipse.png', alt: 'Image 6' },
    { src: 'assets/images/Ellipse.png', alt: 'Image 7' },
  ];

  constructor() { 
  }

  updateCarousel(): void {
    // Angular will automatically handle the DOM updates through the *ngFor directive and class bindings
  }

  ngOnInit() {}
}
