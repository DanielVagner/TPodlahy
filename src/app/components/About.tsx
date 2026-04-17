import { Award, Users, Clock } from 'lucide-react';

const stats = [
  { icon: Clock, number: '1993', label: 'Od roku' },
  { icon: Users, number: '500+', label: 'Spokojených zákazníků' },
  { icon: Award, number: '100%', label: 'Spokojenost zákazníků' },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-zinc-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left – text */}
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="block w-6 h-px bg-orange-600 dark:bg-orange-500" />
              <span className="text-orange-600 dark:text-orange-400 text-xs font-semibold tracking-widest uppercase">
                O nás
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white leading-tight tracking-tight mb-6">
              Rodinná firma<br />
              <span className="text-orange-600 dark:text-orange-400">s tradicí.</span>
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mb-5">
              Jsme rodinná firma s více než 25letou tradicí v oblasti pokládky podlah, renovace parket, pokládce PVC a koberců. Specializujeme se na vinylové podlahy, laminát a renovace schodišť.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed mb-5">
              Naším cílem je poskytovat pouze ty nejkvalitnější materiály a služby za férové ceny. Každý projekt bereme jako jedinečný a přistupujeme k němu s maximální pečlivostí.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed mb-10">
              Pracujeme s prověřenými dodavateli a používáme pouze certifikované materiály. Na všechny naše práce poskytujeme záruku.
            </p>

            <div className="space-y-4">
              {[
                { title: 'Kvalita a preciznost', desc: 'Dbáme na každý detail a perfektní dokončení každé zakázky' },
                { title: 'Profesionální tým', desc: 'Naši pracovníci jsou vyškolení specialisté s dlouholetou praxí' },
                { title: 'Férové ceny', desc: 'Nabízíme transparentní cenovou kalkulaci bez skrytých poplatků' },
              ].map(({ title, desc }) => (
                <div key={title} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-orange-600 dark:bg-orange-500 rounded-full mt-2.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-zinc-900 dark:text-white mb-0.5">{title}</h3>
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right – stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-8 border border-zinc-100 dark:border-zinc-800 flex items-center gap-6"
                >
                  <div className="bg-orange-100 dark:bg-orange-900/30 w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="size-7 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-zinc-900 dark:text-white">{stat.number}</div>
                    <div className="text-zinc-500 dark:text-zinc-400 text-sm mt-0.5">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
