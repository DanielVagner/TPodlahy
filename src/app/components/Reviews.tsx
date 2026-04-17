import { Star, ExternalLink } from 'lucide-react';

const GOOGLE_REVIEWS_URL =
  'https://www.google.com/search?q=TPodlahy+Tom%C3%A1%C5%A1ek+Petr+Recenze&tbm=lcl#lkt=LocalPoiReviews';

const reviews = [
  {
    name: 'Jana Zdobnická',
    date: 'před 5 lety',
    text: 'Kvalitní práce za příznivou cenu a žádné průtahy. Tuto firmu doporučuji a děkuji panu Tomáškovi, že mě nenechal napospas nejmenovanému lupiči z oboru podlahářství, který za stejnou zakázku požadoval dvojnásobek.',
  },
  {
    name: 'Petr Herman',
    date: 'před 4 lety',
    text: 'Pan Tomášek mi postupně realizoval již tři zakázky (renovace starých parket, pokládka plovoucí podlahy a pokládka nových parket). Práce byla vždy odvedena precizně, včas a za dohodnutou cenu.',
  },
  {
    name: 'Jan Suk',
    date: 'před 3 lety',
    text: 'Profesionální přístup: pan Tomášek komunikuje, zastaví se před samotnou objednávkou, domluvené termíny a částky dodržuje. Jednoznačně doporučuji.',
  },
  {
    name: 'Jolana Cermanová',
    date: 'před 3 lety',
    text: 'Firma odvedla precizní práci při renovaci parket. Komunikace, samotné provedení práce bez jakýchkoliv zdržení a výsledek vynikající.',
  },
  {
    name: 'Irena Vosečková',
    date: 'před 5 lety',
    text: 'S vyřízením naší zakázky jsme byli velice spokojeni, kvalitní práce byla provedena včas, rychle, za sjednanou cenu a bez jakýchkoli problémů. Pan Tomášek je spolehlivý a precizní.',
  },
  {
    name: 'Radka Vaňková',
    date: 'před 3 lety',
    text: 'Firmu pana Tomáška jsme kontaktovali s žádostí o posouzení práce jiného podlaháře. Pan Tomášek byl velmi ochotný a obratem se přijel na podlahu podívat. Jeho odborný názor nám velmi pomohl.',
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="size-4 fill-orange-500 text-orange-500" />
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-zinc-50 dark:bg-zinc-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="block w-6 h-px bg-orange-600 dark:bg-orange-500" />
              <span className="text-orange-600 dark:text-orange-400 text-xs font-semibold tracking-widest uppercase">
                Reference
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white leading-tight tracking-tight mb-3">
              Co říkají zákazníci
            </h2>
            <div className="flex items-center gap-3">
              <Stars />
              <span className="text-zinc-700 dark:text-zinc-300 font-semibold">5,0</span>
              <span className="text-zinc-400 dark:text-zinc-500 text-sm">· 19 recenzí na Google</span>
            </div>
          </div>

          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600 dark:text-orange-400 hover:text-orange-500 transition-colors flex-shrink-0"
          >
            Všechny recenze
            <ExternalLink className="size-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-white dark:bg-zinc-950 rounded-2xl p-6 border border-zinc-100 dark:border-zinc-800 flex flex-col gap-4"
            >
              <Stars />
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed flex-1">
                "{review.text}"
              </p>
              <div className="flex items-center justify-between pt-2 border-t border-zinc-100 dark:border-zinc-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400 text-sm font-bold">
                    {review.name[0]}
                  </div>
                  <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">{review.name}</span>
                </div>
                <span className="text-xs text-zinc-400 dark:text-zinc-500">{review.date}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-zinc-200 dark:border-zinc-700 hover:border-orange-400 dark:hover:border-orange-600 text-zinc-700 dark:text-zinc-300 hover:text-orange-600 dark:hover:text-orange-400 font-semibold px-8 py-3.5 rounded-lg transition-colors"
          >
            Zobrazit všechny recenze na Google
            <ExternalLink className="size-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
