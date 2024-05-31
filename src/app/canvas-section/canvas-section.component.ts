import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-canvas-section',
  templateUrl: './canvas-section.component.html',
  styleUrls: ['./canvas-section.component.scss'],
})
export class CanvasSectionComponent implements OnInit {
  @Input() editIconActive: string;
  @Output() ratioClickedEmitter: EventEmitter<any> = new EventEmitter<any>();

  canvasButtonsData = [
    { width: '15px', height: '22px', label: '9:16' },
    { width: '22px', height: '15px', label: '16:9' },
    { width: '16px', height: '20px', label: '3:4' },
    { width: '20px', height: '16px', label: '4:3' },
    { width: '22px', height: '22px', label: '1:1' },
  ];

  constructor() {
    this.editIconActive = "";
  }

  ngOnInit() { }


  ratioClicked(icon: any) {
    this.ratioClickedEmitter.emit(icon)
  }
}
