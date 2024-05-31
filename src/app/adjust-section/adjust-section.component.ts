import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-adjust-section',
  templateUrl: './adjust-section.component.html',
  styleUrls: ['./adjust-section.component.scss'],
})
export class AdjustSectionComponent  implements OnInit {

  adjustButtonsData = [
    { icon: '' },
    { icon: '' },
    { icon: 'assets/svg/adjust_buttons/brightness.svg' },
    { icon: 'assets/svg/adjust_buttons/brightness.svg' },
    { icon: 'assets/svg/adjust_buttons/brightness.svg' },
    { icon: 'assets/svg/adjust_buttons/brightness.svg' },
    { icon: 'assets/svg/adjust_buttons/brightness.svg' }
  ];

  constructor() {
    
  }

  ngOnInit() {}

}
