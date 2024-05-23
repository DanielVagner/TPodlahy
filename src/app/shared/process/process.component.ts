import { Component,ChangeDetectorRef, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss']
})
export class ProcessComponent {

  safeURL: SafeResourceUrl;
  shouldAutoplay: boolean = false;
  @ViewChild('videoPlayer') videoPlayer!: ElementRef;

  modalRef!: BsModalRef;
      constructor(private _sanitizer: DomSanitizer, public cd: ChangeDetectorRef, private renderer: Renderer2){
        this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/watch?v=5oJP9X16etg&t');
     }

   playVideo(){
      this.shouldAutoplay = true;
      if (this.videoPlayer && this.videoPlayer.nativeElement) {
        this.setAutoplayBasedOnCondition(true);
      }
      this.cd.detectChanges();
    }

  stopVideo(){
    console.log('stop video');
    this.shouldAutoplay = false;
    this.setAutoplayBasedOnCondition(false);
    this.cd.detectChanges();
  }

  setAutoplayBasedOnCondition(condition: boolean) {
    if (condition) {
      this.renderer.setAttribute(this.videoPlayer.nativeElement, 'autoplay', 'autoplay');
      this.videoPlayer.nativeElement.load(); // Znovu načte video pro aplikaci změny
      this.videoPlayer.nativeElement.play(); // Zajistí spuštění videa, pokud autoplay sám o sobě nestačí
    } else {
      this.renderer.removeAttribute(this.videoPlayer.nativeElement, 'autoplay');
      this.videoPlayer.nativeElement.load(); // Znovu načte video, aby změna nabyla účinnosti
      this.videoPlayer.nativeElement.pause(); // Zastaví video, pokud ještě hraje
      this.videoPlayer.nativeElement.currentTime = 0; // Vrátí video na začátek
    }
  }

}
