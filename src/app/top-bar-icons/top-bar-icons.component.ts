import { Component, OnInit } from '@angular/core';
import { CameraPreview, CameraPreviewOptions } from '@awesome-cordova-plugins/camera-preview/ngx';

@Component({
  selector: 'app-top-bar-icons',
  templateUrl: './top-bar-icons.component.html',
  styleUrls: ['./top-bar-icons.component.scss'],
})
export class TopBarIconsComponent  implements OnInit {

  constructor(
    private cameraPreview: CameraPreview,
  ) { }

  ngOnInit() {}

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
