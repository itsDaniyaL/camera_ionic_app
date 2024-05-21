import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-icons',
  templateUrl: './edit-icons.component.html',
  styleUrls: ['./edit-icons.component.scss'],
})
export class EditIconsComponent  implements OnInit {
  editIconActive = false;

  icons = [
    { src: 'assets/svg/adjust-icon.svg', text: 'Adjust', action: '' },
    { src: 'assets/svg/effect-icon.svg', text: 'Effect', action: '' },
    { src: 'assets/svg/preset-icon.svg', text: 'Preset', action: '' },
    { src: 'assets/svg/transition-icon.svg', text: 'Transition', action: '' },
    { src: 'assets/svg/music-icon.svg', text: 'Music', action: '' },
    { src: 'assets/svg/sticker-icon.svg', text: 'Sticker', action: '' },
    { src: 'assets/svg/text-icon.svg', text: 'Text', action: '' },
    { src: 'assets/svg/canvas-icon.svg', text: 'Canvas', action: '' },
  ]

  constructor() { }

  ngOnInit() {}

  onClick() {
    this.editIconActive = !this.editIconActive;
  }
}
