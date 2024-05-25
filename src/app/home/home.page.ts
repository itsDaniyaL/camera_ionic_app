import { Component } from '@angular/core';
import { CameraPreview, CameraPreviewOptions } from '@awesome-cordova-plugins/camera-preview/ngx';

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

  // canvasButtonsData = [
  //   { width: '15px', height: '22px', label: '9:16' },
  //   { width: '22px', height: '15px', label: '16:9' },
  //   { width: '16px', height: '20px', label: '3:4' },
  //   { width: '20px', height: '16px', label: '4:3' },
  //   { width: '22px', height: '22px', label: '1:1' },
  // ];

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
