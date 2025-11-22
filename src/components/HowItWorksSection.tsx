import { Card, CardContent } from "../components/ui/card";
import { Clock, Calendar, CreditCard } from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    {
      icon: Clock,
      title: "As sessões duram 1 hora",
      description: "Tempo adequado para um atendimento completo e efetivo"
    },
    {
      icon: Calendar,
      title: "Atendimento semanal, 1 vez por semana no mínimo",
      description: "Dia e horário a combinar para manter a continuidade do tratamento"
    },
    {
      icon: CreditCard,
      title: "Pagamento via transferência bancária ou pix",
      description: "Formas práticas e seguras de pagamento"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-background via-accent/10 to-background relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-float"></div>
      <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-accent/40 rounded-full animate-float-delayed"></div>
      
      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h3 className="text-4xl md:text-5xl font-serif text-primary">
              Como vai funcionar:
            </h3>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent rounded-full mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card 
                  key={index}
                  className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground hover:shadow-2xl transition-all duration-300 hover-lift group border-0"
                >
                  <CardContent className="p-8 space-y-5">
                    <div className="w-14 h-14 rounded-2xl bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-lg leading-tight">
                        {step.title}
                      </h4>
                      <p className="text-sm text-primary-foreground/90 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
