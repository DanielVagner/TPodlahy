import { Award, Users, Clock, Shield } from 'lucide-react';

export function About() {
  const stats = [
    {
      icon: Clock,
      number: '25+',
      label: 'Let zkušeností'
    },
    {
      icon: Users,
      number: '500+',
      label: 'Spokojených zákazníků'
    },
    {
      icon: Award,
      number: '100%',
      label: 'Záruka kvality'
    },
    {
      icon: Shield,
      number: '5',
      label: 'Let záruka'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-stone-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              O nás
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Jsme rodinná firma s více než 25letou tradicí v oblasti pokládky podlah, renovace parket, pokládku pvc a koberce. Specializujeme se na vinylové podlahy, laminát a renovace schodišť.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Naším cílem je poskytovat našim zákazníkům pouze ty nejkvalitnější materiály a služby za férové ceny. Každý projekt bereme jako jedinečný a přistupujeme k němu s maximální pečlivostí.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Pracujeme s prověřenými dodavateli a používáme pouze certifikované materiály. Na všechny naše práce poskytujeme záruku.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-amber-700 rounded-full mt-2"></div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Kvalita a preciznost</h3>
                  <p className="text-gray-600 dark:text-gray-300">Dbáme na každý detail a perfektní dokončení každé zakázky</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-amber-700 rounded-full mt-2"></div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Profesionální tým</h3>
                  <p className="text-gray-600 dark:text-gray-300">Naši pracovníci jsou vyškolení specialisté s dlouholetou praxí</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-amber-700 rounded-full mt-2"></div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Férové ceny</h3>
                  <p className="text-gray-600 dark:text-gray-300">Nabízíme transparentní cenovou kalkulaci bez skrytých poplatků</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index}
                  className="bg-amber-50 dark:bg-stone-900 rounded-xl p-8 shadow-lg text-center"
                >
                  <div className="bg-amber-100 dark:bg-amber-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="size-8 text-amber-700 dark:text-amber-500" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{stat.number}</div>
                  <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}