/* import logo from 'figma:asset/61f153b1999534edd095a4da673452c510e5b0b2.png'; */

export function Footer() {
  return (
    <footer className="bg-stone-900 dark:bg-black text-gray-300 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              {/* <img src={logo} alt="TPodlahy.cz" className="h-8 w-auto brightness-0 invert" /> */}
              <h3 className="text-white font-bold text-xl">TPodlahy.cz</h3>
            </div>
            <p className="text-gray-400 dark:text-gray-500 mb-4">
              Profesionální pokládka podlah s tradicí od roku 2009. Kvalita a preciznost v každém detailu.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Rychlé odkazy</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('home');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="cursor-pointer text-gray-400 hover:text-white hover:underline transition-all"
                >
                  Domů
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('services');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="cursor-pointer text-gray-400 hover:text-white hover:underline transition-all"
                >
                  Služby
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('gallery');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="cursor-pointer text-gray-400 hover:text-white hover:underline transition-all"
                >
                  Galerie
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="cursor-pointer text-gray-400 hover:text-white hover:underline transition-all"
                >
                  Kontakt
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2">
              <li className="text-gray-400 dark:text-gray-500">
                <a href="tel:+420123456789" className="cursor-pointer hover:text-white hover:underline transition-all">
                  Tel: +420 604 786 107
                </a>
              </li>
              <li className="text-gray-400 dark:text-gray-500">
                <a href="mailto:pttom@seznam.cz" className="cursor-pointer hover:text-white hover:underline transition-all">
                  Email: pttom@seznam.cz
                </a>
              </li>
              <li className="text-gray-400 dark:text-gray-500">
                Jeřice 129<br />
                508 01 Jeřice
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-900 pt-8 text-center text-gray-400 dark:text-gray-500">
          <p>&copy; {new Date().getFullYear()} TPodlahy.cz - Všechna práva vyhrazena</p>
        </div>
      </div>
    </footer>
  );
}