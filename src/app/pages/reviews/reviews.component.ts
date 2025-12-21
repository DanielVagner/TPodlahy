import { Component } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent {
  reviews = [
    {
      name: 'Pavel Michl',
      title: 'Great Service',
      text:
        'Firmu Tpodlahy, pana Tomáška doporučuji. S odvedenou prací v rámci renovace staré dubové parketové podlahy jsem velice spokojen.' +
        'Především bych chtěl ocenit dobrou komunikaci, kvalitně a rychle odvedenou práci (broušení starého laku, nový lak a osazení nových lišt kolem stěn)',
      rating: 5,
      img: 'assets/images/reviews/p_google.png',
    },
    {
      name: 'Radka Vaňková',
      title: 'Decent Experience',
      text: 'Firmu pana Tomáška jsme kontaktovali s žádostí o posouzení práce jiného podlaháře. Pan Tomášek byl velmi ochotný a obratem se přijel na podlahu podívat.Následná domluva ohledně kompletního přebroušení a realizace nové podlahy jeho firmou byla profesionální a bezproblémová. Přesto, že bylo chvíli před Vánocemi, nám pan Tomášek s rychlostí pokládky vyšel vstříc. S odvedenou prací jsme velice spokojeni. Děkujeme a budeme doporučovat dál.',
      rating: 5,
      img: 'assets/images/reviews/p_google_2.png',
    },
    {
      name: 'Jana Zdobnická',
      title: 'Decent Experience',
      text: 'Kvalitní práce za příznivou cenu a žádné průtahy. Tuto firmu doporučuji a děkuji panu Tomáškovi, že mě nenechal napospas nejmenovanému lupiči z oboru podlahářství, který za stejnou zakázku požadoval dvojnásobek.',
      rating: 5,
      img: 'assets/images/reviews/p_google_3.png',
    },
    {
      name: 'Alena Vosečková',
      title: 'Decent Experience',
      text: 'Firmu Tpodlahy, pana Tomáška mohu doporučit. Jak s prací (odstranění původní korkové podlahy a následně položení vinylové podlahy, osazení lišt kolem stěn), tak s komunikací, ochotou a vstřícností jsem velmi spokojena. Sama tuto firmu ještě určitě využiji.',
      rating: 5,
      img: 'assets/images/reviews/p_google_4.png',
    },
        {
      name: 'Jan Suk',
      title: 'Decent Experience',
      text: 'Profesionální přístup: pan Tomášek komunikuje, zastaví se přes samotnou objednávkou, domluvené termíny a částky dodržuje. Jednoznačně doporučuji.',
      rating: 5,
      img: 'assets/images/reviews/p_google_5.png',
    },
  ];

  currentIndex = 0;

  get currentReview() {
    return this.reviews[this.currentIndex];
  }

  nextReview() {
    this.currentIndex = (this.currentIndex + 1) % this.reviews.length;
  }

  previousReview() {
    this.currentIndex =
      (this.currentIndex - 1 + this.reviews.length) % this.reviews.length;
  }
}
