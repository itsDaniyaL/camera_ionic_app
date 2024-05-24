import { Component } from '@angular/core';
// import { CameraPreview, CameraPreviewOptions } from '@awesome-cordova-plugins/camera-preview/ngx';
import { CameraPreview } from '@capacitor-community/camera-preview';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  editIconActive = false;

  isCameraStarted = false;

  constructor(
    // private cameraPreview: CameraPreview,
  ) { }

  onClick() {
    this.editIconActive = !this.editIconActive;
  }


  // openCamera() {
  //   this.isCameraStarted = true;
  //   this.startCamera();
  // }
  // async startCamera() {
  //   let w = window.screen.width;
  //   let h = window.screen.height;
  //   let options: CameraPreviewOptions = {
  //     height: h,
  //     width: w,
  //     camera: "rear",
  //     storeToFile: false,
  //     toBack: true
  //   };
  //   // Start Camera
  //   const camera = await this.cameraPreview.startCamera(options);
  //   // await this.cameraPreview.setFlashMode(this.cameraPreview.FLASH_MODE.TORCH)
  //   // alert(JSON.stringify(this.cameraPreview.setFlashMode(this.cameraPreview.FLASH_MODE.TORCH)))
  //   alert(JSON.stringify(this.cameraPreview.getCameraCharacteristics()))

  //   // For Temp Purpose
  //   // setTimeout(() => {
  //   //   this.stopCamera()
  //   // }, 5000);

  //   // For Flash
  //   // await this.cameraPreview.setFlashMode(this.cameraPreview.FLASH_MODE.TORCH)

  //   // Camera Zoom
  //   // await this.cameraPreview.getMaxZoom().then((maxZoom) => {
  //   //   this.cameraPreview.setZoom(maxZoom * this.cameraSettings.camera_zoom / 100)
  //   // })
  // }
  // stopCamera() {
  //   this.isCameraStarted = false;
  //   this.cameraPreview.stopCamera();
  // }
  // switchCamera() {
  //   this.cameraPreview.switchCamera();
  // }


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
