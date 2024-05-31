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

  filterClasses = [
    { className: 'default', title: 'Default' },
    { className: 'chrome', title: 'Chrome' },
    { className: 'fade', title: 'Fade' },
    { className: 'cold', title: 'Cold' },
    { className: 'warm', title: 'Warm' },
    { className: 'pastel', title: 'Pastel' },
    { className: 'mono', title: 'Mono' },
    { className: 'noir', title: 'Noir' },
    { className: 'stark', title: 'Stark' },
    { className: 'wash', title: 'Wash' },
    { className: 'sepia', title: 'Sepia' },
    { className: 'rust', title: 'Rust' },
    { className: 'blues', title: 'Blues' },
    { className: 'color', title: 'Color' },
    { className: 'brightness', title: 'Brightness' },
    { className: 'contrast', title: 'Contrast' },
    { className: 'saturation', title: 'Saturation' },
    { className: 'exposure', title: 'Exposure' },
    { className: 'temperature', title: 'Temperature' },
    { className: 'gamma', title: 'Gamma' },
    { className: 'clarity', title: 'Clarity' },
    { className: 'vignette', title: 'Vignette' },
    { className: 'shadows', title: 'Shadows' },
    { className: 'highlights', title: 'Highlights' },
    { className: 'sharpen', title: 'Sharpen' },
    { className: 'blur', title: 'Blur' }
];


  constructor() { 
  }

  updateCarousel(): void {
    // Angular will automatically handle the DOM updates through the *ngFor directive and class bindings
  }

  ngOnInit() {}
}
