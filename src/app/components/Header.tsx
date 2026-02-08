import { Menu, Phone, Moon, Sun } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-amber-50/95 dark:bg-stone-900/95 backdrop-blur-sm shadow-sm z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            {/* <img src={logo} alt="TPodlahy.cz" className="h-10 w-auto" /> */}
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">TPodlahy.cz</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('home')} className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-amber-700 dark:hover:text-amber-500 hover:underline transition-all">
              Domů
            </button>
            <button onClick={() => scrollToSection('video')} className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-amber-700 dark:hover:text-amber-500 hover:underline transition-all">
              Video
            </button>
            <button onClick={() => scrollToSection('services')} className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-amber-700 dark:hover:text-amber-500 hover:underline transition-all">
              Služby
            </button>
            <button onClick={() => scrollToSection('gallery')} className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-amber-700 dark:hover:text-amber-500 hover:underline transition-all">
              Galerie
            </button>
            <button onClick={() => scrollToSection('about')} className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-amber-700 dark:hover:text-amber-500 hover:underline transition-all">
              O nás
            </button>
            <button onClick={() => scrollToSection('contact')} className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-amber-700 dark:hover:text-amber-500 hover:underline transition-all">
              Kontakt
            </button>
          </nav>

          {/* Contact Info & Theme Toggle */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+420123456789" className="cursor-pointer flex items-center gap-2 text-amber-700 dark:text-amber-500 hover:text-amber-800 dark:hover:text-amber-400 hover:underline transition-all">
              <Phone className="size-4" />
              <span>+420 604 786 107</span>
            </a>
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="size-5 text-yellow-400" /> : <Moon className="size-5 text-gray-700" />}
            </button>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="size-5 text-yellow-400" /> : <Moon className="size-5 text-gray-700 dark:text-gray-300" />}
            </button>
            <button 
              className="p-2 text-gray-700 dark:text-gray-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="size-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollToSection('home')} className="cursor-pointer text-left text-gray-700 dark:text-gray-300 hover:text-amber-700 dark:hover:text-amber-500 hover:underline transition-all">
                Domů
              </button>
              <button onClick={() => scrollToSection('video')} className="cursor-pointer text-left text-gray-700 dark:text-gray-300 hover:text-amber-700 dark:hover:text-amber-500 hover:underline transition-all">
                Video
              </button>
              <button onClick={() => scrollToSection('services')} className="cursor-pointer text-left text-gray-700 dark:text-gray-300 hover:text-amber-700 dark:hover:text-amber-500 hover:underline transition-all">
                Služby
              </button>
              <button onClick={() => scrollToSection('gallery')} className="cursor-pointer text-left text-gray-700 dark:text-gray-300 hover:text-amber-700 dark:hover:text-amber-500 hover:underline transition-all">
                Galerie
              </button>
              <button onClick={() => scrollToSection('about')} className="cursor-pointer text-left text-gray-700 dark:text-gray-300 hover:text-amber-700 dark:hover:text-amber-500 hover:underline transition-all">
                O nás
              </button>
              <button onClick={() => scrollToSection('contact')} className="cursor-pointer text-left text-gray-700 dark:text-gray-300 hover:text-amber-700 dark:hover:text-amber-500 hover:underline transition-all">
                Kontakt
              </button>
              <a href="tel:+420123456789" className="cursor-pointer flex items-center gap-2 text-amber-700 dark:text-amber-500 hover:text-amber-800 dark:hover:text-amber-400 hover:underline transition-all">
                <Phone className="size-4" />
                <span>+420 604 786 107</span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}