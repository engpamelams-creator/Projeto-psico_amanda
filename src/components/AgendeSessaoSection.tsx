import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Calendar, Clock, MessageCircle } from "lucide-react";

export default function AgendeSessaoSection() {
  const whatsappLink = "https://wa.me/5513997022072?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20como%20funciona%20seus%20atendimentos";

  return (
    <section id="agende" className="py-20 md:py-28 bg-gradient-to-br from-accent/20 via-background to-accent/10 relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slower"></div>
      
      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h3 className="text-4xl md:text-5xl font-serif text-primary">
              Agende sua sessão
            </h3>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent rounded-full mx-auto"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Entre em contato para agendar sua primeira consulta
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Card - Como agendar */}
            <Card className="p-8 bg-card/80 backdrop-blur-sm border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 hover-lift group">
              <div className="space-y-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Calendar className="h-7 w-7 text-primary" />
                </div>
                <h4 className="text-2xl font-semibold text-foreground font-serif">
                  Como agendar
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Clique no botão abaixo para iniciar uma conversa pelo WhatsApp. 
                  Vamos escolher juntos o melhor dia e horário para sua sessão.
                </p>
              </div>
            </Card>
            
            {/* Card - Informações importantes */}
            <Card className="p-8 bg-card/80 backdrop-blur-sm border-2 border-accent/20 hover:border-accent/40 transition-all duration-300 hover-lift group">
              <div className="space-y-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Clock className="h-7 w-7 text-primary" />
                </div>
                <h4 className="text-2xl font-semibold text-foreground font-serif">
                  Informações importantes
                </h4>
                <ul className="text-muted-foreground leading-relaxed space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1 text-lg">•</span>
                    <span>Sessões com duração de 1 hora</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1 text-lg">•</span>
                    <span>Atendimento semanal recomendado</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1 text-lg">•</span>
                    <span>Link enviado 1h antes da sessão</span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
          
          {/* CTA Principal */}
          <div className="text-center space-y-8">
            <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border-l-4 border-l-primary p-6 rounded-r-2xl text-left max-w-3xl mx-auto">
              <p className="text-foreground leading-relaxed">
                <strong className="text-primary">Importante:</strong> O link da sessão será enviado com até 1 hora 
                de antecedência, mediante confirmação de pagamento e agendamento.
              </p>
            </div>
            
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground px-10 py-7 text-lg gap-3 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-6 w-6" />
                Agendar pelo WhatsApp
              </a>
            </Button>
            
            <p className="text-sm text-muted-foreground">
              Respondo em até 24 horas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
