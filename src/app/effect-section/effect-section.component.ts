import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as faceapi from 'face-api.js';

@Component({
  selector: 'app-effect-section',
  templateUrl: './effect-section.component.html',
  styleUrls: ['./effect-section.component.scss'],
})
export class EffectSectionComponent  implements OnInit, AfterViewInit {
  @Input() imageURL!: any;
  @Input() imageElement!: any;
  @Input() canvasElement!: any;

  selectedFilter: any;

  constructor() {}

  async ngOnInit() {
    await this.loadModels();
  }

  async ngAfterViewInit() {
    if (this.imageURL) {
      await this.applyFilters();
    }
  }

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

  async loadModels() {
    const MODEL_URL = 'assets/models';
    try {
      await faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL);
      await faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL);
      console.log('Models loaded successfully');
    } catch (error) {
      console.error('Error loading models:', error);
    }
  }

  onImageLoad() {
    this.applyFilters();
  }

  async applyFilters() {
    const image = this.imageElement.nativeElement;
    const canvas = this.canvasElement.nativeElement;

    const displaySize = { width: image.width, height: image.height };
    faceapi.matchDimensions(canvas, displaySize);

    try {
      const detections = await faceapi.detectAllFaces(image).withFaceLandmarks();
      const resizedDetections = faceapi.resizeResults(detections, displaySize);

      // Clear canvas
      const context = canvas.getContext('2d');
      if (context) {
        context.clearRect(0, 0, canvas.width, canvas.height);
      }

      // Apply filters based on detected landmarks
      resizedDetections.forEach((detection) => {
        const landmarks = detection.landmarks;
        const nose = landmarks.getNose();
        this.drawCircle(nose[3].x, nose[3].y, 10);
      });

      faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
    } catch (error) {
      console.error('Error detecting faces or drawing landmarks:', error);
    }
  }

  drawCircle(x: number, y: number, radius: number) {
    const canvas = this.canvasElement.nativeElement;
    const context = canvas.getContext('2d');
    if (context) {
      context.beginPath();
      context.arc(x, y, radius, 0, 2 * Math.PI);
      context.fillStyle = 'rgba(255, 0, 0, 0.5)';
      context.fill();
    } else {
      console.error('Canvas context is not available');
    }
  }

  applySelectedFilter(filter: any) {
    this.selectedFilter = filter;
    // Update the filter application logic here based on the selected filter
    console.log('Selected filter:', filter);
  }
}
