import { Layers, Hammer, Sparkles, Ruler } from 'lucide-react';

function ParquetIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="1" />
      <line x1="2" y1="9" x2="22" y2="9" />
      <line x1="2" y1="16" x2="22" y2="16" />
      <line x1="9" y1="2" x2="9" y2="9" />
      <line x1="15" y1="9" x2="15" y2="16" />
      <line x1="9" y1="16" x2="9" y2="22" />
    </svg>
  );
}

function StairsIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="4,20 4,15 9,15 9,10 14,10 14,5 20,5 20,20" />
      <line x1="4" y1="20" x2="20" y2="20" />
    </svg>
  );
}

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
    icon: ParquetIcon,
    title: 'Renovace parket',
    description: 'Profesionální renovace dřevěných parket — broušení, tmelení, lakování i olejování.',
    features: ['Broušení parket', 'Tmelení spár', 'Lakování & olejování', 'Oprava poškozených prken'],
  },
  {
    icon: StairsIcon,
    title: 'Renovace schodišť',
    description: 'Kompletní renovace a obložení schodišť vinylem nebo laminátovými materiály.',
    features: ['Dřevěné schody', 'Betonové schody', 'Protiskluzové hrany', 'Moderní design'],
  },
  {
    icon: Ruler,
    title: 'Zaměření a pokládka vinylových krytin',
    description: 'Přesné zaměření prostoru a odborná pokládka vinylových podlahových krytin na míru.',
    features: ['Zaměření zdarma', 'PVC role & dílce', 'Bezešvá pokládka', 'Komerční i bytové prostory'],
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
