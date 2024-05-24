import { Component, OnInit } from '@angular/core';
import { CameraPreview } from '@capacitor-community/camera-preview';
@Component({
  selector: 'app-view-finder',
  templateUrl: './view-finder.page.html',
  styleUrls: ['./view-finder.page.scss'],
})
export class ViewFinderPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }



  async openCamera() {
    await CameraPreview.start({ parent: "cameraPreview" });
  }

  async stopCamera() {
    await CameraPreview.stop();
  }

}
