import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.scss']
})
export class GaleryComponent implements OnInit, OnDestroy {
  photos: string[] = [];
  selectedPhoto?: string;

  constructor() {}

  ngOnInit(): void {
    this.loadImages(8);
  }


  async loadImages(count: number): Promise<void> {
    const name = localStorage.getItem('galeryUrl') || '';
    let foundImage = true;
  
    for (let i = 1; i <= count && foundImage; i++) {
      const imageUrl = `assets/images/${name}/photo (${i}).jpg`;
  
      try {
        const response = await fetch(imageUrl, { method: 'HEAD' });
        if (response.ok) {
          this.photos.push(imageUrl);
        } else {
          foundImage = false;
        }
      } catch {
        foundImage = false;
      }
    }
  }

  ngOnDestroy(): void {
      this.photos = [];
  }


  showImage(photo: string) {
    this.selectedPhoto = photo;
  }

  hideImage() {
    this.selectedPhoto = undefined;
  }
}
