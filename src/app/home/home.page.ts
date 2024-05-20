import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  editIconActive = false;

  constructor() {}

  onClick() {
    this.editIconActive = !this.editIconActive;
  }

}
