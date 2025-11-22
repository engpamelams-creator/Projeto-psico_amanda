import { Button } from "../components/ui/button";
import { Brain, Sparkles } from "lucide-react";

export default function HeroSection() {
  const whatsappLink = "https://wa.me/5513997022072?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20como%20funciona%20seus%20atendimentos";

  const scrollToAgende = () => {
    const agendeSection = document.getElementById('agende');
    if (agendeSection) {
      agendeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background via-primary/5 to-accent/10 pt-20">
      {/* Elementos decorativos animados de fundo */}
      <div className="absolute top-32 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float-delayed"></div>
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-2xl animate-pulse-slow"></div>
      
      {/* Formas geométricas decorativas */}
      <div className="absolute top-40 right-1/4 opacity-20">
        <Sparkles className="w-12 h-12 text-accent animate-pulse-slower" />
      </div>
      <div className="absolute bottom-32 left-1/4 opacity-20">
        <Brain className="w-16 h-16 text-primary animate-float" />
      </div>
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-12">
          {/* Coluna esquerda - Texto */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Badge com ícone */}
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
              <Brain className="w-5 h-5 text-accent" />
              <span className="text-primary font-medium">Amanda de Oliveira</span>
            </div>
            
            {/* Título principal */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary leading-tight">
              Aprenda recursos mentais para identificar e controlar a ansiedade
            </h1>
            
            {/* Subtítulo */}
            <p className="text-xl text-muted-foreground leading-relaxed">
              Atendimento personalizado on-line
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={scrollToAgende}
                className="px-8 py-6 text-lg bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-medium"
              >
                AGENDE SUA SESSÃO
              </Button>
              
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="px-8 py-6 text-lg border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-300 hover:scale-105 font-medium"
                >
                  Fale no WhatsApp
                </Button>
              </a>
            </div>
            
            {/* CRP */}
            <p className="text-sm text-muted-foreground pt-4">
              CRP: 06/156877
            </p>
          </div>
          
          {/* Coluna direita - Foto da Amanda */}
          <div className="relative animate-fade-in-right">
            {/* Card com foto */}
            <div className="relative group">
              {/* Gradiente de fundo */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              
              {/* Container da foto */}
              <div className="relative bg-gradient-to-br from-accent/30 to-primary/30 p-1 rounded-3xl">
                <div className="relative bg-background rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/amanda-foto.jpg"
                    alt="Amanda de Oliveira - Psicóloga"
                    className="w-full h-auto object-cover rounded-3xl transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Overlay com ícone Psi */}
                  <div className="absolute bottom-8 right-8 w-20 h-20 bg-primary rounded-2xl shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Brain className="w-10 h-10 text-primary-foreground" />
                  </div>
                </div>
              </div>
              
              {/* Elementos decorativos ao redor da foto */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-pulse-slow"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-pulse-slower"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
