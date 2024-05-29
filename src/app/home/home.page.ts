import { Component } from '@angular/core';
// import { CameraPreview, CameraPreviewOptions } from '@awesome-cordova-plugins/camera-preview/ngx';
import { CameraPreview } from '@capacitor-community/camera-preview';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  editIconActive = "";

  canvasButtonsData = [
    { width: '15px', height: '22px', label: '9:16' },
    { width: '22px', height: '15px', label: '16:9' },
    { width: '16px', height: '20px', label: '3:4' },
    { width: '20px', height: '16px', label: '4:3' },
    { width: '22px', height: '22px', label: '1:1' },
  ];

  ngOnInit() {}

  editSelected(icon: { src: string; text: string; action: string }) {
    if(this.editIconActive === icon.text) {
      this.editIconActive = "";
      return;
    }
    this.editIconActive = icon.text;
  }

  isCameraStarted = false;

  constructor(
    // private cameraPreview: CameraPreview,
  ) {
    setTimeout(() => {
      CameraPreview.stop();
    }, 1000);
   }


  async openCamera() {
    await CameraPreview.start({ parent: "cameraPreview", position: 'front', toBack: true });
    this.isCameraStarted = true;
  }

  async stopCamera() {
    await CameraPreview.stop();
    this.isCameraStarted = false;

  }

  async switchCamera() {
    await CameraPreview.flip();
  }
}
