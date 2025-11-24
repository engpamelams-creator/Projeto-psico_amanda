import { Card, CardContent } from "../components/ui/card";
import { User, Heart, Briefcase, UserCheck, Home, MapPin } from "lucide-react";

export default function ForWhoSection() {
  const items = [
    {
      icon: User,
      title: "Adultos e Adolescentes",
      description: "A partir de 14 anos que buscam autoconhecimento e desenvolvimento pessoal."
    },
    {
      icon: Heart,
      title: "Questões Emocionais",
      description: "Ansiedade, depressão, estresse, baixa autoestima e dificuldades nos relacionamentos."
    },
    {
      icon: Briefcase,
      title: "Mudanças de Vida",
      description: "Transições de carreira, relacionamentos, luto ou outros momentos de transformação."
    },
    {
      icon: UserCheck,
      title: "Autoconhecimento",
      description: "Pessoas que desejam se conhecer melhor e desenvolver seu potencial interno."
    },
    {
      icon: Home,
      title: "Bem-estar Geral",
      description: "Quem busca melhorar qualidade de vida, gerenciar emoções e fortalecer relacionamentos."
    },
    {
      icon: MapPin,
      title: "Flexibilidade de Local",
      description: "Ideal para quem prefere atendimento online ou presencial, de acordo com sua rotina."
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-accent/5 via-background to-primary/5 relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-slower"></div>
      
      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Título centralizado */}
          <div className="text-center space-y-4">
            <h3 className="text-4xl md:text-5xl font-serif text-primary">
              Para Quem É
            </h3>
            <div className="h-1 w-32 bg-gradient-to-r from-primary to-accent rounded-full mx-auto"></div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              A terapia é para você que busca transformação, acolhimento e desenvolvimento pessoal
            </p>
          </div>
          
          {/* Grid de 6 cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card 
                  key={index}
                  className="bg-card hover:shadow-xl transition-all duration-300 hover-lift group border-2 border-primary/10 hover:border-primary/30"
                >
                  <CardContent className="p-8 space-y-5 text-center">
                    <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h4 className="text-xl font-semibold text-primary font-serif">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {item.description}
                    </p>
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
