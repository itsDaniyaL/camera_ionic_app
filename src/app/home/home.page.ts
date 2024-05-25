import { Component } from '@angular/core';
import { CameraPreview, CameraPreviewOptions } from '@awesome-cordova-plugins/camera-preview/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  editIconActive = "";

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

  ngOnInit() {}

  editSelected(icon: { src: string; text: string; action: string }) {
    if(this.editIconActive === icon.text) {
      this.editIconActive = "";
      return;
    }
    this.editIconActive = icon.text;
  }

  constructor(
    private cameraPreview: CameraPreview,
  ) { }

  openCamera(){
    this.startCamera();
  }
  async startCamera() {
    let w = window.screen.width;
    let h = window.screen.height;
    let options: CameraPreviewOptions = {
      height: h,
      width: w,
      camera: "rear",
      storeToFile: false,
    };
    // Start Camera
    await this.cameraPreview.startCamera(options);


    // For Temp Purpose
    setTimeout(() => {
      this.stopCamera()
    }, 5000);

    // For Flash
    // await this.cameraPreview.setFlashMode(this.cameraPreview.FLASH_MODE.TORCH)

    // Camera Zoom
    // await this.cameraPreview.getMaxZoom().then((maxZoom) => {
    //   this.cameraPreview.setZoom(maxZoom * this.cameraSettings.camera_zoom / 100)
    // })
  }


  stopCamera() {
    this.cameraPreview.stopCamera();
  }
}
