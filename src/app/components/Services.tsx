import { Layers, Building, Hammer, Sparkles } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Layers,
      title: 'Vinylové podlahy',
      description: 'Pokládka moderních vinylových podlah různých designů. Odolné, vodotěsné a jednoduché na údržbu.',
      features: ['LVT podlahy', 'Vinylové desky', 'Klikové systémy', 'Lepené podlahy']
    },
    {
      icon: Hammer,
      title: 'Laminátové podlahy',
      description: 'Instalace kvalitních laminátových podlah pro obytné i komerční prostory.',
      features: ['AC3-AC5 třídy', 'Různé dekory', 'Podlahové topení', 'Soundproofing']
    },
    {
      icon: Building,
      title: 'Renovace schodišť',
      description: 'Kompletní renovace a obložení schodišť vinylem nebo laminátovými materiály.',
      features: ['Dřevěné schody', 'Betonové schody', 'Protiskluzové hrany', 'Moderní design']
    },
    {
      icon: Sparkles,
      title: 'Dodatečné služby',
      description: 'Příprava podkladu, demontáž starých podlah a kompletní poradenství.',
      features: ['Vyrovnání podkladu', 'Demontáž', 'Odhlučnění', 'Konzultace']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-stone-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Naše služby
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Nabízíme komplexní řešení pro pokládku a renovaci podlah s důrazem na kvalitu a precizní provedení
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="bg-amber-50 dark:bg-stone-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="bg-amber-700 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="size-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-400">
                      <div className="w-1.5 h-1.5 bg-amber-700 rounded-full"></div>
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