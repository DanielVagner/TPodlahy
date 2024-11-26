import { Component } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent {
  reviews = [
    {
      title: 'Podlaha v obývacím pokoji',
      text: 'Byli jsme nadšeni z kvality podlahy i rychlosti instalace.',
      rating: 5
    },
    {
      title: 'Rekonstrukce staré podlahy',
      text: 'Starou podlahu jste zrenovovali k nepoznání. Děkujeme!',
      rating: 5
    },
    {
      title: 'Vinylové podlahy v kuchyni',
      text: 'Vinylová podlaha je krásná a snadno se udržuje.',
      rating: 5
    }
  ];

  newReview = { text: '', rating: 0 };

  addReview() {
    if (this.newReview.text.trim() && this.newReview.rating > 0) {
      this.reviews.push({
        title: 'Nová recenze',
        text: this.newReview.text.trim(),
        rating: this.newReview.rating
      });
      this.newReview = { text: '', rating: 0 };
    }
  }
}
