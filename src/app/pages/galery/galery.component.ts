import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.scss']
})
export class GaleryComponent implements OnInit {
  photos: string[] = [];
  selectedPhoto?: string;

  ngOnInit(): void {
    this.loadImages(16);
  }

  loadImages(count: number): void {
    let name = localStorage.getItem('galeryUrl') || '';
    for (let i = 1; i <= count; i++) {
      this.photos.push(`assets/images/${name}/photo (${i}).jpg`);
    }
  }




  showImage(photo: string) {
    this.selectedPhoto = photo;
  }

  hideImage() {
    this.selectedPhoto = undefined;
  }

  trackPhoto(index: number, photo: string): any {
    return photo; // Or the unique identifier of your photos
  }
}
