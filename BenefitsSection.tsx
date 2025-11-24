import { Card, CardContent } from "../components/ui/card";
import { CheckCircle, Star, TrendingUp, MapPin, Users, Smile } from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: CheckCircle,
      title: "Acolhimento Humanizado",
      description: "Espaço seguro e livre de julgamentos para você se expressar e ser compreendido."
    },
    {
      icon: Star,
      title: "Abordagem Personalizada",
      description: "Terapia adaptada às suas necessidades, respeitando seu tempo e ritmo único."
    },
    {
      icon: TrendingUp,
      title: "Resultados Baseados em Evidências",
      description: "TCC comprovada cientificamente para ansiedade, depressão e outros desafios emocionais."
    },
    {
      icon: MapPin,
      title: "Flexibilidade de Atendimento",
      description: "Escolha entre atendimento online ou presencial, conforme sua preferência e disponibilidade."
    },
    {
      icon: Users,
      title: "Desenvolvimento Pessoal",
      description: "Fortalecimento de recursos internos para autoconhecimento, autoestima e mudanças positivas."
    },
    {
      icon: Smile,
      title: "Bem-estar Emocional",
      description: "Técnicas eficazes para gerenciar emoções, reduzir estresse e melhorar qualidade de vida."
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-background via-accent/5 to-background relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Título centralizado */}
          <div className="text-center space-y-4">
            <h3 className="text-4xl md:text-5xl font-serif text-primary">
              Benefícios da Terapia
            </h3>
            <div className="h-1 w-32 bg-gradient-to-r from-primary to-accent rounded-full mx-auto"></div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Descubra como a psicoterapia pode transformar sua vida e promover seu bem-estar emocional
            </p>
          </div>
          
          {/* Grid de 6 cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card 
                  key={index}
                  className="bg-card border-t-4 border-t-accent hover:shadow-xl transition-all duration-300 hover-lift group"
                >
                  <CardContent className="p-8 space-y-5 text-center">
                    <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="text-xl font-semibold text-primary font-serif">
                      {benefit.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {benefit.description}
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
