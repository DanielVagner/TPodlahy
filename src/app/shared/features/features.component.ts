import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
})
export class FeaturesComponent {
  photoId = 1;



  saveState(name: string): void {
    localStorage.setItem('galeryUrl', name);
  }
}
