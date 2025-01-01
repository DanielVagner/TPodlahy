import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.scss'],
})
export class GaleryComponent implements OnInit, OnDestroy {
  photos: string[] = [];
  selectedPhoto?: string;

  constructor(private http: HttpClient) {}

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
        this.photos = imageUrls; // Přímo ukládáme URL z backendu
      },
      error: (err) => {
        console.error('Error loading images', err);
      },
    });
  }

  ngOnDestroy(): void {
    this.photos = [];
  }

  showImage(photo: string): void {
    this.selectedPhoto = photo;
  }

  hideImage(): void {
    this.selectedPhoto = undefined;
  }
}
