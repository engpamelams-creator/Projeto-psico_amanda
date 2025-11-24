import { Button } from "../components/ui/button";
import { Instagram, MessageCircle } from "lucide-react";

export default function Footer() {
  const whatsappLink = "https://wa.me/5513997022072?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20como%20funciona%20seus%20atendimentos";
  const instagramLink = "https://instagram.com/amandaoliveira_psicologa";
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className="border-t border-border/40 bg-gradient-to-br from-accent/10 via-background to-primary/5 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container py-16 md:py-20 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {/* About */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <span className="text-2xl">🧠</span>
              </div>
              <h4 className="text-xl font-serif font-semibold text-primary">
                Amanda de Oliveira
              </h4>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Psicóloga CRP 06/156877. Especialista em TCC, Psicologia Jurídica e ABA. 
              Atendimento online para adolescentes e adultos.
            </p>
          </div>
          
          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-foreground font-serif">
              Contato
            </h4>
            <div className="space-y-4">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="h-5 w-5 text-primary" />
                </div>
                <span>+55 13 99702-2072</span>
              </a>
              <a 
                href={instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Instagram className="h-5 w-5 text-primary" />
                </div>
                <span>@amandaoliveira_psicologa</span>
              </a>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-foreground font-serif">
              Redes Sociais
            </h4>
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="icon"
                asChild
                className="border-primary/20 hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 hover:scale-110 w-12 h-12 rounded-xl"
              >
                <a href={instagramLink} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="h-5 w-5 text-primary" />
                </a>
              </Button>
              
              <Button
                variant="outline"
                size="icon"
                asChild
                className="border-accent/20 hover:bg-accent/10 hover:border-accent/40 transition-all duration-300 hover:scale-110 w-12 h-12 rounded-xl"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <MessageCircle className="h-5 w-5 text-primary" />
                </a>
              </Button>
            </div>
            
            <Button
              className="w-full md:w-auto bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-xl"
              asChild
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4 mr-2" />
                Agendar Consulta
              </a>
            </Button>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-border/40 text-center space-y-3">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Amanda de Oliveira – Psicóloga. Todos os direitos reservados.
          </p>
          <p className="text-sm text-muted-foreground">
            Desenvolvido por{" "}
            <a 
              href="https://devpamelams.com.br/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-accent transition-colors font-medium hover:underline"
            >
              Dev Pamela M.S
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
