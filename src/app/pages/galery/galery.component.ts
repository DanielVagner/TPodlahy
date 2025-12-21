import { Component, OnDestroy, OnInit, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.scss'],
})
export class GaleryComponent implements OnInit, OnDestroy {
  photos: string[] = [];
  selectedPhoto?: string;

  private currentIndex = -1;

  // swipe
  private touchStartX = 0;
  private touchEndX = 0;

  constructor(private http: HttpClient) {}

  get isOpen(): boolean {
    return !!this.selectedPhoto;
  }

  get canNavigate(): boolean {
    return this.photos.length > 1;
  }

  ngOnInit(): void {
    const folderName = localStorage.getItem('galeryUrl') || '';
    this.loadImages(folderName);
  }

  loadImages(folder: string): void {
    if (!folder) {
      console.error('Folder name is required');
      return;
    }

    const apiUrl = `https://tpodlahy.azurewebsites.net/api/gallery/images?folder=${encodeURIComponent(folder)}`;

    this.http.get<string[]>(apiUrl).subscribe({
      next: (imageUrls) => {
        this.photos = imageUrls ?? [];

        // pokud je open a reloadne se seznam, srovnej index
        if (this.selectedPhoto) {
          const idx = this.photos.indexOf(this.selectedPhoto);
          this.currentIndex = idx >= 0 ? idx : 0;
          this.selectedPhoto = this.photos[this.currentIndex];
        }
      },
      error: (err) => console.error('Error loading images', err),
    });
  }

  ngOnDestroy(): void {
    this.photos = [];
    this.selectedPhoto = undefined;
    this.currentIndex = -1;
  }

  openLightbox(photo: string): void {
    this.selectedPhoto = photo;
    this.currentIndex = this.photos.indexOf(photo);

    // fallback když by se foto nenašlo
    if (this.currentIndex < 0) this.currentIndex = 0;

    // zamez scrollu stránky pod overlayem
    document.body.style.overflow = 'hidden';
  }

  closeLightbox(ev?: Event): void {
    ev?.stopPropagation();
    this.selectedPhoto = undefined;
    this.currentIndex = -1;
    document.body.style.overflow = '';
  }

  next(ev?: Event): void {
    ev?.stopPropagation();
    if (!this.canNavigate) return;

    this.currentIndex = (this.currentIndex + 1) % this.photos.length;
    this.selectedPhoto = this.photos[this.currentIndex];
  }

  prev(ev?: Event): void {
    ev?.stopPropagation();
    if (!this.canNavigate) return;

    this.currentIndex =
      (this.currentIndex - 1 + this.photos.length) % this.photos.length;
    this.selectedPhoto = this.photos[this.currentIndex];
  }

  // Keyboard support: ESC, ←, →
  @HostListener('window:keydown', ['$event'])
  onKeydown(e: KeyboardEvent): void {
    if (!this.isOpen) return;

    if (e.key === 'Escape') {
      this.closeLightbox();
      return;
    }

    if (e.key === 'ArrowRight') {
      this.next();
      return;
    }

    if (e.key === 'ArrowLeft') {
      this.prev();
      return;
    }
  }

  // Touch swipe support
  onTouchStart(e: TouchEvent): void {
    if (!this.isOpen) return;
    this.touchStartX = e.changedTouches[0]?.screenX ?? 0;
  }

  onTouchEnd(e: TouchEvent): void {
    if (!this.isOpen) return;

    this.touchEndX = e.changedTouches[0]?.screenX ?? 0;
    const dx = this.touchEndX - this.touchStartX;

    // práh, aby se to nespouštělo při malém pohybu
    const threshold = 50;

    if (Math.abs(dx) < threshold) return;

    if (dx < 0) {
      this.next();
    } else {
      this.prev();
    }
  }
}
