import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.scss']
})
export class GalleryComponent implements OnInit {
  photos: string[] = [];

  ngOnInit(): void {
    this.loadPhotos();
  }

  loadPhotos(): void {
    for (let i = 1; i <= 16; i++) {
      console.log(i);
      this.photos.push(`assets/products/${i}.jpg`);
    }
  }
}
