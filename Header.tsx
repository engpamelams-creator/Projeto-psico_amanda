import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { Menu, X, Instagram } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detectar scroll para adicionar sombra no header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 bg-background border-b border-border/40 transition-all duration-300 ${
        isScrolled ? 'shadow-lg' : ''
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Nome */}
          <div 
            className="flex items-center cursor-pointer group" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <h1 className="text-2xl md:text-3xl font-serif text-primary font-semibold tracking-wide transition-all duration-300 group-hover:text-accent">
              Amanda de Oliveira
            </h1>
          </div>

          {/* Navegação Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('sobre')}
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium relative group"
            >
              Sobre
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('agende')}
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium relative group"
            >
              Agende sua sessão
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium relative group"
            >
              Contato
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            
            {/* Link Instagram */}
            <a
              href="https://instagram.com/amandaoliveira_psicologa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground hover:text-accent transition-all duration-200 hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </nav>

          {/* Botão Menu Mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/40 bg-background animate-fade-in-down">
            <nav className="py-6 space-y-4">
              <button
                onClick={() => scrollToSection('sobre')}
                className="block w-full text-left px-4 py-3 text-foreground hover:text-primary hover:bg-accent/10 rounded-lg transition-all duration-200 font-medium"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection('agende')}
                className="block w-full text-left px-4 py-3 text-foreground hover:text-primary hover:bg-accent/10 rounded-lg transition-all duration-200 font-medium"
              >
                Agende sua sessão
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="block w-full text-left px-4 py-3 text-foreground hover:text-primary hover:bg-accent/10 rounded-lg transition-all duration-200 font-medium"
              >
                Contato
              </button>
              
              <div className="pt-4 border-t border-border/50">
                <a
                  href="https://instagram.com/amandaoliveira_psicologa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 text-foreground hover:text-accent hover:bg-accent/10 rounded-lg transition-all duration-200"
                >
                  <Instagram className="w-5 h-5" />
                  <span className="font-medium">@amandaoliveira_psicologa</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
