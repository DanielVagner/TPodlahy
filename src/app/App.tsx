import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Video } from './components/Video';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ThemeProvider } from './contexts/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-amber-50 dark:bg-stone-900 transition-colors">
        <Header />
        <main>
          <Hero />
          <Video />
          <Services />
          <Gallery />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}