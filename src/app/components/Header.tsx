import { Menu, Phone, Moon, Sun, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const navItems = [
  { id: 'home', label: 'Domů' },
  { id: 'video', label: 'Video' },
  { id: 'services', label: 'Služby' },
  { id: 'gallery', label: 'Galerie' },
  { id: 'reviews', label: 'Recenze' },
  { id: 'about', label: 'O nás' },
  { id: 'contact', label: 'Kontakt' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navItems.map(item => item.id);
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.4 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
      setActiveSection(id);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md shadow-sm'
          : 'bg-white/85 dark:bg-zinc-950/85 backdrop-blur-sm'
      }`}
    >
      <div className="border-b border-zinc-200/70 dark:border-zinc-800/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <button onClick={() => scrollToSection('home')} className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 bg-orange-600 rounded flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs font-bold tracking-wide">TP</span>
              </div>
              <span className="text-lg font-bold tracking-tight text-zinc-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                TPodlahy<span className="text-orange-600 dark:text-orange-400">.cz</span>
              </span>
            </button>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-0.5">
              {navItems.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`relative px-3.5 py-2 text-sm font-medium rounded-md transition-all ${
                    activeSection === id
                      ? 'text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/20'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/50'
                  }`}
                >
                  {label}
                  {activeSection === id && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-orange-600 dark:bg-orange-400" />
                  )}
                </button>
              ))}
            </nav>

            {/* Right – phone + theme */}
            <div className="hidden lg:flex items-center gap-2">
              <a
                href="tel:+420604786107"
                className="flex items-center gap-2 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors px-3 py-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800/50"
              >
                <Phone className="size-4 text-orange-600 dark:text-orange-400" />
                +420 604 786 107
              </a>
              <div className="w-px h-5 bg-zinc-200 dark:bg-zinc-700" />
              <button
                onClick={toggleTheme}
                className="p-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-colors"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="size-4 text-orange-400" /> : <Moon className="size-4 text-zinc-600" />}
              </button>
            </div>

            {/* Mobile controls */}
            <div className="flex md:hidden items-center gap-1">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="size-4 text-orange-400" /> : <Moon className="size-4 text-zinc-600 dark:text-zinc-400" />}
              </button>
              <button
                className="p-2 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <nav
        className={`md:hidden bg-white/98 dark:bg-zinc-950/98 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 overflow-hidden transition-[max-height] duration-300 ease-out ${
          mobileMenuOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-0.5">
          {navItems.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`text-left px-3 py-2.5 rounded-md text-sm font-medium transition-all ${
                activeSection === id
                  ? 'text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/20'
                  : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800/50'
              }`}
            >
              {label}
            </button>
          ))}
          <div className="border-t border-zinc-200 dark:border-zinc-800 mt-2 pt-3">
            <a
              href="tel:+420604786107"
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-orange-600 dark:text-orange-400"
            >
              <Phone className="size-4" />
              +420 604 786 107
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
