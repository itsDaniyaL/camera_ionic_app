import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-icons',
  templateUrl: './edit-icons.component.html',
  styleUrls: ['./edit-icons.component.scss'],
})
export class EditIconsComponent  implements OnInit {
  @Input() editIconActive: string;
  @Output() editSelected = new EventEmitter<string>();
  constructor() { 
    this.editIconActive = "";
  }

  handleEditSelected(icon: { src: string; text: string; action: string }) {
    this.editSelected.emit(icon);
  }

  ngOnInit() {}
}
