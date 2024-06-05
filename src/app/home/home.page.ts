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
  public editIconActive = "";
  public ratioWindow = false
  public showSideButtons = false
  public showTopButtons = false
  public showRatioCanvasOptions = false
  public showAcceptRejectButtons = false
  public isCameraStarted = false;
  public imageURL: string | null | undefined = null
  public rotateImage = false
  public draggable!: HTMLDivElement
  public resizeHandles!: NodeListOf<HTMLDivElement>

  constructor() { }
  ngOnInit() { }

  public editSelected(icon: { src: string; text: string; action: string }) {
    if (this.editIconActive === icon.text) {
      this.editIconActive = "";
      this.ratioWindow = false;
      return;
    }
    this.editIconActive = icon.text;
    if (icon.action !== '') {
      (this as any)[icon.action]();
    }
  }

  public async openCamera() {
    const takePicture = async () => {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        source: CameraSource.Prompt,
        resultType: CameraResultType.Uri,
      });
      this.imageURL = image.webPath;
      this.pictureCaptureCompleted();
    };
    await takePicture();
  }

  public toggleRatioCanvas() {
    this.ratioWindow = !this.ratioWindow
    if (this.ratioWindow) {
      this.makeDragableDiv()
      this.setDivSizeToRatio({ label: 'Custom' });
    }
  }

  public setDivSizeToRatio(event: any) {
    const ratio = event?.label || null;
    if (ratio) {
      if (ratio === '1:1') {
        this.setBoxSizeAndLocation((window.screen.availWidth - (window.screen.availWidth / 2)).toString(), '0', window.screen.availWidth + 'px', window.screen.availWidth + 'px');
      }
      else if (ratio == 'Custom') {
        let minDimension = Math.min(window.screen.availWidth, window.screen.availHeight);
        let boxSize = minDimension / 2;

        this.setBoxSizeAndLocation(window.screen.availHeight / 4 + '', window.screen.availWidth / 4 + '', boxSize + 'px', boxSize + 'px');
      }
      else if (ratio == '16:9') {
      }
      else if (ratio == '9:16') {
        if (window.screen.orientation.type.includes('portrait')) {
          this.setBoxSizeAndLocation('0', '0', '100vh', '100vw');
        }
      }
    }
  }

  public applyFilter(event: any) {
    this.showAcceptRejectButtons = true
    const image = document.getElementById('photo-image') as HTMLImageElement;
    image.className = '';
    image.classList.add(event?.className)
  }

  cropImage(): Promise<HTMLCanvasElement> {
    return new Promise((resolve, reject) => {
      const image = document.getElementById('photo-image') as HTMLImageElement;
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      if (!ctx) {
        reject('Failed to get 2D context');
        return;
      }

      canvas.width = parseInt(this.draggable.style.width);
      canvas.height = parseInt(this.draggable.style.height);
      ctx.drawImage(image, parseInt(this.draggable.style.left), parseInt(this.draggable.style.top), parseInt(this.draggable.style.width), parseInt(this.draggable.style.height), 0, 0, parseInt(this.draggable.style.width), parseInt(this.draggable.style.height));
      const dataUrl = canvas.toDataURL();
      this.imageURL = dataUrl;
      this.toggleRatioCanvas()
      this.showAcceptRejectButtons = false
      this.showSideButtons = true
      this.showRatioCanvasOptions = false
      resolve(canvas);
    });
  }

  setBoxSizeAndLocation(top: string, left: string, height: string, width: string) {
    this.draggable.style.top = `${top}px`;
    this.draggable.style.left = `${left}px`;
    this.draggable.style.height = `${height}`;
    this.draggable.style.width = `${width}`;
  }

  public pictureCaptureCompleted() {
    this.showSideButtons = true
    this.showAcceptRejectButtons = true
    // we donot need these any more as we alreay have camerea for that
    // this.showTopButtons = true
  }

  public acceptRejectHandler(event: string) {
    if (event === 'accept') {
      if (this.editIconActive === 'Canvas') {
        this.cropImage()
        this.editIconActive = ''
      }
      else if (this.editIconActive === 'Effect') {
        this.showSideButtons = true
        this.editIconActive = ''
      }
      else {
        this.showSideButtons = true
        this.editIconActive = ''
      }
    }
    else if (event === 'reject') {

    }
    // (this as any)[event]();
  }

  // Exceptional
  public makeDragableDiv() {
    const draggable = document.getElementById("draggable") as HTMLDivElement;
    const resizeHandles = document.querySelectorAll(".resize-handle") as NodeListOf<HTMLDivElement>;

    this.draggable = draggable
    this.resizeHandles = resizeHandles
    let isDragging = false;
    let isResizing = false;
    let offsetX: number;
    let offsetY: number;
    let initialWidth: number;
    let initialHeight: number;
    let initialMouseX: number;
    let initialMouseY: number;
    let currentHandle: HTMLDivElement | null = null;

    function onMouseDownOrTouchStart(e: MouseEvent | TouchEvent) {
      const target = e.target as HTMLElement;

      if (target.classList.contains("resize-handle")) {
        isResizing = true;
        currentHandle = target as HTMLDivElement;
        const clientX = (e instanceof MouseEvent) ? e.clientX : e.touches[0].clientX;
        const clientY = (e instanceof MouseEvent) ? e.clientY : e.touches[0].clientY;
        initialWidth = draggable.offsetWidth;
        initialHeight = draggable.offsetHeight;
        initialMouseX = clientX;
        initialMouseY = clientY;
      } else {
        isDragging = true;
        const clientX = (e instanceof MouseEvent) ? e.clientX : e.touches[0].clientX;
        const clientY = (e instanceof MouseEvent) ? e.clientY : e.touches[0].clientY;
        offsetX = clientX - draggable.getBoundingClientRect().left;
        offsetY = clientY - draggable.getBoundingClientRect().top;
        draggable.style.cursor = "grabbing";
      }
      document.addEventListener("mousemove", onMouseMoveOrTouchMove);
      document.addEventListener("touchmove", onMouseMoveOrTouchMove);
      document.addEventListener("mouseup", onMouseUpOrTouchEnd);
      document.addEventListener("touchend", onMouseUpOrTouchEnd);
    }

    function onMouseMoveOrTouchMove(e: MouseEvent | TouchEvent) {
      const ratioCanvasSectionOptions = document.getElementById("ratio-canvas-section") as HTMLDivElement;
      const acceptRejectButtonOptions = document.getElementById("accept-reject-button") as HTMLDivElement;
      const sideBarButtonOptions = document.getElementById("container") as HTMLDivElement;
      ratioCanvasSectionOptions.style.display = sideBarButtonOptions.style.display = acceptRejectButtonOptions.style.display = 'none'

      const clientX = (e instanceof MouseEvent) ? e.clientX : e.touches[0].clientX;
      const clientY = (e instanceof MouseEvent) ? e.clientY : e.touches[0].clientY;

      if (isDragging) {
        const minX = 0;
        const minY = 0;
        const maxX = window.innerWidth - draggable.offsetWidth;
        const maxY = window.innerHeight - draggable.offsetHeight;

        let newX = clientX - offsetX;
        let newY = clientY - offsetY;

        if (newX < minX) newX = minX;
        if (newY < minY) newY = minY;
        if (newX > maxX) newX = maxX;
        if (newY > maxY) newY = maxY;

        draggable.style.left = `${newX}px`;
        draggable.style.top = `${newY}px`;
      } else if (isResizing && currentHandle) {
        let newWidth = initialWidth;
        let newHeight = initialHeight;
        let newX = draggable.getBoundingClientRect().left;
        let newY = draggable.getBoundingClientRect().top;

        if (currentHandle.classList.contains("resize-handle-e") || currentHandle.classList.contains("resize-handle-se") || currentHandle.classList.contains("resize-handle-ne")) {
          newWidth = initialWidth + (clientX - initialMouseX);
        }

        if (currentHandle.classList.contains("resize-handle-s") || currentHandle.classList.contains("resize-handle-se") || currentHandle.classList.contains("resize-handle-sw")) {
          newHeight = initialHeight + (clientY - initialMouseY);
        }

        if (currentHandle.classList.contains("resize-handle-w") || currentHandle.classList.contains("resize-handle-sw") || currentHandle.classList.contains("resize-handle-nw")) {
          newWidth = initialWidth - (clientX - initialMouseX);
          newX = draggable.getBoundingClientRect().right - newWidth;
        }

        if (currentHandle.classList.contains("resize-handle-n") || currentHandle.classList.contains("resize-handle-ne") || currentHandle.classList.contains("resize-handle-nw")) {
          newHeight = initialHeight - (clientY - initialMouseY);
          newY = draggable.getBoundingClientRect().bottom - newHeight;
        }

        if (newWidth < 50) newWidth = 50; // minimum width
        if (newHeight < 50) newHeight = 50; // minimum height
        if (newX < 0) newX = 0;
        if (newY < 0) newY = 0;

        draggable.style.width = `${newWidth}px`;
        draggable.style.height = `${newHeight}px`;
        draggable.style.left = `${newX}px`;
        draggable.style.top = `${newY}px`;
      }
    }

    function onMouseUpOrTouchEnd() {
      const ratioCanvasSectionOptions = document.getElementById("ratio-canvas-section") as HTMLDivElement;
      const acceptRejectButtonOptions = document.getElementById("accept-reject-button") as HTMLDivElement;
      const sideBarButtonOptions = document.getElementById("container") as HTMLDivElement;
      ratioCanvasSectionOptions.style.display = sideBarButtonOptions.style.display = acceptRejectButtonOptions.style.display = 'block'
      isDragging = false;
      isResizing = false;
      draggable.style.cursor = "grab";
      document.removeEventListener("mousemove", onMouseMoveOrTouchMove);
      document.removeEventListener("touchmove", onMouseMoveOrTouchMove);
      document.removeEventListener("mouseup", onMouseUpOrTouchEnd);
      document.removeEventListener("touchend", onMouseUpOrTouchEnd);
    }

    draggable.addEventListener("mousedown", onMouseDownOrTouchStart);
    draggable.addEventListener("touchstart", onMouseDownOrTouchStart);

  }

}
