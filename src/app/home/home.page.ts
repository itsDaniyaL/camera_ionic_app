import { Component } from '@angular/core';
// import { CameraPreview, CameraPreviewOptions } from '@awesome-cordova-plugins/camera-preview/ngx';
import { CameraPreview } from '@capacitor-community/camera-preview';

import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

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

  ngOnInit() { }

  editSelected(icon: { src: string; text: string; action: string }) {
    if (this.editIconActive === icon.text) {
      this.editIconActive = "";
      return;
    }
    this.editIconActive = icon.text;
  }

  isCameraStarted = false;
  imageURL: string | null | undefined = null

  constructor(
  ) { }


  async openCamera() {
    const takePicture = async () => {
      // setTimeout(() => {
      //   document.getElementsByTagName('pwa-camera-modal-instance')[0].style.display = 'block';
      // }, 5000);
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        source: CameraSource.Prompt,
        resultType: CameraResultType.Base64,
      });

      // image.webPath will contain a path that can be set as an image src.
      // You can access the original file using image.path, which can be
      // passed to the Filesystem API to read the raw data of the image,
      // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
      this.imageURL = image.webPath;
    };
    await takePicture();
  }

  rotateImage = false
  RotateImage() {
    const videoDiv = document.getElementsByClassName('camera-video-div');
    if (videoDiv.length) {
      this.rotateImage = !this.rotateImage
      this.rotateImage ? videoDiv[0].classList.add('rotate-div') : videoDiv[0].classList.remove('rotate-div')
    }
  }


}
