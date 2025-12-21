import {
  Component,
  ChangeDetectorRef,
  ElementRef,
  Renderer2,
  ViewChild,
  OnDestroy
} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss'],
})
export class ProcessComponent implements OnDestroy {
  safeURL: SafeResourceUrl;
  shouldAutoplay = false;

  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;
  @ViewChild('presentationVideo') presentationVideo!: ModalDirective;

  private modalSub?: Subscription;

  constructor(
    private sanitizer: DomSanitizer,
    public cd: ChangeDetectorRef,
    private renderer: Renderer2
  ) {
    this.safeURL = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/watch?v=5oJP9X16etg&t'
    );
  }

  ngAfterViewInit(): void {
    // vždy když se modal zavře jakýmkoliv způsobem -> stop video
    this.modalSub = this.presentationVideo.onHidden.subscribe(() => {
      this.stopVideo();
    });
  }

  ngOnDestroy(): void {
    this.modalSub?.unsubscribe();
  }

  playVideo(): void {
    this.shouldAutoplay = true;

    if (this.videoPlayer?.nativeElement) {
      this.setAutoplayBasedOnCondition(true);
    }

    this.cd.detectChanges();
  }

  stopVideo(): void {
    this.shouldAutoplay = false;

    if (this.videoPlayer?.nativeElement) {
      this.setAutoplayBasedOnCondition(false);
    }

    this.cd.detectChanges();
  }

  private setAutoplayBasedOnCondition(condition: boolean): void {
    const video = this.videoPlayer.nativeElement;

    if (condition) {
      this.renderer.setAttribute(video, 'autoplay', 'autoplay');
      video.load();

      // play() může failnout bez user gesture – tady jsi v click handleru, takže ok
      void video.play();
    } else {
      this.renderer.removeAttribute(video, 'autoplay');

      video.pause();
      video.currentTime = 0;

      // load až po pause/currentTime, ať se to spolehlivě resetne
      video.load();
    }
  }
}
