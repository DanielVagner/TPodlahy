export function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 text-zinc-400 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 bg-orange-600 rounded flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs font-bold">TP</span>
              </div>
              <span className="text-white font-bold text-lg">
                TPodlahy<span className="text-orange-500">.cz</span>
              </span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Profesionální pokládka podlah s tradicí od roku 2009. Kvalita a preciznost v každém detailu.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wide">Rychlé odkazy</h4>
            <ul className="space-y-2">
              {[
                { id: 'home', label: 'Domů' },
                { id: 'services', label: 'Služby' },
                { id: 'gallery', label: 'Galerie' },
                { id: 'contact', label: 'Kontakt' },
              ].map(({ id, label }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollTo(id)}
                    className="text-zinc-500 hover:text-white transition-colors text-sm"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wide">Kontakt</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+420604786107" className="text-zinc-500 hover:text-white transition-colors">
                  +420 604 786 107
                </a>
              </li>
              <li>
                <a href="mailto:pttom@seznam.cz" className="text-zinc-500 hover:text-white transition-colors">
                  pttom@seznam.cz
                </a>
              </li>
              <li className="text-zinc-500">
                Jeřice 129, 508 01 Jeřice
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-zinc-800 pt-8 text-center text-zinc-600 text-sm">
          <p>&copy; {new Date().getFullYear()} TPodlahy.cz — Všechna práva vyhrazena</p>
        </div>
      </div>
    </footer>
  );
}
