import { Layers, Building, Hammer, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Layers,
    title: 'Vinylové podlahy',
    description: 'Pokládka moderních vinylových podlah různých designů. Odolné, vodotěsné a jednoduché na údržbu.',
    features: ['LVT podlahy', 'Vinylové desky', 'Klikové systémy', 'Lepené podlahy'],
  },
  {
    icon: Hammer,
    title: 'Laminátové podlahy',
    description: 'Instalace kvalitních laminátových podlah pro obytné i komerční prostory.',
    features: ['AC3-AC5 třídy', 'Různé dekory', 'Podlahové topení', 'Soundproofing'],
  },
  {
    icon: Building,
    title: 'Renovace schodišť',
    description: 'Kompletní renovace a obložení schodišť vinylem nebo laminátovými materiály.',
    features: ['Dřevěné schody', 'Betonové schody', 'Protiskluzové hrany', 'Moderní design'],
  },
  {
    icon: Sparkles,
    title: 'Dodatečné služby',
    description: 'Příprava podkladu, demontáž starých podlah a kompletní poradenství.',
    features: ['Vyrovnání podkladu', 'Demontáž', 'Odhlučnění', 'Konzultace'],
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-white dark:bg-zinc-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="max-w-xl mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="block w-6 h-px bg-orange-600 dark:bg-orange-500" />
            <span className="text-orange-600 dark:text-orange-400 text-xs font-semibold tracking-widest uppercase">
              Co nabízíme
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white leading-tight tracking-tight mb-4">
            Naše služby
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg leading-relaxed">
            Komplexní řešení pro pokládku a renovaci podlah s důrazem na kvalitu a precizní provedení.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-6 border border-zinc-100 dark:border-zinc-800 hover:border-orange-200 dark:hover:border-orange-900/50 hover:shadow-lg transition-all"
              >
                <div className="bg-orange-600 w-12 h-12 rounded-xl flex items-center justify-center mb-5">
                  <Icon className="size-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">{service.title}</h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-1.5">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                      <span className="w-1.5 h-1.5 bg-orange-600 dark:bg-orange-500 rounded-full flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
